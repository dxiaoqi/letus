/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
            // 颜色预设
            colors: {
              'primary': '#3490dc',
              'secondary': '#ffed4a',
              'danger': '#e3342f',
            },
            // 字体预设
            fontFamily: {
              'sans': ['Roboto', 'Arial', 'sans-serif'],
              'serif': ['Merriweather', 'serif'],
            },
            // 尺寸预设
            spacing: {
              '1': '8px',
              '2': '12px',
              '3': '16px',
              '4': '24px',
              '5': '32px',
              '6': '48px',
            },
    },
  }, 
  darkMode: "class",
  plugins: [],
}
