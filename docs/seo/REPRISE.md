# Reprise — Activ'Agence v2

**Dernier point : 2026-09-03.** Tout est écrit sur disque, `npm run build` passe,
`npm run seo:check` et `npm run maillage:check` sont au vert. Rien n'est en attente
de sauvegarde. Le projet n'est pas versionné (pas de dépôt git) — les fichiers du
dossier `v2ia` sont la seule copie.

## Où en est le site

| Bloc | État |
|---|---|
| Socle Next.js 16 / React 19, **65 pages statiques** | ✅ |
| 6 piliers, **24 pages motifs**, 6 pages villes | ✅ |
| « Détail des services » en tête des deux piliers, chaque ligne liée à sa page | ✅ |
| Visuels : un fichier image par page, aucun partagé entre deux pages villes | ✅ |
| Blog : index + **20 articles**, chacun avec visuel unique | ✅ |
| Schémas JSON-LD, robots, sitemap, 301/410 | ✅ |
| Maillage : 0 lien mort, 0 orpheline, ≥ 3 liens entrants par article | ✅ |

## Commandes utiles

```bash
npm run dev            # développement
npm run build          # build (lance seo:check en prebuild)
npm run seo:check      # 2000 mots, 3 liens externes, 2 liens piliers, métas
npm run maillage:check # à lancer site démarré (npm run start)
npm run images         # convertit scripts/sources-images/*.jpg en WebP optimisés
```

Génération d'un visuel (la clé fal.ai se trouve dans le `.env.local` du projet
clickzou-v2) :

```bash
FAL_KEY=... node scripts/generate-image.mjs <nom-de-sortie> "<prompt en anglais>"
npm run images
```

## Règles de production (2026-09-03)

- **Un visuel n'est jamais partagé entre deux pages villes** — ni l'en-tête, ni les
  visuels de corps (`ville.visuels`), ni le bandeau (`ville.citation`). Une nouvelle
  commune suppose donc 5 images générées : 1 en-tête, 3 sous-sections, 1 bandeau.
  Seuls les blocs institutionnels (`SectionMoyens`, photo du bureau) restent communs.
- **Le bas de chaque page ville** porte la section `<AutresVilles>` : cartes vers les
  cinq autres communes, avec leur visuel propre. C'est le maillage horizontal du silo.
- **Le « Détail des services »** des deux piliers vit dans `src/data/detail-services.ts`.
  Toute ligne ajoutée doit pointer vers une page existante : pas de ligne sans `href`,
  pas de `href` sans page. Deux lignes peuvent viser la même page quand l'intention de
  recherche est identique (règle anti-cannibalisation du master, §2).

## À faire quand on reprend

### 1. En attente du client — ne rien inventer d'ici là

- **Tarifs à valider (2026-09-03)** : la page tarifs affiche désormais des montants
  « à partir de » — 390 € TTC la recherche documentaire, 480 € la vacation de
  surveillance (780 € à deux intervenants), 590 € la détection. **Ce sont des ordres
  de grandeur du marché, posés à la demande de JC, pas des tarifs communiqués par le
  client.** À faire valider (montants, TTC/HT, ce qui est inclus) avant mise en ligne.
  Ils vivent dans `GRILLE`, dans le champ `aPartirDe` des trois cartes, dans deux
  réponses de la FAQ et dans le `hasOfferCatalog` du JSON-LD : les quatre doivent
  rester cohérents.
- **Grille tarifaire** : la constante `GRILLE` de
  `src/app/tarifs-detective-prive-toulouse/page.tsx` est volontairement vide.
  Aucun prix ne doit être écrit tant qu'Activ'Agence n'a pas donné ses vrais tarifs.
- **Profils sociaux** : `sameAs` dans `src/data/agence.ts` reste `[]` — aucun profil
  réel n'existe. Pas d'`aggregateRating` non plus tant qu'il n'y a pas de vrais avis.
- **Formulaire de contact** : sans `RESEND_API_KEY` et `CONTACT_FROM`, l'API répond
  503 avec repli sur le numéro de téléphone. C'est volontaire — jamais de faux
  « message envoyé ».

### 2. Contenu

- **Pages villes** : 6 livrées. En ajouter 2 à 4 sur l'agglomération, puis l'Occitanie.
  800–1 200 mots réellement différenciés — un gabarit dupliqué avec le nom substitué
  serait pénalisé.
- **Blog** : cadence de croisière **2 articles par mois maximum**. Le plan éditorial
  est saturé : tout nouvel article suppose d'abord d'identifier une intention non
  couverte (voir `PLAN_EDITORIAL.md`, colonne « à ne pas confondre avec »).

### 3. Hors-site (48 % du classement local)

Fiche Google Business Profile, flux d'avis, annuaires locaux, Bing Webmaster Tools.
C'est aujourd'hui le principal levier restant.

### 4. Mise en ligne

Choisir l'hébergement, brancher le domaine, vérifier les 301/410 en production,
soumettre le sitemap, puis relancer `maillage:check` sur l'URL réelle.

## Données verrouillées — ne jamais les « corriger »

- E-mail : `activagence@free.fr` (confirmé par le client, ce n'est pas une erreur).
- Horaires : du lundi au vendredi, 8 h – 18 h.
- **Ne jamais réintroduire** « 24h/24 » ni « intervention sous 24 h » : c'était une
  promesse de l'ancien site WordPress, elle a été retirée volontairement.
- Deux numéros CNAPS réels dans `src/data/agence.ts`, en `hasCredential`.

---

*Références : `SEO_MASTER_ACTIVAGENCE.md` (doc de référence), `PLAN_EDITORIAL.md`
(les 20 articles), `AUDIT_SEO_ACTIVAGENCE_2026-09-02.md` (audit fondateur).*
