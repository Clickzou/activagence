import { NextResponse } from "next/server";
import { AGENCE } from "@/data/agence";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Reception des demandes de contact.
 *
 * L'envoi passe par Resend en HTTP (aucune dependance npm supplementaire).
 * Variables d'environnement attendues :
 *   RESEND_API_KEY   cle API
 *   CONTACT_TO       destinataire reel (par defaut : l'adresse de l'agence)
 *   CONTACT_FROM     expediteur verifie sur le domaine, ex. site@activagencetoulouse.fr
 *
 * Tant que RESEND_API_KEY n'est pas defini, la route repond 503 avec un message
 * exploitable cote formulaire : jamais de faux « message envoye ».
 */

interface Payload {
  nom?: string;
  telephone?: string;
  email?: string;
  moyen?: string;
  situation?: string;
  message?: string;
  societe_web?: string;
}

// Limitation simple par IP, en memoire. Suffisant pour le volume attendu ;
// a remplacer par un store partage si le site passe sur plusieurs instances.
const derniersEnvois = new Map<string, number[]>();
const FENETRE_MS = 10 * 60 * 1000;
const MAX_PAR_FENETRE = 5;

function tropDeRequetes(ip: string): boolean {
  const maintenant = Date.now();
  const precedents = (derniersEnvois.get(ip) ?? []).filter((t) => maintenant - t < FENETRE_MS);
  precedents.push(maintenant);
  derniersEnvois.set(ip, precedents);
  return precedents.length > MAX_PAR_FENETRE;
}

function echapper(v: string): string {
  return v.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c] ?? c);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "inconnue";

  if (tropDeRequetes(ip)) {
    return NextResponse.json(
      { erreur: "Trop de demandes envoyées. Merci de réessayer dans quelques minutes." },
      { status: 429 },
    );
  }

  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ erreur: "Requête invalide." }, { status: 400 });
  }

  // Honeypot : rempli = robot. On repond 200 pour ne pas lui signaler le filtre.
  if (data.societe_web) {
    return NextResponse.json({ ok: true });
  }

  const nom = (data.nom ?? "").trim();
  const telephone = (data.telephone ?? "").trim();
  const email = (data.email ?? "").trim();

  if (!nom) {
    return NextResponse.json({ erreur: "Merci d'indiquer un prénom." }, { status: 400 });
  }
  if (!telephone && !email) {
    return NextResponse.json(
      { erreur: "Indiquez au moins un téléphone ou un e-mail pour que nous puissions vous répondre." },
      { status: 400 },
    );
  }

  const cle = process.env.RESEND_API_KEY;
  const destinataire = process.env.CONTACT_TO ?? AGENCE.email;
  const expediteur = process.env.CONTACT_FROM;

  if (!cle || !expediteur) {
    console.error(
      "[contact] RESEND_API_KEY ou CONTACT_FROM manquant — demande non transmise.",
      { nom, moyen: data.moyen },
    );
    return NextResponse.json(
      {
        erreur: `Le formulaire n'est pas encore relié à la messagerie de l'agence. Appelez-nous au ${AGENCE.telephone}.`,
      },
      { status: 503 },
    );
  }

  const corps = [
    `Prénom : ${echapper(nom)}`,
    `Rappel souhaité : ${echapper(data.moyen ?? "non précisé")}`,
    `Téléphone : ${echapper(telephone || "—")}`,
    `E-mail : ${echapper(email || "—")}`,
    `Type de situation : ${echapper(data.situation ?? "non précisé")}`,
    "",
    "Message :",
    echapper((data.message ?? "").slice(0, 3000) || "—"),
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cle}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: expediteur,
        to: [destinataire],
        reply_to: email || undefined,
        subject: `Demande de contact — ${nom}`,
        text: corps,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] echec Resend", res.status, detail);
      return NextResponse.json(
        {
          erreur: `Votre message n'a pas pu être transmis. Appelez-nous au ${AGENCE.telephone}.`,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] erreur reseau", err);
    return NextResponse.json(
      { erreur: `Votre message n'a pas pu être transmis. Appelez-nous au ${AGENCE.telephone}.` },
      { status: 502 },
    );
  }
}
