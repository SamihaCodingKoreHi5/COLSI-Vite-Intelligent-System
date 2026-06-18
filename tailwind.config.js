/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(var(--primary) / <alpha-value>)",
        "on-primary": "hsl(var(--on-primary) / <alpha-value>)",
        "primary-container": "hsl(var(--primary-container) / <alpha-value>)",
        "on-primary-container": "hsl(var(--on-primary-container) / <alpha-value>)",
        
        "secondary": "hsl(var(--secondary) / <alpha-value>)",
        "on-secondary": "hsl(var(--on-secondary) / <alpha-value>)",
        "secondary-container": "hsl(var(--secondary-container) / <alpha-value>)",
        "on-secondary-container": "hsl(var(--on-secondary-container) / <alpha-value>)",
        
        "tertiary": "hsl(var(--tertiary) / <alpha-value>)",
        "on-tertiary": "hsl(var(--on-tertiary) / <alpha-value>)",
        "tertiary-container": "hsl(var(--tertiary-container) / <alpha-value>)",
        "on-tertiary-container": "hsl(var(--on-tertiary-container) / <alpha-value>)",
        
        "error": "hsl(var(--error) / <alpha-value>)",
        "on-error": "hsl(var(--on-error) / <alpha-value>)",
        "error-container": "hsl(var(--error-container) / <alpha-value>)",
        "on-error-container": "hsl(var(--on-error-container) / <alpha-value>)",
        
        "background": "hsl(var(--background) / <alpha-value>)",
        "on-background": "hsl(var(--on-background) / <alpha-value>)",
        
        "surface": "hsl(var(--surface) / <alpha-value>)",
        "on-surface": "hsl(var(--on-surface) / <alpha-value>)",
        "surface-variant": "hsl(var(--surface-variant) / <alpha-value>)",
        "on-surface-variant": "hsl(var(--on-surface-variant) / <alpha-value>)",
        
        "outline": "hsl(var(--outline) / <alpha-value>)",
        "outline-variant": "hsl(var(--outline-variant) / <alpha-value>)",
        
        "surface-container-lowest": "hsl(var(--surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "hsl(var(--surface-container-low) / <alpha-value>)",
        "surface-container": "hsl(var(--surface-container) / <alpha-value>)",
        "surface-container-high": "hsl(var(--surface-container-high) / <alpha-value>)",
        "surface-container-highest": "hsl(var(--surface-container-highest) / <alpha-value>)",
        "surface-bright": "hsl(var(--surface-bright) / <alpha-value>)",
        "surface-dim": "hsl(var(--surface-dim) / <alpha-value>)",
        "surface-tint": "hsl(var(--surface-tint) / <alpha-value>)",
      },
      borderRadius: {
        "DEFAULT": "12px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "40px",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Outfit", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Public Sans", "sans-serif"]
      },
      boxShadow: {
        "premium": "0 10px 40px -10px rgba(0,0,0,0.08)",
        "soft": "0 4px 20px -5px rgba(0,0,0,0.05)"
      }
    },
  },
  plugins: [],
}

