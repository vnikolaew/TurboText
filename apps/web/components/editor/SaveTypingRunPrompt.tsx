"use client";
import React from "react";
import { motion } from "framer-motion";
import { Alert, AlertDescription, Button } from "@repo/ui";
import { RocketIcon } from "lucide-react";

export interface SaveTypingRunPromptProps {
   onSave?: () => void;
   loading?: boolean;
   onDismiss?: () => void;
}

const MotionAlertDesc = motion(AlertDescription);

const SaveTypingRunPrompt = ({ onSave, onDismiss, loading }: SaveTypingRunPromptProps) => {
   return (
      <Alert
         key={`alert`} className={`flex !items-center gap-4 !border-none`}>
         <div>
            <RocketIcon className="h-6 w-6 text-accent" />
         </div>
         <MotionAlertDesc
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .3 }}
            exit={{ opacity: 0 }}
            className={`text-base !text-main animate-alert`}>
            Would you like to save your typing run?
         </MotionAlertDesc>
         <div className={`flex-1 flex justify-end items-center gap-4`}>
            <Button
               disabled={loading}
               onClick={_ => onSave?.()}
               className={`!px-8 rounded-lg !bg-accent !text-main`} variant={`default`}>Yes</Button>
            <Button
               disabled={loading}
               onClick={_ => onDismiss?.()}
               className={`!px-8 rounded-lg`} variant={`destructive`}>
               No
            </Button>
         </div>
      </Alert>
   );
};

export default SaveTypingRunPrompt;