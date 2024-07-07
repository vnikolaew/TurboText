import { getThemeVariable } from "@app/settings/_components/theme/_components/ThemeButton";
import { themeAtom } from "@atoms/user";
import { hslToHex } from "@lib/utils";
import { useAtomValue } from "jotai/index";

export function useThemeVariable(name: string) {
   const theme = useAtomValue(themeAtom);
   const color = hslToHex(getThemeVariable(theme, name));

   return color;
}
