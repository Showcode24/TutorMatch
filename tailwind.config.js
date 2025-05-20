/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#013a63",
          foreground: "hsl(var(--primary-foreground))",
          50: "#e6f0f5",
          100: "#cce0eb",
          200: "#99c2d7",
          300: "#66a3c3",
          400: "#3385af",
          500: "#013a63",
          600: "#012e4f",
          700: "#01233b",
          800: "#001728",
          900: "#000c14",
        },
        secondary: {
          DEFAULT: "#c7f9cc",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#f7fef8",
          100: "#eefdf0",
          200: "#ddfbe2",
          300: "#c7f9cc",
          400: "#8af294",
          500: "#4deb5c",
          600: "#1dd42e",
          700: "#16a023",
          800: "#126c1b",
          900: "#0b3810",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "24px",
      },
      fontFamily: {
        poppins: ["Poppins-Regular"],
        "poppins-semibold": ["Poppins-SemiBold"],
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
