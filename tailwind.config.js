/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        danger: "var(--color-danger)",
        background: "var(--color-background)",
        backgroundSecondary: "var(--color-background-secondary)",
        dark: "var(--text-dark)",
        translucent: "var(--color-background-translucent)"
      },
      borderRadius: {
        standard: "var(--border-radius)"
      }
    }
  },
  plugins: []
};
