import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./4d4dish-wp-theme/**/*.php",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#98D66D",
          DEFAULT: "#76BC43",
          dark: "#5A9432",
        },
        secondary: {
          light: "#EF4BA7",
          DEFAULT: "#D60D7E",
          dark: "#A10A5F",
        },
        accent: {
          light: "#FBBF24",
          DEFAULT: "#F59E0B",
          dark: "#D97706",
        },
        background: "#FFFFFF",
        surface: "#F8FAFC",
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #76BC43 0%, #D60D7E 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
