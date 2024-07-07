import { flipColorsAtom } from "@atoms/user";
import { CommandItem } from "@repo/ui";
import { useAtom } from "jotai";
import { Check, ChevronRight, Circle } from "lucide-react";
import { Fragment } from "react";

export interface FlipTestColorsOptionsProps {}

const OPTIONS = [
   {
      value: true,
      label: "on",
   },
   {
      value: false,
      label: "off",
   },
];

const FlipTestColorsOptions = ({}: FlipTestColorsOptionsProps) => {
   const [flipColors, setFlipColors] = useAtom(flipColorsAtom);

   return (
      <Fragment>
         {OPTIONS.map(({ value, label }, index) => (
            <CommandItem
               value={`flip-test-colors-${label}`}
               onSelect={(_) => setFlipColors(value)}
               key={label}
               className={`flex w-full cursor-pointer items-center gap-6`}
            >
               <div className={`flex items-center gap-1`}>
                  <Circle size={8} />
                  <span className={`text-xs`}>Flip test colors</span>
                  <ChevronRight size={10} />
               </div>
               <span>{label}</span>
               {value === flipColors && (
                  <span className={`text-xs font-bold`}>
                     <Check size={12} className={`text-neutral-300`} />
                  </span>
               )}
            </CommandItem>
         ))}
      </Fragment>
   );
};

export default FlipTestColorsOptions;
