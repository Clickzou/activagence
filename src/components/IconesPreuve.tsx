/**
 * Icônes du bandeau de preuve.
 *
 * Dessinées à la main en SVG plutôt qu'importées d'une bibliothèque : quatre
 * icônes ne justifient pas une dépendance, et le trait reste homogène avec la
 * typographie du site (trait fin, extrémités arrondies).
 */

const commun = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Ancienneté : médaille. */
export function IconeAnciennete() {
  return (
    <svg {...commun}>
      <circle cx="12" cy="9" r="5.25" />
      <path d="M12 6.9l.72 1.46 1.61.23-1.16 1.14.27 1.6L12 10.57l-1.44.76.27-1.6-1.16-1.14 1.61-.23z" />
      <path d="M8.6 13.6L7 21l5-2.4 5 2.4-1.6-7.4" />
    </svg>
  );
}

/** Agrément : bouclier validé. */
export function IconeAgrement() {
  return (
    <svg {...commun}>
      <path d="M12 2.75l7 2.6v5.9c0 4.3-2.85 7.6-7 9-4.15-1.4-7-4.7-7-9v-5.9z" />
      <path d="M9 11.9l2.1 2.1L15 10.2" />
    </svg>
  );
}

/** Rapport : document horodaté. */
export function IconeRapport() {
  return (
    <svg {...commun}>
      <path d="M14 2.75H7.5A1.75 1.75 0 0 0 5.75 4.5v15A1.75 1.75 0 0 0 7.5 21.25h9a1.75 1.75 0 0 0 1.75-1.75V7z" />
      <path d="M14 2.75V7h4.25" />
      <path d="M8.75 12.5h6.5M8.75 15.75h6.5M8.75 9.25h2.5" />
    </svg>
  );
}

/** Discrétion : cadenas fermé. */
export function IconeDiscretion() {
  return (
    <svg {...commun}>
      <rect x="4.75" y="10.25" width="14.5" height="10" rx="2" />
      <path d="M8.25 10.25V7a3.75 3.75 0 0 1 7.5 0v3.25" />
      <path d="M12 14v2.5" />
    </svg>
  );
}
