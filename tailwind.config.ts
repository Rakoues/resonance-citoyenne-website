import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        orange: {
          DEFAULT: '#FF6B35',
          light: '#FF8C5C',
          dark: '#E55A24',
        },
        terracotta: '#E07A5F',
        honey: '#F4A261',

        // Secondary Colors
        forest: '#2A9D8F',
        sky: '#457B9D',

        // Neutrals
        cream: '#F8F4F0',
        charcoal: '#3D405B',
        gray: {
          warm: '#81858C',
          light: '#E5E5E5',
        },

        // Semantic Colors
        success: '#2E7D32',
        warning: '#F57C00',
        error: '#D32F2F',
        info: '#0288D1',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
        accent: ['var(--font-caveat)', 'cursive'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['36px', { lineHeight: '1.3' }],
        'h3': ['28px', { lineHeight: '1.4' }],
        'h4': ['24px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        'xxs': '4px',
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'modal': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 24px rgba(0, 0, 0, 0.16)',
        'orange-glow': '0 0 0 3px rgba(255, 107, 53, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
