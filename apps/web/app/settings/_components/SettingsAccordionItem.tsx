"use client";
import { AccordionContent, AccordionItem, AccordionPrimitive, AccordionTrigger } from "@repo/ui";
import React, { PropsWithChildren } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@lib/utils";

export interface SettingsAccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, PropsWithChildren {
   name: string;
   value: string;
}

const SettingsAccordionItem = ({ value, children, name, className, ...props }: SettingsAccordionItemProps) => {
   return (
      <AccordionItem id={value} key={value} className={cn(`w-full border-secondary`)} value={value} {...props}>
         <AccordionTrigger
            className={`text-secondary group hover:!opacity-90 transition-all duration-200 hover:!no-underline gap-4 items-center !justify-start !w-full`}
            withIcon={false}>
            <ChevronRight
               className={`group-data-[state=open]:!rotate-90 transition-transform duration-200`}
               size={32} />
            <span className={`text-3xl`}>{name}</span>
         </AccordionTrigger>
         <AccordionContent className={`flex flex-col gap-8 items-start mt-4 mb-12`}>
            {children}
         </AccordionContent>
      </AccordionItem>
   );
};

export default SettingsAccordionItem;