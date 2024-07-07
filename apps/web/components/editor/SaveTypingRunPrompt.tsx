"use client";
import { Alert, AlertDescription, Button } from "@repo/ui";
import { motion } from "framer-motion";
import { RocketIcon } from "lucide-react";

export interface SaveTypingRunPromptProps {
   onSave?: () => void;
   loading?: boolean;
   onDismiss?: () => void;
}

const MotionAlertDesc = motion(AlertDescription);

const SaveTypingRunPrompt = ({
   onSave,
   onDismiss,
   loading,
}: SaveTypingRunPromptProps) => {
   return (
      <Alert key={`alert`} className={`flex !items-center gap-4 !border-none`}>
         <div>
            <RocketIcon className="h-6 w-6 text-accent" />
         </div>
         <MotionAlertDesc
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className={`animate-alert text-base !text-main`}
         >
            Would you like to save your typing run?
         </MotionAlertDesc>
         <div className={`flex flex-1 items-center justify-end gap-4`}>
            <Button
               disabled={loading}
               onClick={(_) => onSave?.()}
               className={`rounded-lg !bg-accent !px-8 !text-main`}
               variant={`default`}
            >
               Yes
            </Button>
            <Button
               disabled={loading}
               onClick={(_) => onDismiss?.()}
               className={`rounded-lg !px-8`}
               variant={`destructive`}
            >
               No
            </Button>
         </div>
      </Alert>
   );
};

export default SaveTypingRunPrompt;
