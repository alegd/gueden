/** @type {import("tailwindcss").Config } */
module.exports = {
  content: ['./node_modules/pliny/**/*.js', './src/**/*.{js,ts,jsx,tsx}', './data/**/*.mdx'],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem'
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#111827',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        },
        secondary: {
          DEFAULT: '#6b7280',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        }
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80'
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: '42rem',
            a: {
              color: '#000',
              textDecoration: 'underline',
              textDecorationColor: '#d1d5db',
              textUnderlineOffset: '3px',
              '&:hover': {
                textDecorationColor: '#000'
              },
              code: { color: '#111827' }
            },
            'h1,h2': {
              fontWeight: '500',
              letterSpacing: '-0.025em',
              color: '#000'
            },
            h3: {
              fontWeight: '500',
              color: '#000'
            },
            code: {
              color: '#111827',
              backgroundColor: '#f3f4f6',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
              '&::before': { content: 'none' },
              '&::after': { content: 'none' }
            }
          }
        },
        invert: {
          css: {
            a: {
              color: '#fff',
              textDecorationColor: '#374151',
              '&:hover': {
                textDecorationColor: '#fff'
              },
              code: { color: '#d1d5db' }
            },
            'h1,h2,h3,h4,h5,h6': {
              color: '#f3f4f6'
            },
            code: {
              color: '#f3f4f6',
              backgroundColor: '#1f2937'
            }
          }
        }
      })
    }
  }
};
