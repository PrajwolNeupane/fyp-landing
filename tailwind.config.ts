import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-halenoir)"],
      },
      colors: {
        secondary: "#253B90",
      },
      fontSize: {
        "4xl": "36px",
        "3xl": "32px",
        "2xl": "28px",
        xl: "24px",
        lg: "22px",
        md: "20px",
        base: "18px",
        sm: "17px",
        xs: "16px",
        "2xs": "15px",
        "3xs": "14px",
        "4xs": "13px",
      },
      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "500",
        regular: "400",
        light: "300",
      },
      screens: {
        xs: "300px",
        sm: "500px",
        xsm: "600px",
        md: "800px",
        mr: "900px",
        rg: "1000px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1600px",
        xxxl: "1800px",
      },
    },
  },
  plugins: [],
};
export default config;
