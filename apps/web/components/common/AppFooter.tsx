"use client"
import React from "react";
import { APP_DESCRIPTION, APP_NAME, LINKS } from "@/config/site";
import { FooterTwo, FooterTwoProps } from "@components/common/FooterTwo";
import RocketLogo from "@components/icons/RocketLogo";
import { Cookie, Info, Lock, Mail, ReceiptText } from "lucide-react";
import { useAtomValue } from "jotai";
import { themeAtom } from "@atoms/user";

export interface AppFooterProps {
}

const AppFooter = ({}: AppFooterProps) => {
   const theme = useAtomValue(themeAtom)

   const FOOTER_LINKS: FooterTwoProps["links"] = {
      links: [
         {
            title: `About`, href: `/about`,
            icon: <Info size={12} />,
         },
         {
            title: `Contact`, href: `?contact=true`,
            icon: <Mail size={12} />,
         },
      ], title: `LINKS`,
   };

   const FOOTER_LEGAL = {
      title: `Legal`,
      links: [
         {
            title: `Terms of Service`,
            href: `/tos`,
            icon: <ReceiptText className={``} size={12} />,
         },
         {
            title: `Privacy Policy`,
            href: `/privacy-policy`,
            icon: <Lock className={` group-hover:!stroke-accent transition-colors duration-100`}
                        size={12} />,
         },
         {
            title: `Cookie Policy`,
            href: `/cookie-policy`,
            icon: <Cookie size={12} />,
         },
      ],
   };

   return (
      <FooterTwo
         appDescription={APP_DESCRIPTION}
         appLogo={
            <RocketLogo className={`w-10 h-10 fill-accent`} />
         }
         appName={APP_NAME}
         theme={theme}
         links={FOOTER_LINKS}
         legal={FOOTER_LEGAL}
         socialLinks={{ ...LINKS, title: `Socials` }}
      />

   );
};

export default AppFooter;
