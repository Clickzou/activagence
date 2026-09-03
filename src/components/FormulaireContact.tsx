"use client";

import { useState } from "react";
import { AGENCE } from "@/data/agence";

/**
 * Formulaire de contact — correctif n°1 de l'audit du 2026-09-02 :
 * l'ancienne page /contact/ ne contenait aucun <form>, uniquement une carte Google.
 *
 * Parti pris metier : sur ce metier, le prospect hesite precisement a telephoner.
 * Le formulaire demande donc le minimum, laisse choisir le moyen de reponse,
 * et affiche l'engagement de confidentialite au-dessus du bouton d'envoi.
 */

const SITUATIONS = [
  "Situation personnelle ou familiale",
  "Doute conjugal",
  "Recherche d'une personne",
  "Pension alimentaire ou droit de garde",
  "Situation professionnelle ou salarié",
  "Concurrence, contrefaçon ou fraude",
  "Autre / je préfère en parler de vive voix",
];

type Etat = "repos" | "envoi" | "succes" | "erreur";

export default function FormulaireContact() {
  const [etat, setEtat] = useState<Etat>("repos");
  const [message, setMessage] = useState("");

  async function soumettre(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat("envoi");
    setMessage("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; erreur?: string };

      if (res.ok && json.ok) {
        setEtat("succes");
      } else {
        setEtat("erreur");
        setMessage(
          json.erreur ??
            `Votre message n'a pas pu être transmis. Vous pouvez nous joindre au ${AGENCE.telephone}.`,
        );
      }
    } catch {
      setEtat("erreur");
      setMessage(
        `Votre message n'a pas pu être transmis. Vous pouvez nous joindre au ${AGENCE.telephone}.`,
      );
    }
  }

  if (etat === "succes") {
    return (
      <div
        role="status"
        className="border-l-4 border-marque bg-ardoise-50 px-6 py-8"
      >
        <h3 className="font-display text-xl font-semibold text-nuit">Message reçu.</h3>
        <p className="mt-3 max-w-prose leading-relaxed text-nuit-700">
          Nous vous répondons sous 24 heures ouvrées, par le moyen que vous avez indiqué.
          Si votre situation est urgente, appelez-nous directement au{" "}
          <a href={`tel:${AGENCE.telephoneE164}`} className="lien-contenu">
            {AGENCE.telephone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={soumettre} className="grid gap-5" noValidate={false}>
      {/* Piege a robots : un humain ne remplit jamais ce champ. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="societe-web">Ne pas remplir</label>
        <input id="societe-web" name="societe_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1 block text-sm font-medium text-nuit">
            Comment vous appeler&nbsp;? <span className="text-ardoise-400">(un prénom suffit)</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            maxLength={80}
            autoComplete="given-name"
            className="w-full rounded-sm border border-ardoise-200 px-4 py-3 focus:border-nuit"
          />
        </div>

        <div>
          <label htmlFor="moyen" className="mb-1 block text-sm font-medium text-nuit">
            Comment souhaitez-vous être recontacté&nbsp;?
          </label>
          <select
            id="moyen"
            name="moyen"
            className="w-full rounded-sm border border-ardoise-200 bg-white px-4 py-3 focus:border-nuit"
            defaultValue="telephone"
          >
            <option value="telephone">Par téléphone</option>
            <option value="email">Par e-mail</option>
            <option value="sms">Par SMS discret</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-nuit">
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            inputMode="tel"
            maxLength={25}
            autoComplete="tel"
            className="w-full rounded-sm border border-ardoise-200 px-4 py-3 focus:border-nuit"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-nuit">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={120}
            autoComplete="email"
            className="w-full rounded-sm border border-ardoise-200 px-4 py-3 focus:border-nuit"
          />
        </div>
      </div>

      <div>
        <label htmlFor="situation" className="mb-1 block text-sm font-medium text-nuit">
          De quel type de situation s&apos;agit-il&nbsp;?
        </label>
        <select
          id="situation"
          name="situation"
          className="w-full rounded-sm border border-ardoise-200 bg-white px-4 py-3 focus:border-nuit"
          defaultValue={SITUATIONS[0]}
        >
          {SITUATIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-nuit">
          Ce que vous souhaitez nous dire{" "}
          <span className="text-ardoise-400">(vous n&apos;êtes pas obligé de tout détailler ici)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={3000}
          className="w-full rounded-sm border border-ardoise-200 px-4 py-3 focus:border-nuit"
        />
      </div>

      <p className="max-w-prose text-sm leading-relaxed text-ardoise-400">
        Votre demande est traitée de manière strictement confidentielle. Nous ne vous
        recontactons que par le moyen que vous avez choisi, et nous ne laissons jamais de
        message identifiable sans votre accord.
      </p>

      {etat === "erreur" && (
        <p role="alert" className="border-l-4 border-red-700 bg-red-50 px-4 py-3 text-sm text-red-900">
          {message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="bouton-primaire" disabled={etat === "envoi"}>
          {etat === "envoi" ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
        <span className="text-sm text-ardoise-400">
          ou appelez le{" "}
          <a href={`tel:${AGENCE.telephoneE164}`} className="lien-contenu">
            {AGENCE.telephone}
          </a>
        </span>
      </div>
    </form>
  );
}
