"use client";
import { TypingFlags } from "@atoms/consts";
import { togglePunctuationAtom, typingFlagsAtom } from "@atoms/flags";
import { CommandItem } from "@repo/ui";
import { useAtomValue } from "jotai";
import { useSetAtom } from "jotai/index";
import { AtSign, Check, ChevronRight } from "lucide-react";
import { Fragment } from "react";

export interface PunctuationOptionsProps {}

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

const PunctuationOptions = ({}: PunctuationOptionsProps) => {
   const togglePunctuation = useSetAtom(togglePunctuationAtom);
   const flags = useAtomValue(typingFlagsAtom);
   const punctuation = (flags & TypingFlags.PUNCTUATION) === 1;

   return (
      <Fragment>
         {OPTIONS.map(({ value, label }, index) => (
            <CommandItem
               value={`punctuation-${label}`}
               onSelect={(_) => {
                  if (value === punctuation) return;
                  togglePunctuation();
               }}
               key={label}
               className={`flex w-full cursor-pointer items-center gap-6`}
            >
               <div className={`flex items-center gap-1`}>
                  <AtSign size={10} />
                  <span className={`text-xs`}>Punctuation</span>
                  <ChevronRight size={10} />
               </div>
               <span>{label}</span>
               {value === punctuation && (
                  <span className={`text-xs font-bold`}>
                     <Check size={12} className={`text-neutral-300`} />
                  </span>
               )}
            </CommandItem>
         ))}
      </Fragment>
   );
};

export default PunctuationOptions;
