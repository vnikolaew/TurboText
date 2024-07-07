"use client";
import { TOASTS } from "@/config/toasts";
import { cn } from "@/lib/utils";
import { Button, Card, CardContent, CardFooter, CardHeader, Separator, Switch, toast } from "@repo/ui";
import { motion, MotionProps } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { useState } from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import { updateCookiePreferences } from "../actions";
import { match } from "ts-pattern";

interface CustomizePreferencesModalProps extends MotionProps {
   onBack: () => void;
   hideBanner: () => void;
   open: boolean;
   cookiePreferences: Record<string, any>;
}

export interface CookiePreferences {
   Necessary: boolean;
   Statistics: boolean;
   Functionality: boolean;
   Marketing: boolean;
}

export const CustomizePreferencesModal = ({
                                             open,
                                             onBack,
                                             cookiePreferences,
                                             hideBanner,
                                             ...props
                                          }: CustomizePreferencesModalProps) => {
   const [preferences, setPreferences] = useState<CookiePreferences>({
      Necessary: cookiePreferences?.[`Necessary`] === true,
      Statistics: cookiePreferences?.[`Statistics`] === true,
      Functionality: cookiePreferences?.[`Functionality`] === true,
      Marketing: cookiePreferences?.[`Marketing`] === true,
   });

   const {
      status,
      isExecuting,
      execute: handleSavePreferencesAction,
   } = useAction(updateCookiePreferences, {
      onSuccess: (res) => {
         if (res.data?.success) {
            onBack?.();
            hideBanner?.();

            toast(TOASTS.CHANGE_COOKIE_PREFERENCES_SUCCESS!);
         }
      },
   });

   // @ts-ignore
   return (
      <motion.div
         className={cn(
            `fixed !bottom-8 !left-[30%] !z-20 !mx-auto hidden !w-2/5 items-center justify-between gap-2 rounded-xl shadow-md`,
            open && `!flex !flex-col`,
         )}
         {...props}
      >
         <Card className={`w-full !bg-neutral-900 p-4 !text-white`}>
            <CardHeader className={`flex !flex-row items-center gap-2 p-0`}>
               <Button
                  onClick={(_) => {
                     onBack?.();
                  }}
                  variant={`ghost`}
                  className={`!h-fit !w-fit rounded-full p-2`}
               >
                  <ArrowLeft size={18} />
               </Button>
               <h2 className={`!mt-0 text-base font-semibold`}>Title</h2>
            </CardHeader>
            <Separator className={`mx-auto my-2 w-full !bg-neutral-300`} />
            <CardContent className={`mt-4`}>
               <div className={`grid grid-cols-2 gap-4 gap-x-12`}>
                  <PreferenceSwitch
                     label={`Necessary`}
                     checked={preferences.Necessary}
                     onCheckedChange={(value) =>
                        setPreferences({ ...preferences, Necessary: value })
                     }
                  />

                  <PreferenceSwitch
                     label={`Statistics`}
                     checked={preferences.Statistics}
                     onCheckedChange={(value) =>
                        setPreferences({ ...preferences, Statistics: value })
                     }
                  />

                  <PreferenceSwitch
                     label={`Functionality`}
                     checked={preferences.Functionality}
                     onCheckedChange={(value) =>
                        setPreferences({ ...preferences, Functionality: value })
                     }
                  />
                  <PreferenceSwitch
                     label={`Marketing`}
                     checked={preferences.Marketing}
                     onCheckedChange={(value) =>
                        setPreferences({ ...preferences, Marketing: value })
                     }
                  />
               </div>
            </CardContent>
            <CardFooter
               className={`!-mx-4 !-mb-4 mt-2 flex items-center justify-between bg-neutral-100 p-2 px-4`}
            >
               <Button
                  asChild
                  className={`items-center gap-1 !text-sm !text-neutral-400`}
                  variant={`link`}
               >
                  <Link href={`/service/privacy`}>
                     Learn more{" "}
                     <ExternalLink
                        className={`ml-1 text-neutral-400`}
                        size={12}
                     />
                  </Link>
               </Button>
               <Button
                  disabled={isExecuting}
                  onClick={(_) => handleSavePreferencesAction(preferences)}
                  size={`sm`}
                  className={`rounded-md !px-8 shadow-md`}
                  variant={`default`}
               >
                  {match(isExecuting)
                     .with(true, _ => (
                        <LoadingSpinner text={`Saving ...`} />
                     )).otherwise(_ => `Save and submit`)}
               </Button>
            </CardFooter>
         </Card>
      </motion.div>
   );
};

interface PreferenceSwitchProps {
   label: string;
   checked: boolean;
   onCheckedChange: (checked: boolean) => void;
}

const PreferenceSwitch = ({
                             label,
                             onCheckedChange,
                             checked,
                          }: PreferenceSwitchProps) => {
   return (
      <div className={`flex items-center justify-between`}>
         <h2 className={`text-sm font-semibold`}>{label}</h2>
         <Switch
            checked={checked}
            onCheckedChange={onCheckedChange}
            className={`h-6`}
         />
      </div>
   );
};
