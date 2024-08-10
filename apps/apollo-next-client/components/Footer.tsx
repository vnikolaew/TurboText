import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/favicon.png";

export interface FooterProps {
}

const Footer = ({}: FooterProps) => {
   return (
      <section className={`w-full px-24 py-12 mt-24 border-t border-neutral-800`}>
         <div className={`flex items-center justify-between w-full`}>
            <Link href={`/`}>
               <Image className={`rounded-full shadow-md`} height={40} width={40} src={logo} alt={`logo`} />
            </Link>
            <div>Socials</div>
         </div>
      </section>
   );
};

export default Footer;