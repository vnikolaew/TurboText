"use client";
import { AccordionContent, AccordionItem, AccordionPrimitive, AccordionTrigger } from "@repo/ui";
import React, { PropsWithChildren } from "react";
import { ChevronRight } from "lucide-react";

export interface SettingsAccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, PropsWithChildren {
   name: string;
   value: string;
}

const SettingsAccordionItem = ({ value, children, name, ...props }: SettingsAccordionItemProps) => {
   return (
      <AccordionItem id={value} key={value} className={`w-full`} value={value} {...props}>
         <AccordionTrigger
            className={`text-neutral-500 group hover:!text-neutral-300 transition-colors duration-200 hover:!no-underline gap-4 items-center !justify-start !w-full`}
            withIcon={false}>
            <ChevronRight
               className={`group-data-[state=open]:!rotate-90 transition-transform duration-200`}
               size={32} />
            <span className={`text-3xl`}>{name}</span>
         </AccordionTrigger>
         <AccordionContent className={`flex flex-col gap-8 items-start mt-4`}>
            {children}
         </AccordionContent>
      </AccordionItem>
   );
};

export default SettingsAccordionItem;