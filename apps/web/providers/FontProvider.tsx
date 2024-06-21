import React, { PropsWithChildren, useMemo } from "react";
import { userConfigAtom } from "@atoms/user";
import { selectAtom } from "jotai/utils";

export interface FontProviderProps extends PropsWithChildren {
}


const FontProvider = ({ children }: FontProviderProps) => {
   const sAtom = useMemo(() => selectAtom(userConfigAtom, userConfig => userConfig?.font_family), []);
   return (
      <div className={``}>
         {children}
      </div>
   );
};

export default FontProvider;