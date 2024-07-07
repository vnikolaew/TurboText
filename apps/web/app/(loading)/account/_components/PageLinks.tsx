"use client";
import { scrollToElement } from "@lib/utils";
import { Activity, AreaChart, Play, Swords } from "lucide-react";
import React from "react";

export interface PageLinksProps {}

const PageLinks = ({}: PageLinksProps) => {
   return (
      <div className={`mt-8 flex items-center gap-8`}>
         <PageLink Icon={Activity} href={`activity`} label={`Activity`} />
         <PageLink Icon={AreaChart} href={`stats`} label={`Stats`} />
         <PageLink Icon={Play} href={`runs`} label={`Runs`} />
         <PageLink Icon={Swords} href={`challenges`} label={`Challenges`} />
      </div>
   );
};

const PageLink = ({
   label,
   Icon,
   href,
}: {
   label: string;
   href: string;
   Icon: React.FC<{ size: number | string | undefined }>;
}) => {
   return (
      <div
         onClick={(_) => scrollToElement(href)}
         className={`flex cursor-pointer items-center gap-2 rounded-lg bg-transparent p-3 !px-6 text-xs transition-all duration-200 hover:!bg-secondary-bg hover:!opacity-90`}
      >
         <Icon size={20} />
         <span>{label} </span>
      </div>
   );
};

export default PageLinks;
