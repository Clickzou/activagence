import type { ComponentType } from "react";

/**
 * Icônes des motifs d'enquête.
 *
 * Elles sont choisies d'après le texte de chaque item plutôt qu'assignées dans
 * l'ordre : les listes de motifs diffèrent d'une page à l'autre, et une icône
 * distribuée au hasard finirait par contredire le libellé qu'elle accompagne.
 */

const commun = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Doute conjugal : deux anneaux désunis. */
function Conjugal() {
  return (
    <svg {...commun}>
      <circle cx="9" cy="14" r="4.75" />
      <circle cx="15.5" cy="9.5" r="4.75" />
    </svg>
  );
}

/** Pension alimentaire : balance. */
function Pension() {
  return (
    <svg {...commun}>
      <path d="M12 4.25v15.5M6.5 19.75h11M12 6.5l-6 1.75M12 6.5l6 1.75" />
      <path d="M3.5 14.25a2.5 2.5 0 0 0 5 0L6 8.5z" />
      <path d="M15.5 12.75a2.5 2.5 0 0 0 5 0L18 7z" />
    </svg>
  );
}

/** Droit de garde : maison et lien familial. */
function Garde() {
  return (
    <svg {...commun}>
      <path d="M3.75 10.5 12 4.25l8.25 6.25v8a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5z" />
      <path d="M9.5 20v-5.5h5V20" />
    </svg>
  );
}

/** Recherche de personne : silhouette et loupe. */
function Recherche() {
  return (
    <svg {...commun}>
      <circle cx="10.5" cy="8.25" r="3.5" />
      <path d="M4.5 19.75c0-3.31 2.69-5.5 6-5.5 1.02 0 1.98.21 2.82.58" />
      <circle cx="16.75" cy="16.75" r="3" />
      <path d="m19 19 2 2" />
    </svg>
  );
}

/** Concurrence déloyale : flux détourné. */
function Concurrence() {
  return (
    <svg {...commun}>
      <path d="M3.5 7.5h10.5M3.5 16.5h7" />
      <path d="m11 4.5 3 3-3 3" />
      <path d="M14 12.5c2.5 0 4 1.5 4 4v3.25" />
      <path d="m15.5 18.5 2.5 2 2.5-2" />
    </svg>
  );
}

/** Arrêt de travail : calendrier avec absence. */
function ArretTravail() {
  return (
    <svg {...commun}>
      <rect x="3.75" y="5.5" width="16.5" height="14.75" rx="2" />
      <path d="M3.75 10h16.5M8.5 3.75v3.5M15.5 3.75v3.5" />
      <path d="m10 14 4 4M14 14l-4 4" />
    </svg>
  );
}

/** Vol interne : cadenas ouvert. */
function Vol() {
  return (
    <svg {...commun}>
      <rect x="4.75" y="10.75" width="14.5" height="9.5" rx="2" />
      <path d="M8.25 10.75V7.5a3.75 3.75 0 0 1 7.25-1.35" />
    </svg>
  );
}

/** Solvabilité : évaluation financière. */
function Solvabilite() {
  return (
    <svg {...commun}>
      <rect x="3.5" y="5.75" width="17" height="12.5" rx="2" />
      <path d="M7 14.5l3-3 2.5 2L17 9" />
      <path d="M14.5 9H17v2.5" />
    </svg>
  );
}

/** Pré-embauche : vérification d'un parcours. */
function PreEmbauche() {
  return (
    <svg {...commun}>
      <path d="M5.75 4.75h9L18.25 8v11.25a1.5 1.5 0 0 1-1.5 1.5H5.75a1.5 1.5 0 0 1-1.5-1.5V6.25a1.5 1.5 0 0 1 1.5-1.5z" />
      <path d="M14.75 4.75V8h3.5" />
      <path d="m8 14 2 2 4-4" />
    </svg>
  );
}

/** Succession : transmission. */
function Succession() {
  return (
    <svg {...commun}>
      <path d="M12 3.75v6.5M8.75 7l3.25-3.25L15.25 7" />
      <rect x="4.25" y="12.5" width="15.5" height="7.75" rx="1.75" />
      <path d="M9.75 12.5v7.75M14.25 12.5v7.75" />
    </svg>
  );
}

/** Repli neutre : dossier d'enquête. */
function Dossier() {
  return (
    <svg {...commun}>
      <path d="M3.75 7.25a1.5 1.5 0 0 1 1.5-1.5h3.9l1.75 2.25h7.85a1.5 1.5 0 0 1 1.5 1.5v8.75a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5z" />
    </svg>
  );
}

/** Table de correspondance : le premier mot-clé trouvé l'emporte. */
const CORRESPONDANCES: [RegExp, ComponentType][] = [
  [/conjugal|adult|infid|divorce/i, Conjugal],
  [/pension|concubinage|maritale/i, Pension],
  [/garde|visite|enfant/i, Garde],
  [/recherche de personne|disparue|débiteur|debiteur/i, Recherche],
  [/concurrence|clientèle|clientele|contrefa/i, Concurrence],
  [/arrêt de travail|arret de travail|maladie|absent/i, ArretTravail],
  [/vol|détournement|detournement|escroquerie/i, Vol],
  [/solvabilité|solvabilite|recouvrement|financi/i, Solvabilite],
  [/embauche|cv|parcours|collaborateur/i, PreEmbauche],
  [/succession|héritier|heritier|patrimoine/i, Succession],
];

export function iconePourMotif(texte: string): ComponentType {
  for (const [motif, Icone] of CORRESPONDANCES) {
    if (motif.test(texte)) return Icone;
  }
  return Dossier;
}
