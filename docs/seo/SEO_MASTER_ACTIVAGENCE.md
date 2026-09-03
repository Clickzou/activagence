# SEO MASTER — ACTIV'AGENCE TOULOUSE

**Document de référence SEO du projet de refonte React/Next.js.**
Créé le 2026-09-02 · Dérivé de `SEO_MASTER_CLICKZOU.md` et de `AUDIT_SEO_ACTIVAGENCE_2026-09-02.md`.
À lire avant toute création de page, tout ajout de contenu et tout déploiement.

---

## 1. CONTEXTE & POSITIONNEMENT

| Donnée | Valeur |
|---|---|
| Entreprise | Activ'Agence — agence de détectives privés |
| Adresse (NAP officiel) | 23 boulevard des Minimes, Résidence Madiran Bât. B, 31200 Toulouse |
| Téléphone | +33 5 61 57 17 33 |
| E-mail | activagence@free.fr (confirmé par le client le 2026-09-02) |
| Autorisations CNAPS | 031 2114 10 05 20150359055 · 031 2114 10 05 20150375989 |
| Ancienneté | 30 ans d'expérience |
| Horaires | Du lundi au vendredi, 8h-18h (confirmés par le client le 2026-09-02) |
| Zone | Toulouse → Haute-Garonne → Occitanie |
| Cibles | Particuliers (couple, famille, patrimoine) et entreprises (TPE/PME, DRH, avocats) |

**Positionnement retenu** : *l'agence toulousaine de la preuve recevable* — 30 ans d'expérience, double autorisation CNAPS, rapports opposables en justice. Les trois arguments différenciants à porter partout : **la légalité de la preuve**, **la discrétion** et **l'ancienneté locale**.

**Objectif business** : générer des demandes de contact qualifiées à Toulouse et dans son agglomération. Le KPI n'est pas la position, c'est le nombre de premiers échanges.

---

## 2. CARTE D'INTENTION — UNE INTENTION, UNE PAGE

Règle structurante reprise de `SEO_MASTER_CLICKZOU.md` §11.1 : **la home ne peut pas ranker sur tout.** Elle porte l'identité et la requête locale principale ; chaque intention commerciale distincte a sa page propriétaire.

| Intention / requête | Volume est. | Page propriétaire |
|---|---|---|
| détective privé toulouse · détective toulouse · agence détective privé toulouse | 480 + 210 | **HOME** (`/`) |
| détective privé entreprise · enquête entreprise détective | — | `/detective-prive-entreprise-toulouse/` |
| détective privé particulier · enquête privée | — | `/detective-prive-particuliers-toulouse/` |
| tarif / prix détective privé · combien coûte un détective | — | `/tarifs-detective-prive-toulouse/` |
| rapport détective recevable · preuve détective tribunal | — | `/rapport-detective-prive-preuve-justice/` |
| filature · surveillance · faire suivre quelqu'un | — | `/filature-surveillance-toulouse/` |
| adultère · infidélité · preuve tromperie | — | `/detective-prive-adultere-infidelite-toulouse/` |
| pension alimentaire · concubinage caché | — | `/enquete-pension-alimentaire-concubinage/` |
| arrêt maladie abusif · absentéisme salarié | — | `/enquete-arret-maladie-abusif-salarie/` |
| concurrence déloyale · débauchage | — | `/enquete-concurrence-deloyale-entreprise/` |
| recherche de personne · débiteur disparu | — | `/recherche-de-personne-debiteur-toulouse/` |
| détective privé + [ville] | — | `/detective-prive-[ville]/` |

**Interdictions de création** (anti-cannibalisation) :
- **Ne pas créer** de page `/agence-detective-prive-toulouse/` : la home la possède.
- **Ne pas créer** de page « enquête privée Toulouse » : redondante avec le pilier particuliers.
- La home mentionne les services en **liens ancre-exacte vers la page dédiée**, jamais en texte brut développé.

---

## 3. LES 7 SILOS

### Silo 1 — Particuliers
**Pilier** : `/detective-prive-particuliers-toulouse/`
Satellites : adultère/infidélité · pension alimentaire et concubinage · garde d'enfants et droit de visite · recherche de personne disparue · succession et recherche d'héritiers · nuisances et harcèlement de voisinage.

### Silo 2 — Entreprises
**Pilier** : `/detective-prive-entreprise-toulouse/`
Satellites : arrêt maladie abusif · concurrence déloyale et débauchage · vol interne et détournement · enquête pré-embauche · solvabilité et recouvrement · contrefaçon et circuits parallèles · contre-espionnage et détection d'écoutes.

### Silo 3 — Filature & surveillance
**Pilier** : `/filature-surveillance-toulouse/`
Satellites : déroulement d'une filature · surveillance statique vs dynamique · moyens techniques (reprise de `/moyens/`) · ce que la loi autorise.

### Silo 4 — Preuve & procédure  *(silo différenciant — aucun concurrent ne le couvre)*
**Pilier** : `/rapport-detective-prive-preuve-justice/`
Satellites : recevabilité et article 9 du Code de procédure civile · cadre CNAPS et agrément · ce qu'un détective peut et ne peut pas faire · rapport pour divorce · rapport pour prud'hommes.

### Silo 5 — Tarifs & déroulement
**Pilier** : `/tarifs-detective-prive-toulouse/`
Satellites : déroulement d'une enquête étape par étape · devis et forfaits · délais · prise en charge et frais de justice.

### Silo 6 — Zone d'intervention
**Pilier** : intégré à la home + hub `/zone-intervention/`
Satellites villes, par ordre de priorité : Blagnac · Colomiers · Tournefeuille · Muret · Balma · L'Union · Saint-Orens · Ramonville, puis Montauban · Albi · Castres · Auch · Foix · Carcassonne.

### Silo 7 — Ressources / blog
**Hub** : `/blog/`
2 articles par mois maximum. Chaque article : réponse directe en tête, données chiffrées, FAQ, 3 liens externes d'autorité, lien vers son pilier de silo.

### Hiérarchie de circulation

```
                        HOME  (détective privé toulouse)
        ┌───────────────┬───────┴───────┬───────────────┐
   Particuliers    Entreprises      Filature      Preuve/Procédure
        │               │               │               │
   6 satellites    7 satellites    4 satellites    5 satellites
        └───────────────┴───────┬───────┴───────────────┘
                          Tarifs + Villes + Blog
                                 │
                              CONTACT
```

---

## 4. RÈGLES TECHNIQUES (socle Next.js)

### Framework
- **Next.js App Router + SSG.** Pas de rendu client sur le contenu indexable.
- **`trailingSlash: true`** dans `next.config.ts`. Tous les liens internes, canonicals et entrées de sitemap avec slash final. Helper centralisé `src/lib/url-helpers.ts`.
- **HTTP/2 minimum** (le site actuel est en HTTP/1.1 — à valider auprès de l'hébergeur cible).

### Metas
- `metaTitle` : **max 60 caractères**, mot-clé principal en tête, jamais la marque en premier.
- `metaDescription` : **max 155 caractères**, avec bénéfice ou CTA.
- `noindex` sur : mentions légales, politique de cookies, pages de remerciement, résultats de recherche interne.

### Hiérarchie Hn
- **1 seul H1 par page**, contenant systématiquement **le service + « Toulouse »** quand la page est locale.
- Pas de saut : H1 → H2 → H3. Aucun H4 avant le H1 (défaut de l'ancien thème).
- 6 à 10 H2 par page pilier, chacun couvrant un angle unique (MECE).

### JSON-LD — par type de page

| Type de page | Graphe attendu |
|---|---|
| Home | `ProfessionalService` (sous-type de `LocalBusiness`) + `WebSite` + `BreadcrumbList` |
| Page service / motif | `Service` + `ProfessionalService` + `BreadcrumbList` + `FAQPage` |
| Page ville | `ProfessionalService` avec `areaServed` + `BreadcrumbList` |
| Article | `Article` + `BreadcrumbList` + `FAQPage` si FAQ |
| Tarifs | `Service` + `Offer` + `FAQPage` |

**`ProfessionalService` obligatoire, champs minimum** : `name`, `image`, `address` (PostalAddress complet), `telephone` (+33…), `email` (activagence@free.fr, cf. §1), `url`, `geo`, `areaServed`, `openingHoursSpecification` (lundi-vendredi 08:00-18:00), `priceRange`, `sameAs` (profils réels uniquement), `hasCredential` pour les deux numéros CNAPS, `aggregateRating` **uniquement quand les avis existent réellement** (jamais de note inventée).

### Performance
- Images **WebP** exclusivement, `width`/`height` explicites (CLS).
- `priority` sur la **seule** image LCP ; `loading="lazy"` partout ailleurs.
- Aucune image > 200 Ko. Cible LCP : ≤ 150 Ko.
- Budget page : **≤ 800 Ko** au premier chargement (contre 3,4 Mo aujourd'hui).
- Cibles Lighthouse mobile : **Performance > 80 · SEO > 95 · Accessibilité > 90 · Best Practices > 90**.

### Robots & sitemaps
- `robots.ts` : `Allow: /`, `Disallow: /api/`, sitemap déclaré.
- **Autoriser explicitement** les crawlers de recherche IA : `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `ClaudeBot`, `Claude-User`, `Claude-SearchBot`, `CCBot`, `Applebot-Extended`. Ne jamais bloquer un *search bot* en croyant bloquer un *training bot*.
- Sitemaps segmentés (pages / services / villes / articles) + index. Exclure tout `noindex`.

---

## 5. RÈGLES DE MAILLAGE

| Règle | Valeur |
|---|---|
| Liens internes contextuels minimum par page | **3** |
| Maximum de liens vers la même page depuis une page | 2 |
| Ratio intra-silo / cross-silo | **70 % / 30 %** |
| Tous les `href` internes | **avec trailing slash** |
| Liens vers des pages `noindex` | INTERDIT |
| Profondeur de clic maximum depuis la home | **3** |
| **Liens externes d'autorité par contenu** | **minimum 3** |

**Schéma obligatoire par page** :
- 1 lien vers le **pilier de son silo** dans le premier paragraphe, ancre naturelle variée.
- 2 à 4 liens vers les **satellites du même silo**, en contexte.
- 1 lien **cross-silo** quand il est justifié (ex. une page motif → la page tarifs ou la page preuve).
- 1 lien vers `/contact/` en conclusion, ancre orientée bénéfice.

**Anti-patterns interdits** : ancres « cliquez ici » / « en savoir plus » · listes de liens en fin de page · liens forcés bidirectionnels · liens sortants vers des agences concurrentes.

**Liens externes E-E-A-T recommandés pour ce métier** : `cnaps.interieur.gouv.fr` (agrément), `legifrance.gouv.fr` (art. 9 CPC, art. 259 du Code civil), `service-public.fr`, `justice.gouv.fr`, `cnil.fr` (traitement des données). Format : `target="_blank" rel="noopener noreferrer"`, ancre = nom de la source.

---

## 6. RÈGLES RÉDACTIONNELLES

### Longueurs cibles

| Type de page | Mots |
|---|---|
| Home | 1 200 - 1 800 |
| Page pilier de silo | **1 800 - 3 000** |
| Page motif / satellite | **1 200 - 1 800** |
| Page ville | 800 - 1 200 |
| Article de blog | **2 000 minimum** |
| Page tarifs | 1 500 - 2 000 |
| Contact / légal | libre |

### Structure obligatoire d'une page pilier
1. **Réponse directe** en tête : un paragraphe autonome de 130-170 mots qui répond à la requête exacte, contenant l'entité + le lieu + un chiffre. C'est le bloc qu'un LLM extrait.
2. **Réassurance immédiate** : CNAPS, 30 ans, confidentialité, réponse sous 24 h ouvrées.
3. **6 à 10 H2 MECE**, chacun rédigé comme une réponse autonome.
4. **Un élément non copiable** : cas anonymisé, barème réel, procédure décrite de l'intérieur, référence juridique précise. *(Core updates 2026 : la matière propriétaire est le facteur discriminant.)*
5. **FAQ** de 4 à 8 questions issues de vraies requêtes, balisée `FAQPage`.
6. **CTA** orienté action et discrétion : « Demander un premier échange confidentiel », jamais « Contactez-nous ».

### Ton
Professionnel, sobre, factuel. Vouvoiement. Aucun sensationnalisme, aucun emoji. Le sujet touche des situations difficiles — le ton doit rassurer, pas dramatiser. Jamais de promesse de résultat. Toujours rappeler le cadre légal.

### Contraintes juridiques du secteur (à ne jamais enfreindre)
- Ne jamais promettre une méthode illégale (géolocalisation à l'insu, écoute, accès aux comptes, intrusion domiciliaire).
- Toujours mentionner que les investigations s'exercent dans le cadre du Livre VI du Code de la sécurité intérieure.
- Ne jamais publier d'élément identifiant sur un dossier réel, même clos. Les cas cités doivent être anonymisés et non ré-identifiables.
- Ne jamais afficher d'avis ou de témoignage fabriqué.

### Images
- WebP, nommage explicite `detective-prive-toulouse-[sujet].webp`.
- Alt descriptif et localisé, jamais vide, jamais « Awesome Image ».
- Photos réelles de l'agence en priorité (matériel, véhicules, bureau) — actif de preuve et d'authenticité.

---

## 7. CONVERSION

**CTA principal** : « Demander un premier échange confidentiel » — gratuit, sans engagement.
**CTA secondaire** : appel direct `+33561571733`, cliquable, présent en en-tête sur mobile.

**Formulaire** (absent du site actuel — livrable critique) : prénom (facultatif), moyen de contact au choix, type de situation, message, créneau de rappel souhaité. Mention explicite : *« Votre demande est traitée de manière strictement confidentielle. Aucun message n'est envoyé en retour sans votre accord. »*

**Blocs de preuve à afficher haut de page** : deux numéros CNAPS · 30 ans d'expérience · rapports recevables en justice · confidentialité totale.

**Ne jamais réutiliser** le « 24h/24 » ni l'« intervention sous 24 h » de l'ancien site : ce sont des promesses erronées. Les horaires réels sont lundi-vendredi 8h-18h, et le seul engagement de délai tenu est la réponse sous 24 h ouvrées.

**Frictions à supprimer** : aucune référence visible aux avis → flux d'avis à lancer · pas de réponse à la question « est-ce légal ? » → silo Preuve dédié.

*Note : l'audit recommandait de basculer l'e-mail sur le domaine ; le client a tranché le 2026-09-02 en faveur du maintien de `activagence@free.fr`. Le point est clos.*

---

## 8. PLAN DE MIGRATION

### URLs conservées et redirigées (301)

| Ancienne URL | Nouvelle URL |
|---|---|
| `/` | `/` |
| `/service/detective-enquete-entreprise/` | `/detective-prive-entreprise-toulouse/` |
| `/service/detective-enquete-particulier/` | `/detective-prive-particuliers-toulouse/` |
| `/moyens/` | `/filature-surveillance-toulouse/` *(contenu réemployé et enrichi)* |
| `/faqs/` | `/faq-detective-prive/` |
| `/contact/` | `/contact/` |
| `/mentions-legales/` | `/mentions-legales/` (noindex) |
| `/politique-de-cookies-ue/` | `/politique-de-cookies/` (noindex) |

### URLs supprimées — **410 Gone, jamais 301**

Les 12 articles de démonstration, les 6 « projects » et `/category/uncategorized/`. Ces pages n'ont ni trafic ni backlink : une redirection transmettrait un signal de mauvaise qualité vers les pages cibles. La suppression est le bon geste.

### Contrôles avant mise en ligne
- [ ] `trailingSlash: true` et aucun lien interne sans slash
- [ ] Canonical auto-référent sur chaque page indexable
- [ ] Sitemaps segmentés générés, aucun `noindex` dedans
- [ ] `robots.ts` autorisant les crawlers IA de recherche
- [ ] `ProfessionalService` complet et NAP strictement identique partout
- [ ] Aucune image > 200 Ko, toutes en WebP, dimensions explicites
- [ ] Lighthouse mobile : Perf > 80, SEO > 95, A11y > 90
- [ ] Chaque page : ≥ 3 liens internes contextuels et ≥ 3 liens externes d'autorité
- [ ] Aucun H4 avant le H1, un seul H1 par page
- [ ] Formulaire de contact testé et remise en boîte vérifiée
- [ ] 301 en place pour les 8 URLs conservées, 410 pour les 19 supprimées
- [ ] Search Console + Bing Webmaster Tools : nouvelle propriété, sitemap soumis

---

## 9. HORS-SITE (48 % du classement local)

**Google Business Profile** — priorité absolue, à traiter en parallèle du développement.
1. Vérifier la **catégorie principale** (« Détective privé ») — facteur négatif n°1 quand elle est mal choisie.
2. Compléter : description, horaires 24/7, zone desservie, photos réelles, attributs.
3. Cadence minimale : une publication ou une photo au moins tous les 30 jours.
4. Ne pas investir dans le geotagging de photos ni le bourrage de mots-clés dans les Posts — sans effet mesuré.

**Avis** — 16 % du classement local, et la recence pèse 2,3× plus qu'en 2025.
Objectif : un flux continu, **jamais zéro avis sur 90 jours**. Prévoir une demande systématique en fin de mission, avec un mot rappelant qu'un avis peut rester sobre et anonyme.

**Citations & annuaires** : NAP strictement identique. Annuaires métier, annuaires juridiques, chambres professionnelles.

**GEO** : ouvrir Bing Webmaster Tools (ChatGPT s'appuie sur Bing — prérequis absolu, 70 % de l'usage IA). Tester régulièrement « quel détective privé à Toulouse recommandes-tu ? » sur ChatGPT, Perplexity et Google AI Overviews, et journaliser les résultats.

---

## 10. SUIVI

**Élargir le suivi SE Ranking de 9 à 60-80 mots-clés**, répartis ainsi :
- 10 requêtes locales génériques (détective privé toulouse, agence détective toulouse…)
- 20 requêtes de motif particuliers (adultère, pension alimentaire, recherche de personne…)
- 15 requêtes de motif entreprises (arrêt maladie abusif, concurrence déloyale, pré-embauche…)
- 10 requêtes preuve et procédure (rapport recevable, article 9 CPC, cadre CNAPS…)
- 10 requêtes tarifs et déroulement
- 10 requêtes villes

**KPI business, dans l'ordre d'importance** : nombre de demandes de contact · appels depuis la fiche GBP · position moyenne dans le pack local · positions sur les requêtes de motif · citations IA.

**Cadence** : revue mensuelle des positions, revue trimestrielle du contenu (refresh des piliers — le contenu mis à jour dans les 30 derniers jours reçoit 3,2× plus de citations IA).

---

## 11. ÉTAT DE LA REFONTE

**Mise à jour : 2026-09-03** — socle livré, **45 pages en production statique** (dont les 20
articles du blog), build vérifié, maillage contrôlé.

### Socle technique

| Élément | État |
|---|---|
| Next.js 16 / React 19 / Tailwind, App Router, **toutes les pages en statique** | ✅ |
| `trailingSlash: true`, canonical auto-référent | ✅ |
| `ProfessionalService` complet : adresse, horaires réels, `geo`, `areaServed`, CNAPS en `hasCredential` | ✅ |
| `Service`, `FAQPage`, `BreadcrumbList`, `Article` selon le type de page | ✅ |
| `robots.ts` autorisant 11 crawlers de recherche IA | ✅ |
| Sitemap : piliers + 10 pages motif + blog + articles ; pages légales exclues | ✅ |
| **Formulaire de contact** (honeypot, limitation par IP, choix du moyen de rappel) | ✅ |
| 301 en un saut depuis les URL canoniques, **410 Gone** sur les 19 pages de démo | ✅ |
| Images WebP : **3 363 Ko → 436 Ko** ; LCP 1 384 Ko → **181 Ko** | ✅ |
| Contrôles SEO bloquants au prebuild (`scripts/check-seo.mjs`) | ✅ |

### Design

Identité alignée sur le logo : bleu nuit `#101822`, rouge de marque `#E11030`, boutons en
dégradé partant du `#F9613D` choisi par le client. Hero en **carrousel de 3 slides**
(toutes rendues côté serveur, H1 unique sur la première, `inert` sur les inactives,
défilement suspendu au survol et désactivé si `prefers-reduced-motion`). Gabarit interne à
deux colonnes avec encart de contact collant. Transitions d'entrée en CSS pur, déclenchées
au chargement — jamais au scroll, et jamais sur le titre du hero qui est l'élément LCP.

### Pages en production (45 au sitemap)

- **Piliers (6)** : `/`, particuliers, entreprises, filature, preuve en justice, tarifs.
- **Motifs particuliers (5)** : adultère, pension alimentaire, droit de garde, recherche de
  personne, succession.
- **Motifs entreprises (5)** : arrêt de travail détourné, concurrence déloyale, vol interne,
  pré-embauche, solvabilité.
- **Villes (6)** : Blagnac, Colomiers, Tournefeuille, Muret, Balma, L'Union.
- **Blog (21)** : la page d'index et **20 articles**.
- **Support (2)** : FAQ, contact.
- **Légales (2)** : mentions, cookies — en `noindex`, hors sitemap.

### Limite technique connue

Next 16 normalise le trailing slash **avant** d'atteindre `src/proxy.ts`. Une ancienne URL
saisie **sans** slash (`/moyens`) fait donc 308 puis 301, soit deux sauts. Sans conséquence :
les URL réellement indexées sont les formes canoniques **avec** slash — celles que servait
WordPress et que listait son sitemap — et elles redirigent en un seul saut.

### Gabarit des pages (mise à jour 2026-09-02)

Trois composants partagés donnent aux pages piliers et aux pages villes la même
structure. Les modifier, c'est les modifier partout — c'est le but.

| Composant | Rôle |
|---|---|
| `BandeauCitation` | Photo pleine largeur (marge 100 px) avec une phrase de terrain en exergue |
| `SectionMoyens` | Les deux moyens, sur fond orangé très clair, cartes cliquables |
| `BandeauEngagements` | Les quatre garanties, sur fond sombre, avant la FAQ |

Rythme de mise en page retenu : alternance entre sections **pleine largeur avec
100 px de marge** et sections en **colonne de lecture centrée**. Les fonds
alternent blanc / gris `ardoise-50` / orangé `cta/6 %` / sombre, pour que deux
sections voisines ne se confondent jamais.

Sur les pages villes, le contenu `terrain` est découpé automatiquement : intro
centrée sur fond gris, une image par sous-section en alternance gauche/droite,
puis une section autonome par titre de niveau 2 (cartes à icônes pour les listes
de motifs, mise en page éditoriale sinon).

**Icônes** : `IconesPreuve` pour les garanties, `IconesMotifs` pour les situations
— celles-ci sont choisies d'après le libellé, jamais dans l'ordre, car les listes
diffèrent d'une page à l'autre.

### Identités de page (mise à jour 2026-09-02)

Toutes les pages ne suivent pas le même gabarit — c'est délibéré : une page lue
par quelqu'un en difficulté et une page de procédure n'appellent pas le même
registre.

| Page | Registre |
|---|---|
| Pages villes, entreprises, filature | Gabarit partagé `CorpsIllustre` |
| Particuliers | Humain : questions à la première personne, parcours en trois temps |
| Tarifs | Chiffré : trois variables en bandeau sombre, comparatif, chronologie verticale |
| Preuve en justice | Judiciaire : filets, angles droits, chiffres romains, tableau de recevabilité |

Chaque page hors gabarit a ses **propres visuels**, jamais réemployés ailleurs.

### Contrôle du maillage

`npm run maillage:check` (site démarré) vérifie sur le HTML produit : liens
morts, pages orphelines, pages sous le seuil de 3 liens sortants, et affiche le
nombre de liens entrants par page. À lancer avant chaque mise en ligne.

État au 2026-09-03 : aucun lien mort, aucune page orpheline, 45 pages au sitemap,
aucune page sous le seuil de 3 liens sortants, **aucun article sous 3 liens entrants**.
Les articles de blog sont le point faible naturel du maillage — ils ne reçoivent
de liens que des pages thématiques, pas de la navigation. Vérifier qu'un nouvel
article est cité depuis au moins trois pages avant de le considérer comme publié.

### Blog — série fondatrice livrée (2026-09-03)

Les **20 articles** du `PLAN_EDITORIAL.md` sont publiés, répartis sur quatre silos :
preuve et procédure (6), entreprises (6), particuliers (5), filature et méthode (3).

Chacun respecte le même contrat, vérifié par `npm run seo:check` au prebuild :

| Contrainte | Seuil |
|---|---|
| Longueur | ≥ 2 000 mots |
| Sources externes officielles | ≥ 3 (Légifrance, service-public.fr, CNIL, INPI, CNAPS…) |
| Liens vers les pages piliers | ≥ 2 |
| Métas | titre ≤ 60 car., description ≤ 155 car. |
| Visuel d'en-tête | **unique**, généré via fal.ai, jamais réutilisé |
| Illustration intercalée | 1 image de contexte, cohérente avec le sujet |
| Bloc « L'essentiel » | réponse de 130-170 mots, extractible hors contexte par un LLM |
| FAQ | 4 questions, reprises en `FAQPage` |

Le gabarit d'article est commun : sommaire collant avec barre de progression de
lecture, encart « L'essentiel », blocs typés (paragraphe, liste, liste ordonnée,
tableau, avertissement, image), FAQ, articles liés.

**Ligne éditoriale à tenir** : ne jamais inventer de barème ni de statistique, ne
jamais promettre un résultat, énoncer clairement ce que la loi interdit. Chaque
article contient au moins un élément non copiable — une règle de forme précise,
une distinction juridique, une contrainte de calendrier.

### Reste à produire

1. **Pages villes** : 6 livrées, en ajouter 2 à 4 pour couvrir l'agglomération, puis
   l'Occitanie. Chacune 800-1 200 mots réellement différenciés — un gabarit dupliqué
   avec le nom de la ville substitué serait pénalisé.
2. **Blog** : cadence de croisière **2 articles par mois maximum**, chacun avec un
   élément non copiable. Le plan éditorial est saturé : tout nouvel article suppose
   d'abord d'identifier une intention non couverte.
3. **Hors-site** : fiche Google Business Profile, flux d'avis, annuaires, Bing Webmaster Tools.
4. **En attente du client** : la grille tarifaire (`GRILLE` reste volontairement vide
   dans `tarifs-detective-prive-toulouse/page.tsx` — aucun prix inventé), les profils
   sociaux réels (`sameAs` vide), et les clés `RESEND_API_KEY` / `CONTACT_FROM` sans
   lesquelles le formulaire de contact répond 503 avec repli sur le téléphone.

---

*Document de référence du projet. À mettre à jour à chaque évolution structurante. Audit fondateur : `AUDIT_SEO_ACTIVAGENCE_2026-09-02.md`.*
