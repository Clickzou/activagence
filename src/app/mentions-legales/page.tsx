import type { Metadata } from "next";
import { AGENCE, SITE } from "@/data/agence";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";

const PATH = "/mentions-legales/";

// noindex : page legale, exclue du sitemap (regle §4 du master).
export const metadata: Metadata = pageMetadata({
  title: "Mentions légales — Activ'Agence Toulouse",
  description: "Éditeur, hébergeur, propriété intellectuelle et données personnelles du site activagencetoulouse.fr.",
  path: PATH,
  noindex: true,
});

export default function MentionsLegales() {
  return (
    <>
      <PageHeader
        titre="Mentions légales"
        chapo="Informations relatives à l'éditeur et à l'hébergeur du site activagencetoulouse.fr."
        filAriane={[{ nom: "Mentions légales", path: PATH }]}
      />

      <div className="anim-entree mx-auto max-w-prose px-4 py-16 leading-relaxed text-nuit-700 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-nuit [&_p]:mt-4">
        <h2>Édition du site</h2>
        <p>
          Le site {AGENCE.nom} (ci-après «&nbsp;le Site&nbsp;»), accessible à l&apos;adresse{" "}
          {SITE.url}/, est édité par la société {AGENCE.nom}, {AGENCE.societe.forme} au
          capital de {AGENCE.societe.capital}, dont le siège social est situé{" "}
          {AGENCE.adresse.rue}, {AGENCE.adresse.codePostal} {AGENCE.adresse.ville} —{" "}
          {AGENCE.telephone}, {AGENCE.email} — {AGENCE.societe.rcs}.
        </p>
        <p>
          Directeur de la publication&nbsp;: {AGENCE.societe.directeurPublication}.
          <br />
          Contact&nbsp;: {AGENCE.telephone} — {AGENCE.email}
        </p>

        <h2>Autorisations d&apos;exercice</h2>
        <p>
          L&apos;activité de recherches privées est réglementée par le Livre VI du Code de la
          sécurité intérieure. {AGENCE.nom} exerce sous les autorisations délivrées par le
          CNAPS&nbsp;: {AGENCE.cnaps.join(" et ")}.
        </p>
        <p>
          Conformément à l&apos;article L.612-14 du Code de la sécurité intérieure,
          l&apos;autorisation d&apos;exercice ne confère aucun caractère officiel à
          l&apos;entreprise ou aux personnes qui en bénéficient. Elle n&apos;engage en aucune
          manière la responsabilité des pouvoirs publics.
        </p>

        <h2>Hébergement</h2>
        <p>
          Le Site est hébergé par {AGENCE.hebergeur.nom}, dont le siège social est situé{" "}
          {AGENCE.hebergeur.adresse}, joignable au {AGENCE.hebergeur.telephone}.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Toutes les marques, photographies, textes, commentaires, illustrations, images
          animées ou non, séquences vidéo, sons, ainsi que toutes les applications
          informatiques qui pourraient être utilisées pour faire fonctionner le Site et plus
          généralement tous les éléments reproduits ou utilisés sur le Site sont protégés par
          les lois en vigueur au titre de la propriété intellectuelle.
        </p>
        <p>
          Ils sont la propriété pleine et entière de l&apos;Éditeur ou de ses partenaires,
          sauf mentions particulières. Toute reproduction, représentation, utilisation ou
          adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y
          compris les applications informatiques, sans l&apos;accord préalable et écrit de
          l&apos;Éditeur, sont strictement interdites. Le fait pour l&apos;Éditeur de ne pas
          engager de procédure dès la prise de connaissance de ces utilisations non
          autorisées ne vaut pas acceptation desdites utilisations et renonciation aux
          poursuites.
        </p>
        <p>
          Seule l&apos;utilisation pour un usage privé dans un cercle de famille est
          autorisée&nbsp;; toute autre utilisation est constitutive de contrefaçon et/ou
          d&apos;atteinte aux droits voisins, sanctionnées par le Code de la propriété
          intellectuelle.
        </p>

        <h2>Liens hypertextes</h2>
        <p>
          Le Site peut contenir des liens hypertextes donnant accès à d&apos;autres sites web
          édités et gérés par des tiers et non par l&apos;Éditeur. L&apos;Éditeur ne pourra
          être tenu responsable directement ou indirectement dans le cas où lesdits sites
          tiers ne respecteraient pas les dispositions légales.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les informations transmises via le formulaire de contact sont utilisées dans le
          seul but de répondre à votre demande. Elles ne sont ni cédées, ni louées, ni
          communiquées à des tiers. Conformément au Règlement général sur la protection des
          données, vous disposez d&apos;un droit d&apos;accès, de rectification et de
          suppression des données vous concernant, que vous pouvez exercer en écrivant à{" "}
          {AGENCE.email}.
        </p>
      </div>
    </>
  );
}
