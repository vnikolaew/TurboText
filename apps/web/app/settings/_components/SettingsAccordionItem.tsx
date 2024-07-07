"use client";
import { cn } from "@lib/utils";
import {
   AccordionContent,
   AccordionItem,
   AccordionPrimitive,
   AccordionTrigger,
} from "@repo/ui";
import { ChevronRight } from "lucide-react";
import React, { PropsWithChildren } from "react";

export interface SettingsAccordionItemProps
   extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
      PropsWithChildren {
   name: string;
   value: string;
}

const SettingsAccordionItem = ({
   value,
   children,
   name,
   className,
   ...props
}: SettingsAccordionItemProps) => {
   return (
      <AccordionItem
         id={value}
         key={value}
         className={cn(`w-full border-secondary`)}
         value={value}
         {...props}
      >
         <AccordionTrigger
            className={`group !w-full items-center !justify-start gap-4 text-secondary transition-all duration-200 hover:!no-underline hover:!opacity-90`}
            withIcon={false}
         >
            <ChevronRight
               className={`transition-transform duration-200 group-data-[state=open]:!rotate-90`}
               size={32}
            />
            <span className={`text-3xl`}>{name}</span>
         </AccordionTrigger>
         <AccordionContent
            className={`mb-12 mt-4 flex flex-col items-start gap-8`}
         >
            {children}
         </AccordionContent>
      </AccordionItem>
   );
};

export default SettingsAccordionItem;
