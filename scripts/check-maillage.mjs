/**
 * Contrôle du maillage interne.
 *
 * Vérifie sur le site construit — pas sur les sources — ce qui casse vraiment un
 * maillage : les liens vers des pages inexistantes, les pages qu'aucune autre ne
 * cite, et les pages qui ne renvoient nulle part. Les trois défauts relevés sur
 * l'ancien WordPress lors de l'audit du 2026-09-02.
 *
 * Usage :
 *   npm run build && npx next start -p 3999 &
 *   node scripts/check-maillage.mjs http://localhost:3999
 */
const BASE = process.argv[2] ?? "http://localhost:3000";

const MIN_LIENS_SORTANTS = 3; // règle §5 du master

/** Récupère la liste des URL du site depuis son sitemap. */
async function urlsDuSitemap() {
  const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].replace(/^https?:\/\/[^/]+/, ""),
  );
}

/** Extrait les href internes d'une page, hors ancres et fichiers. */
function liensInternes(html) {
  const liens = new Set();
  for (const m of html.matchAll(/href="(\/[^"#]*)"/g)) {
    const href = m[1];
    if (/\.(jpg|png|svg|webp|xml|txt|ico|css|js)$/i.test(href)) continue;
    if (href.startsWith("/_next") || href.startsWith("/api")) continue;
    liens.add(href);
  }
  return [...liens];
}

const pages = await urlsDuSitemap();
console.log(`${pages.length} pages au sitemap.\n`);

const sortants = new Map(); // page -> [cibles]
const entrants = new Map(); // page -> nombre de pages qui la citent
for (const p of pages) entrants.set(p, 0);

const casses = [];

for (const page of pages) {
  const res = await fetch(`${BASE}${page}`);
  if (!res.ok) {
    casses.push(`${page} répond ${res.status}`);
    continue;
  }
  const html = await res.text();
  const liens = liensInternes(html);
  sortants.set(page, liens);

  for (const cible of liens) {
    if (cible === page) continue;
    if (entrants.has(cible)) entrants.set(cible, entrants.get(cible) + 1);
  }
}

// 1. Liens vers des URL absentes du sitemap : vérification réelle du code HTTP,
//    car les pages légales sont volontairement hors sitemap.
const aVerifier = new Set();
for (const liens of sortants.values()) {
  for (const cible of liens) {
    if (!pages.includes(cible)) aVerifier.add(cible);
  }
}
const morts = [];
for (const cible of aVerifier) {
  const res = await fetch(`${BASE}${cible}`, { redirect: "manual" });
  if (res.status >= 400) morts.push(`${cible} → ${res.status}`);
}

// 2. Pages orphelines : citées par aucune autre page.
const orphelines = [...entrants.entries()]
  .filter(([page, n]) => n === 0 && page !== "/")
  .map(([page]) => page);

// 3. Pages qui ne renvoient nulle part (hors navigation commune).
const pauvres = [...sortants.entries()]
  .map(([page, liens]) => [page, liens.length])
  .filter(([, n]) => n < MIN_LIENS_SORTANTS);

console.log("── Liens morts ──");
console.log(morts.length ? morts.map((m) => `  ✗ ${m}`).join("\n") : "  aucun");

console.log("\n── Pages orphelines (aucun lien entrant) ──");
console.log(
  orphelines.length ? orphelines.map((p) => `  ✗ ${p}`).join("\n") : "  aucune",
);

console.log(`\n── Pages avec moins de ${MIN_LIENS_SORTANTS} liens sortants ──`);
console.log(pauvres.length ? pauvres.map(([p, n]) => `  ✗ ${p} (${n})`).join("\n") : "  aucune");

console.log("\n── Liens entrants par page ──");
for (const [page, n] of [...entrants.entries()].sort((a, b) => a[1] - b[1])) {
  console.log(`  ${String(n).padStart(3)}  ${page}`);
}

if (casses.length) {
  console.log("\n── Pages en erreur ──");
  console.log(casses.map((c) => `  ✗ ${c}`).join("\n"));
}

const echecs = morts.length + orphelines.length + casses.length;
console.log(`\n${echecs === 0 ? "Maillage : OK" : `${echecs} problème(s) de maillage`}`);
process.exit(echecs === 0 ? 0 : 1);
