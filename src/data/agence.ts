/**
 * Source unique de verite pour le NAP (Name, Address, Phone).
 *
 * Regle SEO local : toute divergence entre le site, la fiche Google Business Profile
 * et les annuaires supprime de la visibilite locale. Aucune de ces valeurs ne doit
 * etre reecrite en dur ailleurs dans le code — tout passe par ce fichier.
 *
 * Valeurs reprises de l'export WordPress du 2026-09-02 (page Contact + mentions legales).
 */

export const AGENCE = {
  nom: "Activ'Agence",
  nomComplet: "Activ'Agence — Détectives privés à Toulouse",
  baseline: "Agence de détectives privés à Toulouse",

  adresse: {
    rue: "23 boulevard des Minimes",
    complement: "Résidence Madiran, Bât. B",
    codePostal: "31200",
    ville: "Toulouse",
    pays: "FR",
  },

  // Coordonnees du 23 bd des Minimes, Toulouse (arrondi a 4 decimales).
  geo: { latitude: 43.6221, longitude: 1.4392 },

  telephone: "05 61 57 17 33",
  telephoneE164: "+33561571733",

  /**
   * Horaires CONFIRMES par le client le 2026-09-02 : du lundi au vendredi, 8h-18h.
   * Le « 24h/24 » affiche par l'ancien site etait errone et ne doit reapparaitre
   * nulle part. Ces horaires sont publies en JSON-LD : ils doivent rester
   * strictement identiques a ceux de la fiche Google Business Profile.
   */
  horaires: {
    libelle: "Du lundi au vendredi, 8h - 18h",
    schema: [
      {
        jours: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        ouverture: "08:00",
        fermeture: "18:00",
      },
    ],
  },

  /**
   * Adresse de contact publique, CONFIRMEE par le client le 2026-09-02.
   * L'audit recommandait une adresse sur le domaine ; le client conserve
   * volontairement celle-ci. C'est donc l'adresse a afficher partout, et celle
   * qui doit figurer a l'identique sur la fiche Google Business Profile et
   * dans les annuaires (coherence NAP).
   *
   * Attention pour l'envoi du formulaire : Resend n'accepte comme expediteur
   * qu'une adresse sur un domaine verifie. CONTACT_FROM reste donc une adresse
   * @activagencetoulouse.fr (technique, invisible du visiteur) et CONTACT_TO
   * pointe sur l'adresse ci-dessous.
   */
  email: "activagence@free.fr",

  // Autorisations CNAPS — argument de legitimite n°1 du metier, a afficher haut de page.
  cnaps: ["031 2114 10 05 20150359055", "031 2114 10 05 20150375989"],

  anneesExperience: 30,

  societe: {
    forme: "SAS",
    capital: "10 000 €",
    rcs: "RCS 750365520 Toulouse",
    directeurPublication: "M. Coumel",
  },

  hebergeur: {
    nom: "o2switch",
    adresse: "224 boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France",
    telephone: "04 44 44 60 40",
  },

  /**
   * TODO CLIENT — aucun profil social reel n'existait sur l'ancien site
   * (les liens pointaient vers facebook.com/, instagram.com/, twitter.com/).
   * `sameAs` doit rester vide tant qu'aucun profil verifie n'existe : un sameAs
   * vers une page inexistante affaiblit l'entite au lieu de la renforcer.
   * A remplir en priorite avec l'URL de la fiche Google Business Profile.
   */
  sameAs: [] as string[],
} as const;

export const SITE = {
  url: "https://activagencetoulouse.fr",
  nom: "Activ'Agence",
  langue: "fr-FR",
  locale: "fr_FR",
} as const;

/** Zone d'intervention — sert au JSON-LD (areaServed) et aux futures pages villes. */
export const ZONE_INTERVENTION = {
  principale: "Toulouse",
  agglomeration: [
    "Blagnac",
    "Colomiers",
    "Tournefeuille",
    "Muret",
    "Balma",
    "L'Union",
    "Saint-Orens-de-Gameville",
    "Ramonville-Saint-Agne",
  ],
  region: ["Haute-Garonne", "Occitanie"],
  villesEtendues: ["Montauban", "Albi", "Castres", "Auch", "Foix", "Carcassonne"],
} as const;

/** Adresse postale formatee sur une ligne — utilisee dans le footer et les schemas. */
export function adresseUneLigne(): string {
  const a = AGENCE.adresse;
  return `${a.rue}, ${a.complement}, ${a.codePostal} ${a.ville}`;
}
