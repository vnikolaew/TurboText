import React from "react";
import { APP_DESCRIPTION, APP_NAME, LINKS } from "@/config/site";
import { FooterTwo } from "@components/common/FooterTwo";
import RocketLogo from "@components/icons/RocketLogo";

export interface AppFooterProps {
}

const AppFooter = async ({}: AppFooterProps) => {
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
   };

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
      ],
   };

   return (
      <FooterTwo
         appDescription={APP_DESCRIPTION}
         appLogo={
            <RocketLogo className={`w-10 h-10 fill-amber-500`} />
         }
         appName={APP_NAME}
         links={LINKS}
         legal={FOOTER_LEGAL}
         socialLinks={{ ...LINKS, title: `Socials` }}
      />

   );
};

export default AppFooter;
