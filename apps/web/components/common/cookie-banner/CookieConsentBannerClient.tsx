"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { updateCookiePreferences } from "../actions";
import { useAction } from "next-safe-action/hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { TOASTS } from "@/config/toasts";
import { Button, Card, CardContent, CardFooter, CardHeader, Separator, Switch, toast } from "@repo/ui";

interface CustomizePreferencesModalProps extends MotionProps {
   onBack: () => void,
   hideBanner: () => void,
   open: boolean,
   cookiePreferences: Record<string, any>
}

export interface CookiePreferences {
   Necessary: boolean,
   Statistics: boolean,
   Functionality: boolean,
   Marketing: boolean,
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
   console.log(`we are here!`);

   const { status, isExecuting, execute: handleSavePreferencesAction } = useAction(updateCookiePreferences, {
      onSuccess: res => {
         if (res.data?.success) {
            onBack?.();
            hideBanner?.();

            toast(TOASTS.CHANGE_COOKIE_PREFERENCES_SUCCESS!);
         }
      },
   });

   return (
      <motion.div
         className={
            cn(`fixed hidden !z-20 gap-2 items-center justify-between !w-2/5 !mx-auto !bottom-8 !left-[30%] rounded-xl shadow-md`,
               open && `!flex !flex-col`)} {...props}>
         <Card className={`w-full p-4 !bg-neutral-900 !text-white`}>
            <CardHeader className={`p-0 flex !flex-row items-center gap-2`}>
               <Button onClick={_ => {
                  onBack?.();
               }} variant={`ghost`} className={`rounded-full !w-fit !h-fit p-2`}>
                  <ArrowLeft size={18} />
               </Button>
               <h2 className={`!mt-0 text-base font-semibold`}>Title</h2>
            </CardHeader>
            <Separator className={`w-full mx-auto my-2 !bg-neutral-300`} />
            <CardContent className={`mt-4`}>
               <div className={`grid grid-cols-2 gap-4 gap-x-12`}>
                  <PreferenceSwitch
                     label={`Necessary`}
                     checked={preferences.Necessary}
                     onCheckedChange={value => setPreferences({ ...preferences, Necessary: value })} />

                  <PreferenceSwitch
                     label={`Statistics`}
                     checked={preferences.Statistics}
                     onCheckedChange={value => setPreferences({ ...preferences, Statistics: value })} />

                  <PreferenceSwitch
                     label={`Functionality`}
                     checked={preferences.Functionality}
                     onCheckedChange={value => setPreferences({ ...preferences, Functionality: value })} />
                  <PreferenceSwitch
                     label={`Marketing`}
                     checked={preferences.Marketing}
                     onCheckedChange={value => setPreferences({ ...preferences, Marketing: value })} />
               </div>
            </CardContent>
            <CardFooter className={`bg-neutral-100 mt-2 p-2 px-4 flex items-center justify-between !-mx-4 !-mb-4`}>
               <Button asChild className={`!text-neutral-400 !text-sm gap-1 items-center`} variant={`link`}>
                  <Link href={`/service/privacy`}>
                     Learn more <ExternalLink className={`ml-1 text-neutral-400 `} size={12} />
                  </Link>
               </Button>
               <Button
                  disabled={isExecuting}
                  onClick={_ => handleSavePreferencesAction(preferences)}
                  size={`sm`}
                  className={` rounded-md !px-8 shadow-md`} variant={`default`}>
                  {isExecuting ? (<LoadingSpinner text={`Saving ...`} />) : (
                     `Save and submit`
                  )}
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


const PreferenceSwitch = ({ label, onCheckedChange, checked }: PreferenceSwitchProps) => {
   return (
      <div className={`flex items-center justify-between`}>
         <h2 className={`font-semibold text-sm`}>{label}</h2>
         <Switch
            checked={checked}
            onCheckedChange={onCheckedChange}
            className={` h-6`} />
      </div>
   );

};