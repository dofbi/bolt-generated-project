/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
      ],
      theme: {
        extend: {
          colors: {
            'africa-primary': '#2C3E50',
            'africa-secondary': '#3498DB',
            'africa-accent': '#27AE60'
          }
        }
      },
      plugins: []
    };
