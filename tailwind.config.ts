import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Identite Activ'Agence : bleu nuit d'enquete + rouge du logo
        nuit: {
          DEFAULT: "#101822",
          800: "#16202C",
          700: "#1E2A38",
          600: "#2A3948",
        },
        ardoise: {
          400: "#7B8794",
          300: "#9AA5B1",
          200: "#CBD2D9",
          100: "#E4E7EB",
          50: "#F4F6F7",
        },
        // Rouge repris du logo Activ'Agence (#F80020), decline pour rester lisible :
        // 600 pour le texte sur fond clair, 300 pour le texte sur fond nuit.
        marque: {
          DEFAULT: "#E11030",
          600: "#B00C24",
          300: "#FF6B57",
        },
        // Couleur des boutons, choisie par le client le 2026-09-02.
        // Les boutons l'utilisent en depart de degrade vers `marque` : le blanc sur
        // #F9613D plat ne passe pas le contraste AA pour du texte de cette taille.
        cta: {
          DEFAULT: "#F9613D",
          600: "#D9431F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        carte: "0 18px 45px -22px rgba(16, 24, 34, 0.35)",
        flottant: "0 30px 70px -30px rgba(16, 24, 34, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
