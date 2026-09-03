/**
 * Conversion des visuels du site WordPress en WebP.
 *
 * Contexte (audit du 2026-09-02) : l'ancienne page d'accueil chargeait 3,4 Mo
 * d'assets, dont une seule image de 1,4 Mo en JPEG. Budget cible de la refonte :
 * 800 Ko au premier chargement, aucune image au-dela de 200 Ko.
 *
 * Usage : npm run images
 * Source : scripts/sources-images/  ->  public/images/
 */
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SOURCE = path.join(process.cwd(), "scripts", "sources-images");
const DESTINATION = path.join(process.cwd(), "public", "images");

/** Largeur maximale par usage : au-dela, on ne gagne rien de visible. */
const LARGEUR_MAX = 1600;
const QUALITE = 78;
const POIDS_MAX_KO = 200;

async function main() {
  if (!existsSync(SOURCE)) {
    console.error(`Dossier source introuvable : ${SOURCE}`);
    process.exit(1);
  }
  await mkdir(DESTINATION, { recursive: true });

  const fichiers = (await readdir(SOURCE)).filter((f) =>
    /\.(jpe?g|png)$/i.test(f),
  );

  let total = 0;
  let alertes = 0;

  for (const fichier of fichiers) {
    const entree = path.join(SOURCE, fichier);
    const avant = (await stat(entree)).size;

    // Les logos et le favicon restent en PNG (transparence).
    // On garde le plus leger entre l'original et la recompression : sur de petits
    // PNG deja optimises, repasser par sharp peut alourdir le fichier.
    if (/^(logo|favicon)/i.test(fichier)) {
      const recompresse = await sharp(entree).png({ compressionLevel: 9 }).toBuffer();
      const original = await readFile(entree);
      const retenu = recompresse.length < original.length ? recompresse : original;
      await writeFile(path.join(DESTINATION, fichier), retenu);
      console.log(`  ${fichier} : ${ko(avant)} -> ${ko(retenu.length)} (PNG conservé)`);
      total += retenu.length;
      continue;
    }

    const sortie = fichier.replace(/\.(jpe?g|png)$/i, ".webp");
    // Les visuels d'en-tete (`ville-*`) passent sous un voile sombre : une
    // qualite plus basse y est invisible et divise le poids par deux.
    const enTete = /^ville-/i.test(fichier);
    const largeur = enTete ? 1400 : LARGEUR_MAX;

    // Descente progressive de la qualite jusqu'a repasser sous le plafond de
    // poids : une image tres detaillee (feuillage, foule) ne s'y plie pas au
    // premier essai. On s'arrete a 45 pour ne pas voir apparaitre d'artefacts.
    let qualite = enTete ? 62 : QUALITE;
    let buffer = await encoder(entree, largeur, qualite);
    while (buffer.length / 1024 > POIDS_MAX_KO && qualite > 45) {
      qualite -= 8;
      buffer = await encoder(entree, largeur, qualite);
    }

    await writeFile(path.join(DESTINATION, sortie), buffer);
    total += buffer.length;

    const depasse = buffer.length / 1024 > POIDS_MAX_KO;
    if (depasse) alertes++;
    console.log(
      `  ${fichier} -> ${sortie} : ${ko(avant)} -> ${ko(buffer.length)}${depasse ? "  ⚠ au-dessus de 200 Ko" : ""}`,
    );
  }

  console.log(`\n${fichiers.length} image(s), poids total : ${ko(total)}`);
  if (alertes > 0) {
    console.log(
      `⚠ ${alertes} image(s) dépassent ${POIDS_MAX_KO} Ko — recadrer ou baisser la qualité.`,
    );
  }
}

async function encoder(entree, largeur, qualite) {
  return sharp(entree)
    .resize({ width: largeur, withoutEnlargement: true })
    .webp({ quality: qualite })
    .toBuffer();
}

function ko(octets) {
  return `${Math.round(octets / 1024)} Ko`;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
