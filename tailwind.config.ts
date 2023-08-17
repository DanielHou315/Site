import type { Config } from 'tailwindcss'

const shuiFontFace = {
  '@font-face': [
    {
      fontFamily: 'Shui',
      src: `url('/static/index/Shui.otf') format('opentype')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  ],
};

const config: Config = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'shui': ['Shui', 'sans'], // Use your desired name in place of 'custom'.
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'none': 'blur(0)',
        'blur': 'blur(4px)',
        'more-blur': 'blur(8px)',
        'most-blur': 'blur(12px)',
     }
    },
  },
  plugins: [
    function ({ addBase }: {addBase:Function}) {
      addBase(shuiFontFace);
    },
  ],
}
export default config
