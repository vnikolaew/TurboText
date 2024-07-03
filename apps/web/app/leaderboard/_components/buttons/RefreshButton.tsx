"use client"
import React from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";

export interface RefreshButtonProps {
}

const RefreshButton = ({}: RefreshButtonProps) => {
   const router = useRouter()
   return (
      <Button onClick={_ => router.refresh()} variant={`ghost`} className={`!rounded-xl`} size={`icon`}>
         <RefreshCw size={18} className={`text-white`} />
      </Button>
   );
};

export default RefreshButton;