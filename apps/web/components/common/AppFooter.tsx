import React from "react";
import appLogo from "@/public/logo.jpg";
import { APP_DESCRIPTION, APP_NAME, LINKS } from "@/config/site";
import { FooterTwo } from "@components/common/FooterTwo";

export interface AppFooterProps {
}

const AppFooter = async ({ }: AppFooterProps) => {
   // const APP_DESCRIPTION = `${``} ${APP_NAME.replaceAll(` `, ``)}, ${``}`;

   const FOOTER_LINKS = {
      title: `Links`,
      links: [
         {
            title: `Features`,
            href: `/#features`,
         },
         {
            title: `Support`,
            href: `mailto:${LINKS.email}`,
         },
         {
            title: `Report`,
            href: `?report=true`,
         },
      ],
   }

   const FOOTER_LEGAL = {
      title: `Legal`,
      links: [
         {
            title: `Terms of Service`,
            href: `/tos`,
         },
         {
            title: `Privacy Policy`,
            href: `/privacy-policy`,
         },
         {
            title: `Cookie Policy`,
            href: `/cookie-policy`,
         },
      ]
   }

   return (
      <FooterTwo
         appDescription={APP_DESCRIPTION}
         appLogo={appLogo}
         appName={APP_NAME}
         links={LINKS}
         legal={FOOTER_LEGAL}
         socialLinks={{ ...LINKS, title: `Socials` }}
      />

   );
};

export default AppFooter;
