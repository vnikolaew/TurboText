import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
   safelist: [`animate-rainbow-bg`],
   darkMode: ["class"],
   content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "./providers/**/*.{ts,tsx}",
      "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
   ],
   prefix: "",
   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         gridTemplateColumns: {
            "13": "repeat(13, minmax(0, 1fr))",
         },
         fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
            mono: ["var(--font-mono)", ...fontFamily.mono],
         },
         colors: {
            border: "hsl(var(--border))",
            main: "hsl(var(--main))",
            accent: "hsl(var(--accent))",
            "secondary-bg": "hsl(var(--secondary-bg))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            // accent: {
            //    DEFAULT: "hsl(var(--accent))",
            //    foreground: "hsl(var(--accent-foreground))",
            // },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         keyframes: {
            "rainbow-bg": {
               "0%": { backgroundColor: "red" },
               "14%": { backgroundColor: "orange" },
               "28%": { backgroundColor: "yellow" },
               "42%": { backgroundColor: "green" },
               "57%": { backgroundColor: "blue" },
               "71%": { backgroundColor: "indigo" },
               "85%": { backgroundColor: "violet" },
               "100%": { backgroundColor: "red" },
            },
            "animate-alert": {
               "0%": { opacity: "50%" },
               "100%": { opacity: "100%" },
            },
            "accordion-down": {
               from: { height: "0" },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
            },
            meteor: {
               "0%": { transform: "rotate(215deg) translateX(0)", opacity: '100%' },
               "70%": { opacity: '100%' },
               "100%": {
                  transform: "rotate(215deg) translateX(-500px)",
                  opacity: '0%',
               },
            },
         },
         animation: {
            "rainbow-bg": "rainbow-bg 10s linear infinite",
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "alert": "animate-alert 2s ease-out alternate infinite",
            meteor: "meteor 5s linear infinite",
         },
      },
   },
   plugins: [require("tailwindcss-animate"),
      require('tailwind-scrollbar')
   ],
};
export default config;
