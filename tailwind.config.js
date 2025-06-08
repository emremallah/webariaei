/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // برای App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // اگر از Pages Router استفاده می‌کنی
      "./components/**/*.{js,ts,jsx,tsx}", // برای کامپوننت‌ها
    ],
    theme: {
      extend: {
        fontFamily: {
          vazir: ['Vazir', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  