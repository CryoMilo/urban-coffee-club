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
        primary: "var(--color-primary)", // Deep Espresso
        secondary: "var(--color-secondary)", // Light Latte
        accent: "var(--color-accent)", // Dark Mocha
        background: "var(--color-background)", // Pure White
        dark: "var(--color-dark)", // Rich Roast
        muted: "var(--color-muted)", // Mild Cocoa
        light: "var(--color-light)", // Light Foam
        soft: "var(--color-soft)", // Soft Cream

        // Additional Colors
        highlight: "var(--color-highlight)", // Coffee Bean Highlight
        warning: "var(--color-warning)", // Burnt Sienna for Alerts
        success: "var(--color-success)", // Olive Green for Success Messages
        info: "var(--color-info)", // Cool Slate for Info
        shadow: "var(--color-shadow)", // Dark Espresso Shadow

        // Complementary Tones
        cream: "var(--color-cream)", // Cream for Light Areas
        hazelnut: "var(--color-hazelnut)", // Warm Hazelnut
        caramel: "var(--color-caramel)", // Rich Caramel
        chocolate: "var(--color-chocolate)", // Dark Chocolate
        "foam-highlight": "var(--color-foam-highlight)", // Lightest Foam for Highlights
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
      backgroundImage: {
        "cup-sleeve-gradient":
          "linear-gradient(to right, #474747 0%, #737272 50.5%, #474747 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
