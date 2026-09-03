/**
 * Generation d'un visuel via fal.ai Flux Pro v1.1.
 *
 * Moteur impose par les regles Clickzou (docs/seo/image-generation-guidelines.md
 * du projet clickzou-v2) : fal-ai/flux-pro/v1.1, photorealiste, 16:9.
 *
 * Politique humains : `indirect` — presence humaine credible (de dos, de profil,
 * silhouette, mains au travail) mais AUCUN visage frontal reconnaissable. Une image
 * avec un visage identifiable se lit comme une photo de stock generee par IA et
 * degrade la perception de qualite.
 *
 * Usage :
 *   FAL_KEY=... node scripts/generate-image.mjs <nom-de-sortie> "<prompt>"
 *
 * La sortie est ecrite dans scripts/sources-images/ ; lancer ensuite `npm run images`
 * pour produire le WebP consomme par le site.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SUFFIXE_HUMAINS =
  " If people appear, they must have NO recognizable faces (back view, silhouette, " +
  "far away, blurred, or only hands/arms holding an object). No close-up portraits, " +
  "no identifiable individuals. No text, no logo, no watermark anywhere in the image.";

const cle = process.env.FAL_KEY;
const [nom, prompt] = process.argv.slice(2);

if (!cle) {
  console.error("FAL_KEY manquante. Usage : FAL_KEY=... node scripts/generate-image.mjs <nom> \"<prompt>\"");
  process.exit(1);
}
if (!nom || !prompt) {
  console.error('Usage : FAL_KEY=... node scripts/generate-image.mjs <nom> "<prompt>"');
  process.exit(1);
}

const reponse = await fetch("https://fal.run/fal-ai/flux-pro/v1.1", {
  method: "POST",
  headers: {
    Authorization: `Key ${cle}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: prompt + SUFFIXE_HUMAINS,
    image_size: { width: 1792, height: 1024 },
    num_images: 1,
    output_format: "jpeg",
    enable_safety_checker: true,
  }),
});

if (!reponse.ok) {
  console.error(`fal.ai a repondu ${reponse.status} :`, (await reponse.text()).slice(0, 500));
  process.exit(1);
}

const resultat = await reponse.json();
const url = resultat?.images?.[0]?.url;
if (!url) {
  console.error("Aucune image renvoyee :", JSON.stringify(resultat).slice(0, 500));
  process.exit(1);
}

const binaire = Buffer.from(await (await fetch(url)).arrayBuffer());
const dossier = path.join(process.cwd(), "scripts", "sources-images");
await mkdir(dossier, { recursive: true });
const destination = path.join(dossier, `${nom}.jpg`);
await writeFile(destination, binaire);

console.log(`${nom}.jpg ecrit (${Math.round(binaire.length / 1024)} Ko)`);
console.log("Lancer `npm run images` pour generer le WebP.");
