"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const THEMES = [
   `light`,
   `dark`,
   `theme-1`,
   `theme-2`
]

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
