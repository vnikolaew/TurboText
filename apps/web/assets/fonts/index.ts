import localFont from "next/font/local";
import {
   Atkinson_Hyperlegible,
   Comfortaa,
   Courier_Prime,
   Fira_Code,
   IBM_Plex_Mono,
   IBM_Plex_Sans,
   Inconsolata,
   Itim,
   JetBrains_Mono,
   Lalezar,
   Lato,
   Lexend_Deca,
   Montserrat,
   Noto_Naskh_Arabic,
   Nunito,
   Open_Sans,
   Oxygen,
   Roboto,
   Roboto_Mono,
   Source_Code_Pro,
   Titillium_Web,
   Ubuntu,
   Ubuntu_Mono,
} from "next/font/google";
import { FONT_FAMILIES } from "@lib/consts";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

export const sfMono = localFont({ src: "./SFMono.otf", variable: "--font-mono" });

export const atkinsonHyperlegible = Atkinson_Hyperlegible({
   subsets: ["latin"],
   weight: ["400"],
   variable: "--font-mono",
});

export const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const oxygen = Oxygen({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const courierPrime = Courier_Prime({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const itim = Itim({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const notoNaskhArabic = Noto_Naskh_Arabic({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const nunito = Nunito({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const lalezar = Lalezar({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const titilliumWeb = Titillium_Web({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const lato = Lato({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });
export const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });


export const FONTS_MAP: Record<(typeof FONT_FAMILIES)[number], NextFontWithVariable> = {
   "Atkinson Hyperlegible": atkinsonHyperlegible,
   "CommitMono": sfMono,

   "IBM Plex Sans": ibmPlexSans,
   "Lexend Deca": lexendDeca,
   Oxygen: oxygen,
   "Ubuntu Mono": ubuntuMono,
   "Boon (‘nel)": null!,
   Courier: courierPrime,
   Inconsolata: inconsolata,
   Montserrat: montserrat,
   "Roboto Mono": robotoMono,
   "Cascadia Mono": null!,
   "Fira Code": firaCode,
   Itim: itim,
   "Noto Naskh Arabic": notoNaskhArabic,
   Comfortaa: comfortaa,
   Georgia: null!,
   "JetBrains Mono": jetBrainsMono,
   Nunito: nunito,
   "Source Code Pro": sourceCodePro,
   Helvetica: null!,
   Lalezar: lalezar,
   "Open Dyslexic": null!,
   "Titillium Web": titilliumWeb,
   "IBM Plex Mono": ibmPlexMono,
   Lato: lato,
   Ubuntu: ubuntu,
   "SF Mono": sfMono
};

