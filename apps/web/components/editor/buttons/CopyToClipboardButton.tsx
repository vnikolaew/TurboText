"use client";
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import React from "react";
import html2canvas from "html2canvas";
import { Image } from "lucide-react";

export interface CopyToClipboardButtonProps {
}

const CopyToClipboardButton = ({}: CopyToClipboardButtonProps) => {
   const copyScreenshotToClipboard = () => {
      html2canvas(document.getElementById(`editor`)!)
         .then(canvas => {
            canvas.toBlob(blob => {ww
               if (blob) {
                  window.navigator?.clipboard.write([
                     new ClipboardItem({
                        "image/png": blob,
                     }),
                  ]);
               }
            }, `image/png`);
         });
   };
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button onClick={copyScreenshotToClipboard} variant={`ghost`} size={`icon`}>
                  <Image className={`!text-main`} size={18} />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
               Copy screenshot to clipboard
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default CopyToClipboardButton;