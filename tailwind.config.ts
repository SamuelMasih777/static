import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: '#67B0E1',
        customText: '#FE204F',
        customPurple: '#9749CC',
        customRed: '#F9355C',
        customYellow: '#FFAB23',
        customGreen: '#1ACD3E',
        customCard: '#FE4D74',
        customGray: '#F2F1F0',
        customGrayBg: '#F5F5F5',
        customPinkBg: '#FFDFE6',
        customBlueBg: '#DAEDFF',
        customYellowBg: '#F8E1AC',
        customGreenBg: '#CCFFCD',
        customCircularPurple: '#0089BB',
        customCircularViolet: '#66276D',
        customCircularGreen: '#117A34',
        customCircularIndigo: '#BB009C',
        customIconBg: '#EAE9FC',
        customRectangleBg: "#CECCFF",
        customBg1: "#0089BB",
        customBg2: "#B00093",
        customBg3: "#DF012E"
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // Add Poppins as the primary sans font
      },
    },
  },
  plugins: [],
} satisfies Config;
