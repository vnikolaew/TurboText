"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { Button } from "@repo/ui";
import { TextCursor } from "lucide-react";

export interface PaceCaretSectionProps {
}

const PaceCaretSection = ({}: PaceCaretSectionProps) => {
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <TextCursor className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Pace caret
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               Displays a second caret that moves at constant speed. The 'average' option averages the speed of last 10 results. The 'daily' option takes the highest speed of the last 24 hours.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <Button className={`flex-1`}>Off</Button>
            <Button className={`flex-1`}>Avg</Button>
            <Button className={`flex-1`}>
               Pb
            </Button>
            <Button className={`flex-1`}>
               Last
            </Button>
            <Button className={`flex-1`}>
               Daily
            </Button>
            <Button className={`flex-1`}>
               Custom
            </Button>
         </div>
      </SettingLayout>
   );
};

export default PaceCaretSection;