/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primario: "var(--color-primario)",
        secundario: "var(--color-secundario)",
        peligro: "var(--color-peligro)",
        fondo: "var(--color-fondo)",
        "texto-oscuro": "var(--texto-oscuro)",
        translucido: "var(--color-fondo-translucido)"
      },
      borderRadius: {
        estandar: "var(--borde-radio)"
      }
    }
  },
  plugins: []
};
