"use client";
import React, { PropsWithChildren, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Switch, toast } from "@repo/ui";
import { useBoolean } from "@hooks/useBoolean";
import LoadingButton from "@components/common/LoadingButton";
import { useAction } from "next-safe-action/hooks";
import { TOASTS } from "@config/toasts";
import { updateCookiePreferences } from "@components/common/actions";
import { useAtom } from "jotai/index";
import { cookiePreferencesAtom } from "@atoms/user";

export interface UpdateCookiePreferencesModalProps extends PropsWithChildren {
}

const COOKIE_PREFS_CATEGORIES = [
   {
      label: `Necessary`,
      description: `Necessary cookies are essential for the website to function properly. These cookies ensure basic functionalities and security features of the website, anonymously. Without these cookies, the site wouldn't work properly and we wouldn't be able to provide the services you expect.`,
   },
   {
      label: `Statistics`,
      description: `Statistics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. These cookies allow us to measure and improve the performance of our site, ensuring a better user experience. They help us know which pages are the most and least popular and see how visitors move around the site.`,
   },
   {
      label: `Functionality`,
      description: `Functionality cookies enable the website to provide enhanced functionality and personalization. These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide more personal features. They can also be used to remember changes you have made to text size, fonts, and other parts of web pages that you can customize. If you do not allow these cookies, some of these services may not function properly.`,
   },
   {
      label: `Marketing`,
      description: `Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers. These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.`,
   },
];

const UpdateCookiePreferencesModal = ({ children }: UpdateCookiePreferencesModalProps) => {
   const [cookiePreferences, setCookiePreferences] = useAtom(cookiePreferencesAtom);
   const [value, setValue] = useState(``);
   const [open, setOpen] = useBoolean();
   const { execute, status, isExecuting } = useAction(updateCookiePreferences, {
      onSuccess: async res => {
         if (res.data?.success) {
            console.log(res);
            toast(TOASTS.CHANGE_COOKIE_PREFERENCES_SUCCESS);
         } else {
            toast(TOASTS.EDIT_USERNAME_FAILURE(res.error));
         }
         setOpen(false);
      },
   });

   function handleChangePrefs(_): void {
      execute(cookiePreferences)
   }

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogTrigger asChild>
            {children}
         </DialogTrigger>
         <DialogContent className={`z-[100] !bg-secondary-bg`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl`}>
                  Update cookie preferences
               </DialogTitle>
            </DialogHeader>
            <div className={`w-full flex flex-col items-start gap-4`}>
               {COOKIE_PREFS_CATEGORIES.map(({ label, description }) => (
                  <PreferenceSwitch
                     key={label}
                     onCheckedChange={_ => setCookiePreferences({
                        ...cookiePreferences,
                        [label]: !cookiePreferences[label],
                     })}
                     checked={cookiePreferences[label]!} description={description} label={label} />
               ))}
            </div>
            <DialogFooter className={`w-full !mt-2`}>
               <LoadingButton
                  onClick={handleChangePrefs}
                  loadingText={`Saving ...`}
                  loading={isExecuting}>
                  Accept selected
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

interface PreferenceSwitchProps {
   label: string;
   description?: string;
   checked: boolean;
   onCheckedChange: (checked: boolean) => void;
}

const PreferenceSwitch = ({ label, description, onCheckedChange, checked }: PreferenceSwitchProps) => {
   return (
      <div className={`w-full flex items-center justify-between gap-4`}>
         <div className={`flex flex-col gap-1 items-start mt-2`}>
            <h2 className={`text-xl`}>{label}</h2>
            <p className={`line-clamp-3 text-sm leading-tight text-secondary   `}>{description}</p>
         </div>
         <Switch
            checked={checked!}
            onCheckedChange={onCheckedChange}
            className={`h-6 !bg-accent data-[state=unchecked]:!bg-transparent`} />
      </div>
   );
};

export default UpdateCookiePreferencesModal;