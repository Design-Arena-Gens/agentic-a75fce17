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
        primary: '#2D5F4F',
        secondary: '#90B8A8',
        accent: '#6B4E3D',
        background: '#F5F5F0',
        textPrimary: '#1A1A1A',
        textSecondary: '#6B6B6B',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'caption-sm': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      borderRadius: {
        'card': '20px',
        'button': '16px',
        'input': '12px',
        'chip': '8px',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0,0,0,0.08)',
      },
      spacing: {
        '18': '72px',
        '20': '80px',
      },
    },
  },
  plugins: [],
};
export default config;
