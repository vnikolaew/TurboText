"use client";
import React from "react";
import { Activity, AreaChart, Play, Swords } from "lucide-react";
import { scrollToElement } from "@lib/utils";

export interface PageLinksProps {
}

const PageLinks = ({}: PageLinksProps) => {
   return (
      <div className={`flex items-center gap-8`}>
         <PageLink Icon={Activity} href={`activity`} label={`Activity`} />
         <PageLink Icon={AreaChart} href={`stats`} label={`Stats`} />
         <PageLink Icon={Play} href={`runs`} label={`Runs`} />
         <PageLink Icon={Swords} href={`challenges`} label={`Challenges`} />
      </div>
   );
};

const PageLink = ({ label, Icon, href }: { label: string, href: string, Icon: React.FC<{ size: number | string | undefined }> }) => {
   return (
      <div
         onClick={_ => scrollToElement(href)}
         className={`flex text-xs items-center gap-2 hover:!opacity-90 transition-all duration-200 cursor-pointer p-3 !px-6 rounded-lg bg-transparent hover:!bg-secondary-bg`}>
         <Icon size={20} />
         <span>{label} </span>
      </div>
   );
};

export default PageLinks;