"use client";
import { TOASTS } from "@/config/toasts";
import { cn } from "@/lib/utils";
import { useBoolean } from "@hooks/useBoolean";
import { toast } from "@repo/ui";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { Fragment } from "react";
import { acceptAllCookies, declineCookieConsent } from "../actions";
import { CustomizePreferencesModal } from "./CookieConsentBannerClient";

export interface CookieConsentBannerClientTwoProps {
   cookiePreferences: Record<string, any>;
}

const cookieConsentMotionProps: MotionProps = {
   initial: { opacity: 0, translateX: -20 },
   animate: { opacity: 100, translateX: 0 },
   exit: { opacity: 0, translateX: -20 },
   transition: {
      duration: 0.2,
   },
};

const customizePrefsModalProps: MotionProps = {
   initial: { opacity: 0, translateY: 20 },
   animate: { opacity: 100, translateY: 0 },
   exit: { opacity: 0, translateY: 20 },
   transition: {
      duration: 0.2,
   },
};

const CookieConsentBannerClientTwo = ({
   cookiePreferences,
}: CookieConsentBannerClientTwoProps) => {
   const {
      status,
      execute: acceptAction,
      isExecuting,
   } = useAction(acceptAllCookies, {
      onSuccess: (res) => {
         if (res.data?.success) {
            setHideBanner(true);

            toast(TOASTS.ACCEPT_COOKIE_CONSENT_SUCCESS!);
         }
      },
   });

   const { isExecuting: declineExecuting } = useAction(declineCookieConsent, {
      onSuccess: (res) => {
         setHideBanner(true);
         setShowManagePrefsBanner(true);
      },
   });

   const [hideBanner, setHideBanner] = useBoolean(false);
   const [showManagePrefsBanner, setShowManagePrefsBanner] = useBoolean(false);

   return (
      <Fragment>
         <AnimatePresence>
            {!hideBanner && (
               <motion.section
                  {...cookieConsentMotionProps}
                  className={cn(
                     "fixed bottom-8 left-8 z-[1000] mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-neutral-900 md:flex md:items-center md:gap-x-4",
                     hideBanner && `!hidden`
                  )}
               >
                  <div className="flex items-center gap-x-4">
                     <span className="inline-flex shrink-0 rounded-lg bg-blue-100/80 p-2 text-amber-600 dark:bg-gray-800">
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 20 20"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M17.9803 8.5468C17.5123 8.69458 17.0197 8.7931 16.5271 8.7931C14.2118 8.76847 12.3399 6.89655 12.3153 4.58128C12.3153 4.13793 12.3892 3.69458 12.537 3.27586C11.9951 2.68473 11.6995 1.92118 11.6995 1.13301C11.6995 0.812808 11.7488 0.492611 11.8473 0.172414C11.2315 0.0738918 10.6158 0 10 0C4.48276 0 0 4.48276 0 10C0 15.5172 4.48276 20 10 20C15.5172 20 20 15.5172 20 10C20 9.77833 20 9.55665 19.9754 9.33498C19.2611 9.26108 18.5468 8.99015 17.9803 8.5468ZM4.58128 7.31527C6.30542 7.31527 6.30542 10.0246 4.58128 10.0246C2.85714 10.0246 2.61084 7.31527 4.58128 7.31527ZM6.05912 15.7635C4.08867 15.7635 4.08867 12.8079 6.05912 12.8079C8.02956 12.8079 8.02956 15.7635 6.05912 15.7635ZM9.01478 1.33005C10.7389 1.33005 10.7389 4.28571 9.01478 4.28571C7.29064 4.28571 7.04434 1.33005 9.01478 1.33005ZM10.2463 8.84237C11.7241 8.84237 11.7241 10.8128 10.2463 10.8128C8.76848 10.8128 9.01478 8.84237 10.2463 8.84237ZM11.9704 16.9458C10.4926 16.9458 10.4926 14.9754 11.9704 14.9754C13.4483 14.9754 13.202 16.9458 11.9704 16.9458ZM16.6503 13.1034C15.4187 13.1034 15.4187 11.133 16.6503 11.133C17.8818 11.133 17.8818 13.1034 16.6503 13.1034Z"
                              fill="currentColor"
                           />
                        </svg>
                     </span>
                     <p className="text-sm leading-5 text-gray-600 dark:text-gray-300">
                        {`We use cookies to ensure that we give you the best experience on our website.`}
                        <Link
                           href="/cookie-policy"
                           className="ml-1 text-amber-600 hover:underline"
                        >
                           Read our cookie policy.
                        </Link>
                     </p>
                  </div>
                  <div className="mt-6 flex shrink-0 items-center gap-x-4 lg:mt-0">
                     <button
                        onClick={(_) => {
                           setHideBanner(true);
                           setShowManagePrefsBanner(true);
                        }}
                        className="w-1/2 text-xs text-gray-800 underline transition-colors duration-300 hover:text-gray-600 focus:outline-none dark:text-white dark:hover:text-gray-400 md:w-auto"
                     >
                        Cookie Settings
                     </button>

                     <button
                        disabled={isExecuting}
                        onClick={(_) => acceptAction(undefined)}
                        className="flex w-1/2 items-center gap-2 rounded-lg bg-gray-800 px-4 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none md:w-auto"
                     >
                        {isExecuting ? (
                           <Fragment>
                              <Loader2 size={14} className={`animate-spin`} />
                              Accepting ...
                           </Fragment>
                        ) : (
                           `Accept All Cookies`
                        )}
                     </button>
                  </div>
               </motion.section>
            )}
         </AnimatePresence>
         <AnimatePresence>
            {showManagePrefsBanner && (
               <CustomizePreferencesModal
                  onBack={() => {
                     setShowManagePrefsBanner(false);
                     setHideBanner(false);
                  }}
                  hideBanner={() => setHideBanner(true)}
                  open={showManagePrefsBanner}
                  cookiePreferences={cookiePreferences}
                  {...customizePrefsModalProps}
               />
            )}
         </AnimatePresence>
      </Fragment>
   );
};

export default CookieConsentBannerClientTwo;
