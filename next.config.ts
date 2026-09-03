import type { NextConfig } from "next";

/**
 * Regle SEO_MASTER_ACTIVAGENCE §4 : trailing slash obligatoire partout.
 *
 * Le plan de migration (§8) — 301 des 8 URL conservees et 410 des 19 pages de
 * demonstration — est traite dans src/proxy.ts et non ici : le proxy s'execute
 * avant la normalisation du trailing slash, ce qui evite les chaines a deux sauts
 * sur les anciennes URL sans slash final.
 */
const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
