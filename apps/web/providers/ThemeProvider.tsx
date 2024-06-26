"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const THEMES = [
   `light`,
   `dark`,
   `nighthawk`,
   `theme-2`,
   `theme-3`,
   `theme-4`,
   `frost`,
]

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
