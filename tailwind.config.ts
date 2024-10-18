import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        bold: "600",
        semibold: "500",
        medium: "400",
        regular: "300",
      },
    },
  },
  plugins: [],
};
export default config;
