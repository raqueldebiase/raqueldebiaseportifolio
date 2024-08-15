import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centraliza o container horizontalmente
        padding: {
          DEFAULT: '1rem', // Padding padrão
        },
        screens: {
          'sm': '640px',  // Máximo de 640px para telas pequenas
          'md': '768px',  // Máximo de 768px para telas médias
          'lg': '1024px', // Máximo de 1024px para telas grandes
          'xl': '1280px', // Máximo de 1280px para telas extra grandes
          '2xl': '1536px', // Máximo de 1536px para telas ainda maiores
        }
      },
      colors: {
        primary: '#1F1F1F',
        highlight: '#EEE8EA'
      },
      opacity: {
        30: '0.3',
        50: '0.5',
        70: '0.7',
      },
      borderWidth: {
        '1': '0.1rem', // Adiciona uma borda de 1px
      },
    },
  },
  plugins: [],
};

export default config;
