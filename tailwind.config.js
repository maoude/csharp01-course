/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all relevant files in src
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: Add Inter font
      },
      // If you were using @tailwindcss/typography or @tailwindcss/aspect-ratio
      // you would configure them here or ensure they are installed.
      // For now, basic styles are in index.css or inline.
    },
  },
  plugins: [
    // require('@tailwindcss/typography'), // Uncomment if you install and want to use the typography plugin
    // require('@tailwindcss/aspect-ratio'), // Uncomment if you install and want to use the aspect-ratio plugin
  ],
}
