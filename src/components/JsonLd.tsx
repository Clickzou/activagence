/**
 * Injecte un graphe JSON-LD. Composant serveur : aucun cout cote client.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Le contenu vient exclusivement de nos propres modules, jamais d'une saisie utilisateur.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
