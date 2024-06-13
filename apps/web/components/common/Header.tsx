"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { signOut } from "next-auth/react";
import { SignedIn } from "./Auth";
import { LogOut } from "lucide-react";
import { APP_NAME } from "@config/site";
import { useBoolean } from "@hooks/useBoolean";
import { usePathname } from "next/navigation";
import { cn } from "lib/utils";
import UserAvatarDropdown from "@/components/common/UserAvatarDropdown";
import { Button } from "@repo/ui";
import { InteractiveLink } from "@components/common/InteractiveLink";
import RocketLogo from "@components/icons/RocketLogo";
import { Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({
   weight: ["400"],
   subsets: ["latin"],
});

export interface NavbarProps {
}

export interface InteractiveHeaderLinkProps {
   href: string;
   icon: ReactNode;
   title: ReactNode;
}

const InteractiveHeaderLink = ({ icon, title, href }: InteractiveHeaderLinkProps) => {
   const pathname = usePathname();
   return (
      <InteractiveLink
         className={cn(`text-base inline-flex gap-2 items-center !text-neutral-300`,
            pathname === href && `font-semibold !test-gradient`)}
         underlineClassname={cn(`bg-neutral-300`,
            pathname === href && `bg-neutral-300`)
         }
         href={href}>
         {icon}
         {title}
      </InteractiveLink>
   );
};

/**
 * The site's header, containing the Navbar as well.
 * @constructor
 */
const Header = ({}: NavbarProps) => {
   const pathname = usePathname();
   const [signInModalOpen, setSignInModalOpen] = useBoolean();

   return (
      <header
         className={`sticky top-0 w-full border-b border-neutral-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 !py-3 !z-10`}>
         <div className={`container flex h-14 max-w-screen-2xl items-center !w-3/4 justify-between`}>
            <nav className={`flex flex-1 items-center space-x-4 lg:space-x-6`}>
               <Link href={`/`} className={`flex items-center gap-3`}>
                  <RocketLogo className={`fill-neutral-300 w-8 h-8 fill-amber-500 shadow-md`} />
                  <span
                     className={`font-semibold text-lg !test-gradient drop-shadow-lg !font-semibold ${lexend.className} uppercase`}>{APP_NAME}</span>
               </Link>
            </nav>
            <div className={`flex-1 text-center flex items-center gap-8 justify-center`}>
            </div>
            <div className={`flex flex-1 items-center justify-end space-x-8`}>
               <SignedIn>
                  <div className={`flex items-center gap-4`}>
                     <div>
                        <UserAvatarDropdown />
                     </div>
                     <Button
                        className={`px-4 gap-2 rounded-lg !py-2 !h-fit`}
                        onClick={_ => signOut({ redirect: true, callbackUrl: `/` })} variant={"ghost"}>
                        <LogOut size={14} />
                        {`Sign out`}
                     </Button>
                  </div>
               </SignedIn>
            </div>
         </div>
      </header>
   );
};

export default Header;