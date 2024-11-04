/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-roboto)",
        secondary: "var(--font-lora)",
      },
      container: {
        center: true,
        padding: "3rem",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        dark: "var(--color-dark)",
        muted: "var(--color-muted)",
        light: "var(--color-light)",
        soft: "var(--color-soft)",
      },
      fontSize: {
        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1430px",
      },
      backgroundImage: {},
    },
  },
  darkMode: "class",
  plugins: [],
};
