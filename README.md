# Activ'Agence Toulouse — refonte Next.js

Refonte du site de l'agence de détectives privés Activ'Agence (Toulouse), en remplacement
du WordPress sous thème InsightEye. Le cadrage vient de l'audit SEO du 2026-09-02.

## Documents de référence

| Fichier | Rôle |
|---|---|
| `docs/seo/AUDIT_SEO_ACTIVAGENCE_2026-09-02.md` | L'audit fondateur : constats mesurés, priorisation, plan d'action |
| `docs/seo/SEO_MASTER_ACTIVAGENCE.md` | Les règles à respecter : silos, URL, maillage, rédaction, migration |

À lire avant toute création de page ou d'article.

## Démarrer

```bash
npm install
npm run images   # convertit scripts/sources-images/ en WebP dans public/images/
npm run dev
```

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Contrôles SEO puis build de production |
| `npm run seo:check` | Contrôles SEO seuls |
| `npm run images` | Régénère les WebP depuis `scripts/sources-images/` |

### Générer un visuel

```bash
FAL_KEY=... node scripts/generate-image.mjs <nom> "<prompt en anglais>"
npm run images
```

Moteur imposé par les règles Clickzou : **fal.ai Flux Pro v1.1**, photoréaliste, 16:9.
Politique humains `indirect` : présence humaine crédible (de dos, de profil, silhouette,
mains au travail) mais **aucun visage frontal reconnaissable** — une image avec un visage
identifiable se lit comme une photo de stock IA et dégrade la perception de qualité. Le
suffixe correspondant est ajouté automatiquement au prompt par le script.

## Ce que le build vérifie (et bloque)

`scripts/check-seo.mjs` s'exécute au `prebuild` et fait échouer le build si :

- un `title` dépasse 60 caractères ou une `description` 155 ;
- une page n'exporte pas de `metadata` ;
- une page contient plusieurs H1 ;
- un lien interne oublie son slash final ;
- un article publié fait moins de 2 000 mots ;
- un article publié cite moins de 3 sources externes.

Chacune de ces règles correspond à un défaut réellement constaté sur l'ancien site.

## Structure

```
src/
├── app/                      une page par intention de recherche (voir le master §2)
│   ├── api/contact/          réception du formulaire
│   └── blog/[slug]/          articles, générés statiquement
├── components/               Header, Footer, FormulaireContact, Faq, ContenuArticle…
├── data/
│   ├── agence.ts             SOURCE UNIQUE du NAP — ne jamais dupliquer ailleurs
│   └── navigation.ts         URL, menus, redirections 301, pages en 410
├── lib/
│   ├── seo.ts                helper de metadata (canonical, OG, robots)
│   ├── schema.ts             JSON-LD (ProfessionalService, Service, FAQPage…)
│   └── articles/             modèle d'article + registre
└── proxy.ts                  301 des anciennes URL, 410 des pages de démo
```

## Ajouter une page motif

Une page motif = une situation concrète qui déclenche l'appel (adultère, arrêt de travail
détourné…). Une intention de recherche = une page, jamais deux.

1. Copier `src/lib/motifs/arret-maladie-abusif.ts` sous un nouveau slug.
2. L'importer dans `src/lib/motifs/index.ts`.
3. `npm run seo:check` puis `npm run build`.

Le rendu, le JSON-LD, le fil d'Ariane, le maillage et le sitemap sont automatiques. Dans les
textes, `[ancre](/cible/)` produit un lien interne et `**mot**` un passage en gras.

## Ajouter un article

1. Copier `src/lib/articles/preuve-adultere-divorce.ts` sous un nouveau slug.
2. L'importer dans `src/lib/articles/index.ts`.
3. `npm run seo:check`.

Cadence : **2 articles par mois maximum**. Chaque article doit contenir un élément non
copiable — une règle juridique précise, un barème, une procédure décrite de l'intérieur.
Publier en masse du contenu générique est contre-productif depuis les core updates 2026.

## À compléter avant la mise en ligne

Ces points sont marqués `TODO CLIENT` dans le code et attendent une information de l'agence.

> **Décisions client du 2026-09-02, à ne pas remettre en question :**
> - **Horaires** : du lundi au vendredi, 8h-18h. Le « 24h/24 » de l'ancien site était erroné et ne doit réapparaître nulle part, ni sur le site, ni sur la fiche Google.
> - **E-mail public** : `activagence@free.fr` est conservé. C'est l'adresse à afficher partout, et celle qui doit figurer à l'identique sur la fiche Google et dans les annuaires (cohérence NAP).

| Point | Fichier | Pourquoi c'est bloquant |
|---|---|---|
| **Profils sociaux** | `src/data/agence.ts` (`sameAs`) | Volontairement vide : un `sameAs` vers une page inexistante affaiblit l'entité. À remplir en priorité avec l'URL de la fiche Google Business Profile. |
| **Grille tarifaire** | `src/app/tarifs-detective-prive-toulouse/page.tsx` | Aucun montant n'est publié tant que les tarifs réels ne sont pas connus. Le tableau s'affiche automatiquement dès que la constante `GRILLE` est remplie. |
| **Envoi du formulaire** | `.env` | Sans `RESEND_API_KEY` et `CONTACT_FROM`, la route répond 503 et invite à téléphoner. Jamais de faux « message envoyé ». `CONTACT_FROM` doit être sur un domaine vérifié chez Resend (expéditeur technique, invisible du visiteur) ; `CONTACT_TO` reçoit les demandes sur `activagence@free.fr`. |

## Hors du site, à mener en parallèle

48 % du classement local se joue hors du site. Voir `SEO_MASTER_ACTIVAGENCE.md` §9 :
fiche Google Business Profile (catégorie principale d'abord), flux d'avis continu,
annuaires au NAP identique, ouverture de Bing Webmaster Tools.
