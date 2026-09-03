# Audit SEO complet — Activ'Agence Toulouse

**Site audité** : https://activagencetoulouse.fr/
**Date** : 2026-09-02
**Méthode** : `docs/seo/seo-audit-playbook-clickzou.md` (Clickzou) — audit complet de site client, préalable à refonte
**Référentiel appliqué** : `SEO_MASTER_CLICKZOU.md` (§2 technique, §4 maillage, §7 rédactionnel, §11 séparation d'intention / GEO, §12 veille)
**Objectif** : diagnostic priorisé + cadrage de la refonte React/Next.js

> **Périmètre de vérification.** Tout ce qui est marqué VÉRIFIÉ a été mesuré en direct sur la production le 2026-09-02 (crawl HTTP, parsing HTML, sitemaps, headers, poids des assets). Ce qui est marqué INFÉRÉ est une déduction de consultant, pas une mesure. Trois données n'ont **pas** pu être mesurées et sont explicitement exclues des conclusions : les Core Web Vitals terrain (quota PageSpeed API épuisé sur le compte le jour de l'audit), le profil de backlinks (pas d'accès Ahrefs/Majestic dans cette session) et les données Search Console (pas d'accès à la propriété GSC du client).

---

## A. RÉSUMÉ EXÉCUTIF

### Situation

Activ'Agence est une agence de détectives privés à Toulouse, autorisée CNAPS (n° 031 2114 10 05 20150359055 et 031 2114 10 05 20150375989), 30 ans d'expérience revendiqués, adresse 23 boulevard des Minimes, 31200 Toulouse. Le site est un WordPress sous thème acheté « InsightEye » (v7.1) + Elementor + All in One SEO 5.0.1.1, hébergé chez o2switch.

Positions constatées (SE Ranking, 2026-09-02) : `détective privé toulouse` (480 rech./mois) → **position 35-40** ; `détective toulouse` (210) → **35-37** ; `agence détective privé` (320) → **hors top 100** ; `agence détective privé toulouse` → **32**. Le site n'est premier que sur son propre nom de marque.

### Le vrai diagnostic en une phrase

**Le site n'est pas mal positionné à cause d'un problème technique : il est mal positionné parce qu'il n'existe presque pas.** Le site compte **8 pages françaises réelles totalisant ~3 900 mots**, dont 2 seulement sont des pages de service. En face, `groupe-allarys.com` publie 145 URLs et `detectivetoulouse.com` 57 URLs. Aucun volume de correction technique ne comblera un écart de surface éditoriale de cet ordre.

Second facteur aggravant, indépendant du premier : **19 des 27 pages indexables du site (70 %) sont du contenu de démonstration du thème** — des articles en anglais en Lorem ipsum, dont cinq quasi-duplicatas d'un même texte, publiés sous des slugs fautifs (`famous-cases-solved-by-private-investigatoa`). Google crawle donc un site dont la majorité du contenu est du remplissage anglophone sans rapport avec l'activité.

### Forces réelles (à préserver dans la refonte)

| Force | Détail | Statut |
|---|---|---|
| Autorisations CNAPS affichées | Deux numéros en footer — actif E-E-A-T fort dans un secteur réglementé | VÉRIFIÉ |
| Ancienneté et antériorité | Domaine actif depuis au moins juin 2023, positions stables 30-40 sans décrochage | VÉRIFIÉ |
| Metas rédigées à la main | Titles et descriptions FR pertinents, mot-clé en tête, longueurs correctes | VÉRIFIÉ |
| Alt d'images renseignés | 0 image sans alt sur la home ; 4 alt sont descriptifs et localisés | VÉRIFIÉ |
| Redirections domaine propres | http, www, index.php → une seule canonique en un saut | VÉRIFIÉ |
| Nommage des fichiers images | `agence-detective-prive-entreprise-toulouse.jpg` — déjà optimisé | VÉRIFIÉ |
| Contenu métier légitime | Les listes de prestations (solvabilité, contre-espionnage, pré-embauche) sont justes et exploitables comme socle | VÉRIFIÉ |

### Faiblesses classées par gravité

1. **Surface éditoriale quasi nulle** — 8 pages FR, ~3 900 mots pour tout le site. Aucune page ne cible une intention de recherche réelle (adultère, pension alimentaire, concurrence déloyale, arrêt maladie abusif, tarifs, recevabilité du rapport).
2. **19 pages de démo Lorem ipsum indexables**, dont 5 quasi-duplicatas exacts entre eux, en anglais.
3. **Aucun formulaire de contact sur `/contact/`** — la page ne contient qu'une iframe Google Maps. Zéro capture de lead écrite sur un site dont la clientèle recherche la discrétion.
4. **Page LCP de 3,4 Mo**, dont une seule image de **1,4 Mo** en JPEG, servie en **HTTP/1.1** avec 53 CSS et 20 JS.
5. **Pas de `LocalBusiness` en JSON-LD** — seulement `Organization` sans adresse, sans horaires, sans `sameAs`, sans avis. Handicap direct sur le pack local, qui pèse le plus lourd sur ce marché.
6. **NAP incohérent** entre home, footer et mentions légales ; `tel:` mal formaté ; e-mail en `@free.fr`.
7. **Liens sociaux pointant vers les pages d'accueil de Facebook, Instagram et Twitter** (`https://www.facebook.com/`) — signal d'entité nul, et signal d'abandon.
8. **Pages `/service/` absentes du sitemap** et menu pointant vers des URLs sans slash, donc 301 à chaque clic.

### Les deux plus grosses opportunités

**1. Un marché sous-couvert.** Les concurrents toulousains publient 57 à 145 URLs, mais aucun ne couvre sérieusement le triptyque qui déclenche l'appel : *le motif* (« mon conjoint me trompe, que faire »), *la preuve* (« un rapport de détective est-il recevable au tribunal ») et *le prix* (« combien coûte un détective privé »). Ce sont les trois requêtes qui convertissent, et l'espace est ouvert.

**2. Le levier local + IA.** 45 % des consommateurs utilisent désormais un assistant IA pour se faire recommander une entreprise locale (contre 6 % en 2025). Or les citations locales des IA sont un sous-ensemble du pack local Google. Une fiche Google Business Profile complète, un `LocalBusiness` correct et un flux d'avis régulier travaillent donc simultanément les deux canaux. Aucun concurrent toulousain identifié n'a structuré cela.

---

## B. DIAGNOSTIC DÉTAILLÉ

### B.1 — Technique SEO

#### Indexation

| Point | Constat | Verdict |
|---|---|---|
| `robots.txt` | Présent, `Disallow: /wp-admin/`, 2 sitemaps déclarés | OK |
| Sitemap index | `/sitemap.xml` → post / page / project | OK |
| **Pages `/service/` dans le sitemap** | **ABSENTES** — les 2 seules pages de service commerciales ne sont dans aucun sitemap | **CRITIQUE** |
| Contenu des sitemaps | 12 articles démo + 6 projets démo = 18 URLs sur 24, soit 75 % de déchet déclaré à Google | **CRITIQUE** |
| Canonical | Auto-référent et correct sur toutes les pages testées | OK |
| Meta robots | `max-image-preview:large` partout — **les pages démo sont donc indexables** | **CRITIQUE** |
| 404 | Vraie 404 avec `noindex` — pas de soft 404 | OK |
| Archives WP | `/author/`, `/tag/`, archives de dates → 404 propres. **Mais `/category/uncategorized/` renvoie 200 et est indexable** | IMPORTANT |
| `/feed/` | 200 avec `robots: none` | OK |
| Redirections domaine | http, www, `index.php` → 1 seul saut vers la canonique | OK |
| **Trailing slash** | **Incohérent** : le menu pointe vers `/service/detective-enquete-entreprise` (sans slash) → **301 systématique à chaque clic** | IMPORTANT |

#### Performance — mesures directes

Les Core Web Vitals terrain n'ont pas pu être relevés (quota PageSpeed API épuisé sur le compte, HTTP 429 sur deux tentatives). Les mesures ci-dessous ont été prises directement, en téléchargeant les ressources.

| Mesure | Valeur | Commentaire |
|---|---|---|
| HTML de la home | 122 Ko | Lourd pour ~740 mots visibles |
| **Assets de la home** | **3 363 Ko** | 34 ressources téléchargées |
| **Image LCP** | **1 417 Ko** — `detective-prive-toulouse-enquete-entreprise.jpg` | JPEG non compressé, en `preload fetchpriority=high` |
| Autres images lourdes | 337 Ko, 233 Ko (`men-1.png`), 217 Ko, 117 Ko | Aucune en WebP |
| **Protocole** | **HTTP/1.1** | Pas de multiplexage sur ~73 requêtes — pénalité mobile majeure |
| Feuilles CSS | **53** | Thème + Elementor + Redux + Complianz, aucune concaténation |
| Scripts JS | **20** | dont jQuery 3.7.1, fancybox 154 Ko, owl 90 Ko, bootstrap, bxslider, isotope |
| Script inutile | `lottie-player-script.js` — **346 Ko** | Chargé par le plugin *Maintenance/Coming Soon*, sans usage visible sur le site |
| `loading="lazy"` sur les images | **0** | Aucune image différée |
| Format WebP | **0** | Aucun |
| Cache assets | `max-age=31536000, public` | OK |
| Compression | Brotli actif | OK |

**Lecture business** : environ 2,5 Mo des 3,4 Mo sont éliminables sans toucher au design (conversion WebP + suppression du plugin de maintenance + concaténation). Sur un marché où le prospect cherche souvent depuis un mobile, en situation d'urgence, ce poids coûte directement des appels.

#### Structure technique

- JSON-LD présent mais pauvre : `BreadcrumbList` (un seul niveau nommé « Domicile » — libellé issu d'une traduction automatique), `Organization`, `WebPage`, `WebSite`, `ImageObject`.
- **Absent** : `LocalBusiness` / `ProfessionalService`, `address`, `openingHoursSpecification`, `geo`, `areaServed`, `sameAs`, `AggregateRating`, `Service`, `FAQPage` (alors qu'une page `/faqs/` existe).
- Open Graph : `og:image` pointe vers le **favicon 236×219 px**. Tout partage social affiche une vignette minuscule.
- Balise `<meta name="generator" content="All in One SEO 5.0.1.1">` — version publiée d'octobre 2023, non mise à jour depuis. Surface de risque de sécurité exposée publiquement.

### B.2 — Architecture

```
/                                              741 mots   [business]
├── /service/detective-enquete-entreprise/     605 mots   [business]  hors sitemap
├── /service/detective-enquete-particulier/    698 mots   [business]  hors sitemap
├── /moyens/                                   556 mots   [support]   sans H1
├── /faqs/                                     820 mots   [support]   sans FAQPage
├── /contact/                                  460 mots   [conversion] sans formulaire
├── /mentions-legales/                                    [légal]     indexable, devrait être noindex
├── /politique-de-cookies-ue/                             [légal]     indexable, devrait être noindex
│
└── ZONE MORTE — 19 pages indexables de démonstration
    ├── 12 articles anglais Lorem ipsum, dont :
    │   ├── famous-cases-solved-by-private-investigator/       896 mots
    │   ├── famous-cases-solved-by-private-investigators/      894 mots  ← quasi-duplicata
    │   ├── famous-cases-solved-by-private-investigatoa/       894 mots  ← quasi-duplicata + faute de frappe
    │   ├── famous-cases-solved-by-privates-investigator/      896 mots  ← quasi-duplicata
    │   ├── famous-cases-solvedes-by-private-investigators/    894 mots  ← quasi-duplicata
    │   └── (5 variantes de « how-private-investigator-conduct-surveillance » + 3 de « manage-risk-monitoring »)
    ├── 6 « projects » démo (case-investigation, cctv-security, event-security…)
    └── /category/uncategorized/                              indexable
```

**Constats :**

- **Profondeur** : correcte (tout est à 1-2 clics). Ce n'est pas le problème.
- **Ratio de qualité** : 8 pages utiles / 27 indexables = **30 %**. Google évalue la qualité d'un site sur l'ensemble de ce qu'il crawle.
- **Duplication interne massive** : 5 pages quasi identiques (~895 mots chacune, différant seulement par le titre) constituent le pire signal que puisse envoyer un site de cette taille.
- **Pages orphelines** : les 19 pages démo ne reçoivent aucun lien depuis la navigation, mais sont déclarées au sitemap. Elles consomment du crawl sans jamais recevoir d'autorité.
- **Aucun hub, aucun blog, aucune page ville, aucune page motif.** Il n'y a rien à mailler.

### B.3 — Silos sémantiques

**Il n'existe aucun silo.** Deux pages de service séparées par cible (entreprise / particulier), et c'est tout. C'est la conclusion structurante de cet audit : le site n'a pas de problème de silo à corriger, il a un système de silos entier à construire — ce que la refonte React doit livrer.

Ce que l'espace de recherche impose (structure cible détaillée dans `SEO_MASTER_ACTIVAGENCE.md`) :

| Silo cible | Page pilier | Intention couverte aujourd'hui |
|---|---|---|
| 1. Détective pour particuliers | `/detective-prive-particuliers-toulouse/` | Partielle — 698 mots de listes |
| 2. Détective pour entreprises | `/detective-prive-entreprise-toulouse/` | Partielle — 605 mots de listes |
| 3. Filature & surveillance | `/filature-surveillance-toulouse/` | **Aucune** |
| 4. Preuve, rapport & procédure | `/rapport-detective-prive-preuve-justice/` | **Aucune** — c'est pourtant le frein n°1 à l'achat |
| 5. Tarifs & déroulement d'enquête | `/tarifs-detective-prive-toulouse/` | **Aucune** — mot-clé suivi, position néant |
| 6. Zone d'intervention | `/detective-prive-toulouse/` + villes | **Aucune** |
| 7. Ressources / blog | `/blog/` | **Aucune** (`/blog/` renvoie 404) |

### B.4 — Pages business

#### `/` — Home

| Critère | Constat | Verdict |
|---|---|---|
| Title | `Activ'Agence - Agence Détectives privés Toulouse` (50 car.) | OK, mais **la marque est en tête** alors qu'elle n'a aucun volume. `Détective privé à Toulouse` devrait ouvrir. |
| Meta description | 152 caractères, correcte | OK |
| **H1** | **« Une agence de détectives avec 30 ans d'expérience »** — **ne contient pas « Toulouse » ni « détective privé »** | **CRITIQUE** |
| Hiérarchie Hn | 1×H1, 6×H2, 13×H3, 1×H4 — mais **un H4 « Contactez-nous » apparaît avant le H1** dans le flux | IMPORTANT |
| Volume | 741 mots réels | Très faible pour une home pilier |
| CTA | « Contactez-nous », « Découvrir » | Génériques, sans promesse ni réassurance |
| Preuve | CNAPS relégué en footer | Sous-exploité |
| Maillage sortant | 5 destinations internes uniques | Insuffisant |
| JSON-LD | `Organization` sans adresse | **CRITIQUE** pour du local |

#### `/service/detective-enquete-entreprise/`

Title et description corrects. **H1 « Enquête pour les entreprises » sans « Toulouse » ni « détective ».** 605 mots, majoritairement des listes à puces non développées : 17 prestations sont énumérées (solvabilité, contre-espionnage industriel, pré-embauche, concurrence déloyale, détournement de clientèle…) sans qu'aucune ne soit expliquée. **Chacune de ces 17 lignes est une page potentielle** avec sa propre intention de recherche. C'est le gisement le plus immédiat du site. Page absente du sitemap.

#### `/service/detective-enquete-particulier/`

Même structure, même défaut : 698 mots de listes. Cible 1 500-3 000 mots (règle §7 du master).

#### `/contact/` — page de conversion

**Aucune balise `<form>` sur la page.** Le contenu se limite à une adresse, un téléphone, un e-mail `@free.fr` et une iframe Google Maps. Pour une agence de détectives — métier où le prospect hésite précisément à décrocher son téléphone — c'est la plus grosse perte de conversion du site. À trafic constant, ajouter un formulaire discret et rassurant augmenterait les leads sans aucun gain SEO.

#### `/moyens/`

**Aucun H1.** 556 mots. La page décrit le matériel (véhicules banalisés, détection d'écoutes, communications radio) : c'est un contenu de preuve différenciant, mal structuré et non exploité.

#### `/faqs/`

820 mots, aucune balise `FAQPage`. Or les questions/réponses sont exactement le format que les moteurs génératifs extraient en priorité. Actif dormant.

### B.5 — Maillage interne

| Règle (SEO_MASTER §4) | Site | Verdict |
|---|---|---|
| ≥ 3 liens internes contextuels par page | Home : 5 destinations ; pages service : ~2 | **NON CONFORME** |
| Trailing slash sur tous les `href` | Menu principal sans slash → 301 | **NON CONFORME** |
| Ratio 70/30 intra/cross-silo | Sans objet — pas de silo | N/A |
| Profondeur ≤ 3 clics | Respectée | OK |
| Aucun lien vers page noindex | Respectée | OK |
| Pas de pages orphelines | **19 pages orphelines** | **NON CONFORME** |
| Ancres descriptives | « Découvrir », « Contactez-nous » — ancres vides | **NON CONFORME** |
| ≥ 3 liens externes E-E-A-T par contenu | **0 lien externe** sur tout le site | **NON CONFORME** |

Le maillage est quasi inexistant : 5 entrées de menu, un footer répétitif, aucun lien contextuel dans le corps des textes. L'autorité entrante — quelle qu'elle soit — ne circule nulle part.

### B.6 — Sémantique

**Couverture des mots-clés suivis (SE Ranking, 2026-09-02) :**

| Mot-clé | Volume | Position | Page censée porter | Diagnostic |
|---|---|---|---|---|
| détective privé toulouse | 480 | 35-40 | Home | H1 sans le mot-clé, 741 mots, pas de `LocalBusiness` |
| agence détective privé | 320 | **> 100** | Home | Aucune page ne cible cette requête nationale |
| detective toulouse | 210 | 35-37 | Home | Idem |
| agence détective privé toulouse | ~0 | 32 | Home | — |
| tarifs détective privé | 10 | **> 100** | **aucune page n'existe** | Page à créer |
| contact détective privé | 0 | **> 100** | `/contact/` | Page vide de contenu |
| activ agence | 10 | **2** | Home | Seule requête gagnée : la marque |

**Analyse :** la liste de mots-clés suivie est elle-même trop étroite (9 termes, dont 4 à volume nul). Elle ne couvre aucune requête de motif — or ce sont elles qui déclenchent l'appel : `détective privé adultère`, `preuve infidélité divorce`, `faire suivre son conjoint`, `enquête arrêt maladie abusif`, `rapport détective recevable tribunal`, `combien coûte un détective privé`, `recherche de personne disparue`. Le suivi doit être élargi à 60-80 mots-clés au lancement de la refonte.

**Défauts sémantiques transversaux :**
- Aucun H1 du site ne contient à la fois le service et la ville.
- Le mot-clé principal n'apparaît pas dans les 100 premiers mots de la home.
- Les H2 ne portent aucun mot-clé secondaire (« Découvrez nos Services », « Faites appel à un expert »).
- Aucun contenu au format « réponse directe » extractible par un LLM.
- Aucune donnée chiffrée, aucun cas concret, aucun exemple — alors que les core updates 2026 récompensent explicitement la matière propriétaire.
- Faute de frappe dans le corps de la page service entreprise : « Bienvenue chez **Ativ'Agence** ».

### B.7 — Cannibalisation

Aucune cannibalisation entre les pages FR : elles sont trop peu nombreuses et trop distinctes. **En revanche, une duplication interne caractérisée existe** sur 13 des 19 pages démo :

| Groupe | Pages | Écart |
|---|---|---|
| `famous-cases-solved-by-private-investigator*` | **5 URLs** | 894-896 mots, texte identique, titre seul différent |
| `how-private-investigator*-conduct-surveillance*` | **5 URLs** | idem |
| `how-to-manage-risk*-monitoring-security` | **3 URLs** | idem |

**Action : suppression pure et simple (410 Gone), pas de redirection.** Ces pages n'ont ni trafic, ni backlink, ni valeur ; une 301 vers la home transmettrait un signal de mauvaise qualité vers la page la plus importante du site.

**Risque futur** : la refonte créera des pages « service » et des pages « ville ». Le cloisonnement d'intention (SEO_MASTER §11.1) devra être appliqué dès la conception — une intention, une page — sous peine de reproduire à grande échelle le problème qu'on corrige.

### B.8 — UX & conversion

| Point | Constat | Impact |
|---|---|---|
| Formulaire de contact | **Inexistant** | **Bloquant** |
| Demande de rappel discret | Absente | Bloquant sur ce métier |
| Numéro cliquable | `href="tel:05 61 57 17 33"` — espaces non conformes | Échecs d'appel sur certains mobiles |
| E-mail | `activagence@free.fr` | Signal de non-professionnalisme sur un service à 1 500-5 000 € |
| Réseaux sociaux | 3 liens vers les **pages d'accueil** de Facebook, Instagram, Twitter | Signal d'abandon + fuite de trafic |
| Avis clients | Aucun, nulle part | Le facteur de confiance n°1 du local |
| Mention CNAPS | En footer uniquement | Le principal argument de légitimité, invisible |
| Confidentialité | Jamais adressée | Frein d'achat n°1 non traité |
| Copyright | « Copyright 2025 » | Signal de site non maintenu |
| Bandeau cookies | Complianz, correct | OK |

### B.9 — Backlinks

Non mesuré : pas d'accès à un index de liens dans cette session. Ce qui est **vérifiable** : le site ne comporte **aucun lien externe sortant** (règle §4 du master : minimum 3 par contenu, signal E-E-A-T critique) et n'offre **aucun actif linkable** — pas d'étude, pas de guide, pas de donnée, pas de tableau réutilisable. Aucun contenu du site ne mérite aujourd'hui d'être cité. À instrumenter dès l'ouverture de la Search Console.

### B.10 — GEO / LLM (section obligatoire — SEO_MASTER §2 et §11.3)

| # | Critère | État | Action |
|---|---|---|---|
| 1 | **Accès crawlers IA** | `robots.txt` n'interdit que `/wp-admin/` → GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot passent | OK — à conserver explicitement en refonte |
| 2 | **Entité forte** | `Organization` sans `address`, sans `sameAs`, sans `contactPoint`. NAP incohérent sur 3 variantes. Liens sociaux morts | **CRITIQUE** |
| 3 | **Contenu citable** | Aucune réponse directe, aucune donnée chiffrée, aucun `FAQPage` malgré une page FAQ | **CRITIQUE** |
| 4 | **Mentions tierces** | Non vérifiable ici. Aucune stratégie visible | À instrumenter |
| 5 | **Indexation Bing** | Non vérifiable sans accès Bing Webmaster Tools. Prérequis absolu : ChatGPT s'appuie sur Bing | À ouvrir |
| 6 | **Mesure** | Aucun suivi de citations IA | À mettre en place |

**Conclusion GEO** : sur 6 critères, 1 est acquis (accès crawlers, par défaut), 2 sont critiques, 3 sont à instrumenter. Comme le rappelle le master §11.3, GEO et Google sont le même combat : une page en position 35 n'est jamais citée par une IA.

---

## C. VEILLE & TEMPS D'AVANCE (§3.5 et §12 du référentiel)

Quatre recherches menées le 2026-09-02. Seuls figurent ici les éléments postérieurs ou complémentaires au journal de veille du 2026-07-26 (`SEO_MASTER_CLICKZOU.md` §12.3), et directement applicables à Activ'Agence.

| # | Trouvaille | Qualif. | Ce que ça change | Action Activ'Agence | Effort / Impact |
|---|---|---|---|---|---|
| 1 | **La recommandation locale par IA est passée de 6 % (2025) à 45 % (2026)** des consommateurs — 3ᵉ source de recommandation d'entreprise | `[PROUVÉ]` | Un canal d'acquisition entier s'est ouvert en 12 mois sur le local, où Activ'Agence est totalement absent | Traiter la fiche GBP + le `LocalBusiness` comme des livrables de la refonte, pas comme une option post-lancement | Faible / **Très fort** |
| 2 | **Pondération des signaux locaux 2026** : GBP 32 %, on-page 19 %, avis 16 %, liens 15 %, comportement 8 %, citations 7 % | `[PROUVÉ]` | 48 % du classement local se joue hors du site (GBP + avis). Refaire le site seul plafonnera le résultat | Lancer le chantier avis **en parallèle** de la refonte, pas après. Objectif : flux continu, jamais 0 avis sur 90 jours | Faible / **Très fort** |
| 3 | **La catégorie principale GBP mal choisie est le facteur négatif n°1 du classement local** | `[PROUVÉ]` | Un seul réglage peut à lui seul plafonner toute la visibilité locale | Vérifier immédiatement que la catégorie principale est bien « Détective privé » / « Agence d'investigation » — avant toute autre action | **Très faible** / Fort |
| 4 | **Contenu mis à jour dans les 30 derniers jours = 3,2× plus de citations IA** que du contenu figé | `[PROUVÉ]` | La fraîcheur devient un facteur de citation, pas seulement de crawl | Prévoir dès l'architecture React un champ `dateModified` réel exposé en JSON-LD + un cycle de refresh trimestriel des pages piliers | Faible / Fort |
| 5 | **Perplexity tire 46,7 % de ses citations de Reddit** ; seulement 11 % des domaines sont cités à la fois par ChatGPT et Perplexity | `[PROUVÉ]` | Optimiser « pour les IA » en bloc est un leurre : chaque moteur a sa logique de sélection | Cibler ChatGPT en priorité (70 % de l'usage) via l'indexation Bing + l'entité, plutôt que de disperser l'effort | Faible / Moyen |
| 6 | **Core updates mars et mai 2026** : revalorisation des sites de marque et des sources détenant de la donnée propriétaire ; **chute de 60 à 90 %** pour les contenus produits en masse sans relecture experte | `[OBSERVÉ]` | Publier 50 pages génériques à la refonte serait contre-productif | Chaque page doit contenir un élément non copiable : cas anonymisé, procédure réelle, barème tarifaire, référence juridique | Moyen / **Très fort** |
| 7 | **La citation IA locale est un sous-ensemble du pack local** (rappel du journal 12.3, confirmé) | `[PROUVÉ]` | Aucun contenu ne fera citer Activ'Agence par une IA tant que la fiche locale ne rankera pas | Séquencer : GBP + avis + `LocalBusiness` **avant** l'effort éditorial GEO | — / Fort |

**Pratique à ne PAS reprendre** (invalidée) : le geotagging des photos GBP et le bourrage de mots-clés dans les Google Posts n'ont aucun effet mesuré. À exclure du plan.

**Fenêtre d'opportunité** : sur ce marché local, aucun des concurrents toulousains examinés n'a structuré son entité pour les moteurs génératifs. L'avance se prend maintenant, avant que le secteur ne s'aligne.

---

## D. PRIORISATION

### 🔴 CRITIQUE — à traiter avant tout le reste

| # | Action | Pourquoi |
|---|---|---|
| C1 | **Supprimer les 19 pages de démo** (12 articles + 6 projets + `/category/uncategorized/`) en 410 Gone | 70 % de l'index est du Lorem ipsum anglais dupliqué — plafonne l'évaluation qualité du site entier |
| C2 | **Créer un formulaire de contact** sur `/contact/` + un rappel discret sur chaque page | Zéro capture de lead écrite aujourd'hui |
| C3 | **Réécrire les H1** avec service + ville (`Détective privé à Toulouse`) | Aucun H1 ne contient le mot-clé cible |
| C4 | **Implanter `LocalBusiness`/`ProfessionalService`** complet (adresse, horaires, `geo`, `areaServed`, `sameAs`, CNAPS) | 48 % du classement local se joue sur l'entité et les avis |
| C5 | **Optimiser l'image LCP** (1,4 Mo → ~120 Ko WebP) et supprimer le plugin de maintenance (346 Ko de JS inutile) | 2,5 Mo éliminables sans toucher au design |
| C6 | **Auditer et compléter la fiche Google Business Profile** — catégorie principale en premier | Facteur négatif n°1 du local ; prérequis aux citations IA |
| C7 | **Uniformiser le NAP** sur les 3 emplacements + `tel:+33561571733` + e-mail sur le domaine | Toute divergence NAP supprime de la visibilité locale |

### 🟠 IMPORTANT

| # | Action | Pourquoi |
|---|---|---|
| I1 | Porter les 2 pages service à 1 500+ mots, une prestation = une section développée | 605 et 698 mots contre une cible de 1 500-3 000 |
| I2 | Créer `/tarifs-detective-prive-toulouse/` avec une vraie grille | Requête suivie, page inexistante, frein d'achat majeur |
| I3 | Créer `/rapport-detective-prive-preuve-justice/` (recevabilité, art. 9 CPC, CNAPS) | Frein n°1 à l'achat, aucun concurrent ne le traite bien |
| I4 | Ajouter `FAQPage` sur `/faqs/` et une FAQ sur chaque page pilier | Format prioritaire d'extraction par les LLM |
| I5 | Corriger le maillage : trailing slash partout, 3+ liens contextuels par page, ancres descriptives | Règle §4 du master, non conforme sur tous les points |
| I6 | Mettre les 2 pages `/service/` dans le sitemap ; passer les pages légales en `noindex` | Les seules pages commerciales ne sont pas déclarées |
| I7 | `og:image` dédiée 1200×630 | Le partage social affiche aujourd'hui un favicon |
| I8 | Réparer ou retirer les liens sociaux morts | Signal d'entité et signal d'abandon |
| I9 | Corriger « Ativ'Agence » et « Copyright 2025 » | Signaux de négligence |
| I10 | Lancer le flux d'avis Google (objectif : jamais 0 avis sur 90 jours) | 16 % du classement local ; recence pondérée ×2,3 depuis 2026 |

### 🟢 OPPORTUNITÉ — le moteur de croissance

| # | Action | Pourquoi |
|---|---|---|
| O1 | **Construire les 7 silos** (~35-45 pages) — voir `SEO_MASTER_ACTIVAGENCE.md` | La cause racine : 8 pages contre 57-145 chez les concurrents |
| O2 | Créer les pages « motif » (adultère, pension alimentaire, arrêt maladie abusif, concurrence déloyale, recherche de personne) | Les requêtes qui déclenchent réellement l'appel |
| O3 | Créer les pages ville (Blagnac, Colomiers, Muret, Tournefeuille, Balma… puis Montauban, Albi, Castres, Auch) | Élargit la zone sans cannibaliser Toulouse |
| O4 | Publier 1 actif linkable par trimestre (baromètre chiffré, guide de la preuve) | Aucun contenu du site ne mérite d'être cité aujourd'hui |
| O5 | Ouvrir Bing Webmaster Tools + suivi des citations IA | ChatGPT = 70 % de l'usage IA, indexation Bing obligatoire |
| O6 | Élargir le suivi SE Ranking à 60-80 mots-clés incluant les requêtes de motif | Le suivi actuel (9 termes) ne mesure pas le marché réel |

---

## E. PLAN D'ACTION

### Phase 0 — Assainissement immédiat (sur le WordPress actuel, avant refonte)

À faire tout de suite : ces actions produisent un effet même si la refonte prend 3 mois, et leur bénéfice se transfère intégralement au nouveau site.

| Action | Impact SEO | Impact business | Effort | Priorité |
|---|---|---|---|---|
| Supprimer les 19 pages démo (410) | **Fort** — retire 70 % de contenu dupliqué de l'index | Indirect | 1 h | 🔴 |
| Formulaire de contact + rappel discret | Nul | **Fort** — leads immédiats à trafic constant | 3 h | 🔴 |
| Image LCP en WebP + purge plugin maintenance | **Fort** — mobile | Moyen — moins d'abandons | 2 h | 🔴 |
| H1 réécrits avec service + ville | **Fort** | Moyen | 1 h | 🔴 |
| `LocalBusiness` JSON-LD complet | **Fort** — local + GEO | Fort | 3 h | 🔴 |
| Audit et complétion GBP (catégorie d'abord) | **Très fort** — 32 % des signaux locaux | **Très fort** | 3 h | 🔴 |
| NAP uniformisé + `tel:` + e-mail sur domaine | Fort | Fort | 2 h | 🔴 |
| Sitemap : ajouter `/service/`, `noindex` sur les pages légales | Moyen | Nul | 1 h | 🟠 |
| Corrections rédactionnelles (Ativ'Agence, 2025, liens sociaux) | Faible | Moyen — crédibilité | 1 h | 🟠 |

**Environ 17 heures pour traiter tout le rouge.** C'est le meilleur rapport effort/impact du dossier.

### Phase 1 — Refonte React/Next.js (socle)

Architecture cible, conventions techniques, plan de silos, plan de maillage, JSON-LD et plan de redirections : **`SEO_MASTER_ACTIVAGENCE.md`** (document jumeau, écrit avec cet audit).

Livrables SEO non négociables du socle :
1. Next.js App Router + SSG, `trailingSlash: true`, HTTP/2 minimum.
2. Sitemaps segmentés + `robots.ts` autorisant explicitement les crawlers IA de recherche.
3. `LocalBusiness` + `Service` + `FAQPage` + `BreadcrumbList` par type de page.
4. Images WebP, `width`/`height` explicites, `priority` sur le seul LCP, lazy ailleurs.
5. Plan de redirections 301 des 8 URLs FR conservées (les 19 pages démo partent en 410, pas en 301).
6. Cible Lighthouse : Performance > 80, SEO > 95, Accessibilité > 90.

### Phase 2 — Contenu (le vrai levier)

Ordre de production, du plus rentable au moins rentable :

1. **Home + 2 piliers service** réécrits à 1 500-2 000 mots.
2. **`/tarifs-detective-prive-toulouse/`** — grille réelle, ce que couvre un forfait, exemples chiffrés.
3. **`/rapport-detective-prive-preuve-justice/`** — recevabilité, article 9 CPC, cadre CNAPS, ce qu'un détective peut et ne peut pas faire.
4. **5 pages motif particuliers** — adultère/infidélité, pension alimentaire et concubinage, garde d'enfants, recherche de personne, succession et héritiers.
5. **5 pages motif entreprises** — arrêt maladie abusif, concurrence déloyale, vol interne, pré-embauche, solvabilité et recouvrement.
6. **`/filature-surveillance-toulouse/`** + `/moyens/` réécrite (contenu de preuve différenciant, déjà à moitié écrit).
7. **6-8 pages villes** de l'agglomération, puis l'Occitanie.
8. **Blog** — 2 articles/mois maximum, chacun avec réponse directe, données chiffrées, FAQ et 3 liens externes d'autorité.

**Règle appliquée** (core updates 2026, veille C6) : chaque page doit contenir au moins un élément non copiable — un cas anonymisé, un barème réel, une procédure décrite de l'intérieur. Une refonte qui publierait 40 pages génériques serait pénalisée, pas récompensée.

### Phase 3 — Hors-site (en parallèle, dès la Phase 0)

1. Flux d'avis Google continu — jamais 0 sur 90 jours.
2. Annuaires métier et juridiques (NAP strictement identique).
3. Recherche de citations dans les listicles « meilleur détective privé Toulouse » — double effet SEO et GEO.
4. Ouverture de Bing Webmaster Tools et suivi des citations IA.

---

## F. ACTIONS CONCRÈTES IMMÉDIATES

**À supprimer (410 Gone, sans redirection)**
```
/famous-cases-solved-by-private-investigator/          + 4 variantes
/how-private-investigator-conduct-surveillance/        + 4 variantes
/how-to-manage-risk-monitoring-security/               + 2 variantes
/project/assets-investigation/  /project/case-investigation/  /project/cctv-security/
/project/event-security/  /project/investigation-assets/  /project/security-consulting/
/category/uncategorized/
```

**À corriger dans le code actuel**

| Élément | Actuel | Cible |
|---|---|---|
| H1 home | Une agence de détectives avec 30 ans d'expérience | **Détective privé à Toulouse — Activ'Agence, 30 ans d'expérience** |
| Title home | Activ'Agence - Agence Détectives privés Toulouse | **Détective privé à Toulouse — Agence agréée CNAPS \| Activ'Agence** |
| H1 service entreprise | Enquête pour les entreprises | **Détective privé pour entreprises à Toulouse** |
| H1 service particulier | Enquête pour les particuliers | **Détective privé pour particuliers à Toulouse** |
| H1 `/moyens/` | *(absent)* | **Moyens d'investigation de notre agence de détectives à Toulouse** |
| `tel:` | `tel:05 61 57 17 33` | `tel:+33561571733` |
| E-mail | `activagence@free.fr` | `contact@activagencetoulouse.fr` |
| `og:image` | favicon 236×219 | visuel dédié 1200×630 |
| Liens sociaux | `https://www.facebook.com/` | vraies URLs ou suppression |
| Copyright | 2025 | année dynamique |
| Texte | « Bienvenue chez Ativ'Agence » | « Activ'Agence » |

**Liens internes à ajouter immédiatement** (ancres descriptives, avec trailing slash) :
- Home → `/service/detective-enquete-entreprise/` — ancre « enquêtes pour entreprises à Toulouse »
- Home → `/service/detective-enquete-particulier/` — ancre « enquêtes pour particuliers »
- Home → `/moyens/` — ancre « nos moyens d'investigation »
- Service entreprise ↔ service particulier — lien croisé contextuel
- Chaque page → `/contact/` — ancre « demander un premier échange confidentiel »
- Chaque page → 3 liens externes d'autorité (CNAPS, Legifrance art. 9 CPC, service-public.fr)

---

## G. GRILLE DE SYNTHÈSE (§18 — obligatoire)

| Élément | Observation | Priorité | Action |
|---|---|---|---|
| **Technique** | 3,4 Mo d'assets, image LCP de 1,4 Mo, HTTP/1.1, 53 CSS + 20 JS, 0 WebP, 0 lazy, 346 Ko de JS inutile | 🔴 CRITIQUE | WebP + purge plugins en Phase 0, socle Next.js en Phase 1 |
| **Architecture** | 8 pages FR utiles sur 27 indexables ; 19 pages démo Lorem ipsum ; `/blog/` en 404 | 🔴 CRITIQUE | 410 sur les démos, puis 7 silos (~40 pages) |
| **Silo** | Aucun silo. Deux pages service isolées | 🟢 OPPORTUNITÉ | Construire les 7 silos (cf. `SEO_MASTER_ACTIVAGENCE.md`) |
| **Page pilier** | Home à 741 mots, H1 sans mot-clé ni ville, pas de `LocalBusiness` | 🔴 CRITIQUE | Réécrire H1/title, 1 500+ mots, JSON-LD local |
| **Pages business** | 605 et 698 mots de listes non développées, absentes du sitemap | 🟠 IMPORTANT | Porter à 1 500+ mots, une prestation = une section |
| **Maillage** | 0 lien externe, ancres vides, 301 sur tout le menu, 19 pages orphelines | 🟠 IMPORTANT | Trailing slash, 3+ liens contextuels, 3+ liens externes E-E-A-T |
| **Sémantique** | Aucun H1 ne combine service + ville ; zéro requête de motif couverte ; suivi limité à 9 mots-clés | 🔴 CRITIQUE | Réécriture Hn + création des pages motif + suivi élargi à 60-80 termes |
| **Cannibalisation** | Aucune entre pages FR ; duplication caractérisée sur 13 pages démo | 🔴 CRITIQUE | 410 Gone. Cloisonnement d'intention à appliquer dès la refonte |
| **Conversion** | Aucun formulaire, aucun avis, e-mail `@free.fr`, CNAPS en footer, `tel:` cassé | 🔴 CRITIQUE | Formulaire + rappel discret + réassurance CNAPS et confidentialité en évidence |
| **Backlinks** | Non mesuré (pas d'accès index) ; 0 lien sortant, 0 actif linkable | 🟢 OPPORTUNITÉ | 1 actif linkable/trimestre + listicles locaux (double effet SEO/GEO) |
| **GEO / LLM** | Crawlers IA autorisés (par défaut) ; entité faible, contenu non citable, Bing non instrumenté | 🔴 CRITIQUE | Entité + `LocalBusiness` + `FAQPage` + Bing Webmaster Tools |

---

## H. CE QU'IL FAUT RETENIR

Trois choses, dans cet ordre :

1. **Le site ne perd pas des positions à cause de la technique — il n'a jamais eu la surface pour en gagner.** 8 pages contre 57 à 145 chez les concurrents directs. Aucune correction technique ne compense un écart pareil.

2. **19 pages de Lorem ipsum anglais, dont 13 dupliquées entre elles, plafonnent l'évaluation du site.** C'est la correction la moins chère et la plus rentable du dossier : une heure de travail.

3. **La refonte React est le bon véhicule, mais le contenu et l'entité locale sont le vrai moteur.** Un site Next.js parfait avec 8 pages restera en position 35. Le plan de silos, la fiche Google Business Profile et le flux d'avis pèsent plus lourd que le framework.

**Prochaine étape recommandée** : exécuter la Phase 0 sur le WordPress actuel (≈ 17 h, effet immédiat et transférable), pendant que la refonte se construit sur la base de `SEO_MASTER_ACTIVAGENCE.md`.

---

## Sources de la veille (§12)

- [Local SEO Ranking Factors 2026 — PinMeTo](https://www.pinmeto.com/blog/local-seo-ranking-factors-2026/)
- [Local SEO Statistics 2026 — Digital Applied](https://www.digitalapplied.com/blog/local-seo-statistics-2026-data-points)
- [Local SEO & Google Business Profile Guide 2026 — Outpace SEO](https://outpaceseo.com/article/local-seo-gbp/)
- [Google March 2026 Core Update: Winners, Losers & Analysis — Amsive](https://www.amsive.com/insights/seo/google-march-2026-core-update-winners-losers-analysis/)
- [March 2026 Core Update: Content Quality Winners & Losers — Digital Applied](https://www.digitalapplied.com/blog/march-2026-core-update-content-quality-winners-losers)
- [Generative Engine Optimization (GEO): The 2026 Guide — LLMrefs](https://llmrefs.com/generative-engine-optimization)
- [ChatGPT SEO & GEO 2026: 12 Tips To Get Cited — Yotpo](https://www.yotpo.com/blog/chatgpt-seo-geo-tips/)
- [GEO Statistics 2026 — Omnibound](https://www.omnibound.ai/blog/generative-engine-optimization-statistics)
- [SEO Best Practices 2026: What to Do & What to Avoid — Chatterbuzz](https://www.chatterbuzzmedia.com/blog/seo-practices-2026-dos-donts/)

---

*Audit réalisé selon le playbook Clickzou. Document jumeau : `SEO_MASTER_ACTIVAGENCE.md` (cadrage de la refonte React).*
