/**
 * Controles SEO de prebuild — le build echoue si une regle est violee.
 *
 * Ces controles reprennent les regles de docs/seo/SEO_MASTER_ACTIVAGENCE.md.
 * Ils existent parce que chacune de ces erreurs a reellement ete constatee sur
 * l'ancien site WordPress lors de l'audit du 2026-09-02.
 *
 * Usage : npm run seo:check (aussi execute automatiquement au prebuild)
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const RACINE = process.cwd();
const APP = path.join(RACINE, "src", "app");
const ARTICLES = path.join(RACINE, "src", "lib", "articles");

const MAX_TITRE = 60;
const MAX_DESCRIPTION = 155;
const MOTS_MIN_ARTICLE = 2000;
const LIENS_EXTERNES_MIN = 3;
const LIENS_PILIERS_MIN = 2;

/**
 * Pages piliers du site. Un article qui n'en cite aucune ne fait pas remonter
 * d'autorite vers les pages qui convertissent : c'est un contenu isole, et le
 * maillage descendant est la raison d'etre du blog.
 */
const PILIERS = [
  "/detective-prive-particuliers-toulouse/",
  "/detective-prive-entreprise-toulouse/",
  "/filature-surveillance-toulouse/",
  "/rapport-detective-prive-preuve-justice/",
  "/tarifs-detective-prive-toulouse/",
];

const erreurs = [];
const avertissements = [];

/** Parcourt recursivement src/app a la recherche des page.tsx. */
async function pages(dossier = APP, acc = []) {
  for (const entree of await readdir(dossier, { withFileTypes: true })) {
    const chemin = path.join(dossier, entree.name);
    if (entree.isDirectory()) {
      if (entree.name === "api") continue;
      await pages(chemin, acc);
    } else if (entree.name === "page.tsx") {
      acc.push(chemin);
    }
  }
  return acc;
}

function extraireChaine(source, clef) {
  // Capture title: "..." / description: "..." sur une ou deux lignes.
  const re = new RegExp(`${clef}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`, "m");
  const m = source.match(re);
  return m ? m[1].replace(/\\"/g, '"') : null;
}

async function controlerPages() {
  for (const fichier of await pages()) {
    const source = await readFile(fichier, "utf8");
    const relatif = path.relative(RACINE, fichier).replace(/\\/g, "/");

    // Les routes dynamiques construisent leurs metas a l'execution.
    const dynamique = fichier.includes("[");

    if (!dynamique && !source.includes("export const metadata")) {
      erreurs.push(`${relatif} : aucune metadata exportee.`);
      continue;
    }

    const titre = extraireChaine(source, "title");
    const description = extraireChaine(source, "description");

    if (!dynamique) {
      if (!titre) {
        erreurs.push(`${relatif} : title introuvable.`);
      } else if (titre.length > MAX_TITRE) {
        erreurs.push(`${relatif} : title de ${titre.length} caracteres (max ${MAX_TITRE}) — "${titre}"`);
      }

      if (!description) {
        erreurs.push(`${relatif} : description introuvable.`);
      } else if (description.length > MAX_DESCRIPTION) {
        erreurs.push(
          `${relatif} : description de ${description.length} caracteres (max ${MAX_DESCRIPTION}).`,
        );
      }
    }

    // Un seul H1 par page : il vient de PageHeader ou d'une balise explicite.
    const h1Explicites = (source.match(/<h1[\s>]/g) ?? []).length;
    const pageHeader = source.includes("<PageHeader");
    if (h1Explicites + (pageHeader ? 1 : 0) > 1) {
      erreurs.push(`${relatif} : plusieurs H1 detectes.`);
    }

    // Liens internes : trailing slash obligatoire.
    for (const m of source.matchAll(/href="(\/[a-z0-9\-/]*)"/gi)) {
      const href = m[1];
      if (href !== "/" && !href.endsWith("/")) {
        erreurs.push(`${relatif} : lien interne sans slash final — ${href}`);
      }
    }
  }
}

async function controlerArticles() {
  const fichiers = (await readdir(ARTICLES)).filter(
    (f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f),
  );

  for (const fichier of fichiers) {
    const source = await readFile(path.join(ARTICLES, fichier), "utf8");
    const relatif = `src/lib/articles/${fichier}`;

    const publie = /statut:\s*"publie"/.test(source);
    if (!publie) {
      avertissements.push(`${relatif} : brouillon, controles de publication ignores.`);
      continue;
    }

    // Comptage approximatif : on additionne le texte de tous les champs de chaines.
    //
    // Les fins de ligne sont normalisees avant comptage. Sans cela, le retour
    // chariot des fichiers Windows compte comme un caractere de plus et fait
    // franchir a certaines chaines le seuil de longueur retenu ici : le meme
    // article passait a 2000 mots en local et echouait a 1996 sur le serveur
    // de deploiement, ou git restitue des fins de ligne Unix.
    const mots = [...source.replace(/\r\n/g, "\n").matchAll(/"((?:[^"\\]|\\.){40,})"/g)]
      .map((m) => m[1])
      .join(" ")
      .split(/\s+/)
      .filter(Boolean).length;

    if (mots < MOTS_MIN_ARTICLE) {
      erreurs.push(
        `${relatif} : ~${mots} mots (minimum ${MOTS_MIN_ARTICLE} pour un article publie).`,
      );
    }

    const liens = (source.match(/url:\s*"https?:\/\//g) ?? []).length;
    if (liens < LIENS_EXTERNES_MIN) {
      erreurs.push(
        `${relatif} : ${liens} lien(s) externe(s) (minimum ${LIENS_EXTERNES_MIN} — signal E-E-A-T).`,
      );
    }

    // Maillage descendant : l'article doit renvoyer vers les pages business.
    const piliersCites = PILIERS.filter((url) => source.includes(url)).length;
    if (piliersCites < LIENS_PILIERS_MIN) {
      erreurs.push(
        `${relatif} : ${piliersCites} page(s) pilier citee(s) (minimum ${LIENS_PILIERS_MIN} — maillage descendant).`,
      );
    }

    const metaTitre = extraireChaine(source, "metaTitre");
    if (metaTitre && metaTitre.length > MAX_TITRE) {
      erreurs.push(`${relatif} : metaTitre de ${metaTitre.length} caracteres (max ${MAX_TITRE}).`);
    }

    const metaDescription = extraireChaine(source, "metaDescription");
    if (metaDescription && metaDescription.length > MAX_DESCRIPTION) {
      erreurs.push(
        `${relatif} : metaDescription de ${metaDescription.length} caracteres (max ${MAX_DESCRIPTION}).`,
      );
    }
  }
}

await controlerPages();
await controlerArticles();

/**
 * Aucun visuel partage entre deux pages villes.
 *
 * Regle posee par le client le 2026-09-03 : une meme image sur plusieurs pages
 * locales recree l'effet de gabarit duplique que la refonte cherche a fuir, meme
 * quand les textes, eux, sont differents. Le controle porte sur l'en-tete, les
 * visuels de sous-section et le bandeau de chaque commune.
 */
async function controlerVisuelsVilles() {
  const dossier = path.join(RACINE, "src", "lib", "villes");
  const fichiers = (await readdir(dossier)).filter(
    (f) => f.endsWith(".ts") && !["index.ts", "types.ts"].includes(f),
  );

  const parImage = new Map();
  for (const fichier of fichiers) {
    const source = await readFile(path.join(dossier, fichier), "utf8");
    const images = new Set(
      [...source.matchAll(/src:\s*"(\/images\/[^"]+)"/g)].map((m) => m[1]),
    );
    for (const image of images) {
      if (!parImage.has(image)) parImage.set(image, []);
      parImage.get(image).push(fichier);
    }
  }

  for (const [image, villes] of parImage) {
    if (villes.length > 1) {
      erreurs.push(
        `visuel partage entre pages villes : ${image} utilise par ${villes.join(", ")}.`,
      );
    }
  }
}

await controlerVisuelsVilles();

/**
 * Metas des pages motif et villes.
 *
 * Elles ne vivent pas dans un `page.tsx` mais dans `src/lib`, et echappaient donc
 * au controle des pages : une metaDescription de 160 caracteres y est restee
 * inapercue. On verifie ici les longueurs, et l'ancrage local — le H1, le
 * metaTitre et la metaDescription d'une page de service locale doivent nommer la
 * ville, faute de quoi la page ne se positionne pas sur la requete geolocalisee.
 */
async function controlerContenusLib() {
  const champ = (src, nom) => {
    const m = src.match(new RegExp(`\\n  ${nom}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
    return m ? m[1] : "";
  };

  for (const [dossier, type] of [
    [path.join(RACINE, "src", "lib", "motifs"), "motif"],
    [path.join(RACINE, "src", "lib", "villes"), "ville"],
  ]) {
    for (const fichier of await readdir(dossier)) {
      if (!fichier.endsWith(".ts") || ["index.ts", "types.ts"].includes(fichier)) continue;
      const source = await readFile(path.join(dossier, fichier), "utf8");
      const ref = `src/lib/${type}s/${fichier}`;

      const metaTitre = champ(source, "metaTitre");
      const metaDescription = champ(source, "metaDescription");
      const titre = champ(source, "titre");

      if (metaTitre.length > MAX_TITRE) {
        erreurs.push(`${ref} : metaTitre de ${metaTitre.length} caracteres (max ${MAX_TITRE}).`);
      }
      if (metaDescription.length > MAX_DESCRIPTION) {
        erreurs.push(
          `${ref} : metaDescription de ${metaDescription.length} caracteres (max ${MAX_DESCRIPTION}).`,
        );
      }

      // Les pages villes portent le nom de leur commune, pas « Toulouse ».
      if (type === "motif") {
        for (const [nom, valeur] of [
          ["titre", titre],
          ["metaTitre", metaTitre],
          ["metaDescription", metaDescription],
        ]) {
          if (!/toulouse/i.test(valeur)) {
            erreurs.push(`${ref} : ${nom} sans « Toulouse » — la page vise une requete locale.`);
          }
        }
      }
    }
  }
}

await controlerContenusLib();



for (const a of avertissements) console.log(`  note   ${a}`);

if (erreurs.length > 0) {
  console.error(`\n${erreurs.length} erreur(s) SEO :\n`);
  for (const e of erreurs) console.error(`  ✗ ${e}`);
  console.error("\nBuild interrompu. Corrigez ces points avant de deployer.\n");
  process.exit(1);
}

console.log("Controles SEO : OK");
