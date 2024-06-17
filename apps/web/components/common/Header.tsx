"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { signIn, signOut } from "next-auth/react";
import { SignedIn, SignedOut } from "./Auth";
import { LogIn, LogOut, Settings, Timer } from "lucide-react";
import { APP_NAME } from "@config/site";
import { usePathname } from "next/navigation";
import { cn } from "lib/utils";
import UserAvatarDropdown from "@/components/common/UserAvatarDropdown";
import { Button, Skeleton } from "@repo/ui";
import { InteractiveLink } from "@components/common/InteractiveLink";
import RocketLogo from "@components/icons/RocketLogo";
import { Lexend_Deca } from "next/font/google";
import { useAtomValue } from "jotai";
import { userDataLoadingAtom } from "@atoms/user";

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
   const userDataLoading = useAtomValue(userDataLoadingAtom);

   return (
      <header
         className={`sticky top-0 w-full border-b border-neutral-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 !py-3 !z-10`}>
         <div className={`container flex h-14 max-w-screen-2xl items-center !w-3/4 justify-between`}>
            <nav className={`flex flex-1 items-center space-x-4 lg:space-x-6`}>
               <Link href={`/`} className={`flex items-center gap-3`}>
                  <RocketLogo className={`w-8 h-8 fill-amber-500 shadow-md`} />
                  <span
                     className={`text-lg !test-gradient drop-shadow-lg !font-semibold ${lexend.className} uppercase`}>{APP_NAME}</span>
               </Link>
               <Button variant={`ghost`} asChild>
                  <Link title={`Settings`} href={`/settings`} className={`flex items-center gap-2 !ml-12`}>
                     <Settings size={16} />
                     <span
                        className={`text-base drop-shadow-lg !font-semibold ${lexend.className} `}>
                     Settings
                  </span>
                  </Link>
               </Button>
               <Button variant={`ghost`} asChild>
                  <Link title={`Settings`} href={`/_timer`} className={`flex items-center gap-2 !ml-12`}>
                     <Timer size={16} />
                     <span
                        className={`text-base drop-shadow-lg !font-semibold ${lexend.className} `}>
                     Timer
                  </span>
                  </Link>
               </Button>
            </nav>
            <div className={`flex-1 text-center flex items-center gap-8 justify-center`}>
            </div>
            <div className={`flex flex-1 items-center justify-end space-x-8`}>
               <SignedIn>
                  <div className={`flex items-center gap-6`}>
                     <div>
                        {userDataLoading ? (
                           <Skeleton className={`h-12 w-12 rounded-full bg-neutral-700`} />
                        ) : <UserAvatarDropdown />}
                     </div>
                     {userDataLoading ? (
                        <Skeleton className={`h-8 w-32 rounded-lg bg-neutral-700`} />
                     ) : (
                        <Button
                           className={`px-4 gap-2 rounded-lg !py-2 !h-fit`}
                           onClick={_ => signOut({ redirect: true, callbackUrl: `/` })} variant={"ghost"}
                        >
                           <LogOut size={14} />
                           {`Sign out`}
                        </Button>
                     )}
                  </div>
               </SignedIn>
               <SignedOut>
                  <Button
                     className={`px-4 gap-2 rounded-lg !py-2 !h-fit`}
                     onClick={_ => signIn(`google`)} variant={"secondary"}
                  >
                     <LogIn size={14} />
                     {`Sign in`}
                  </Button>
               </SignedOut>
            </div>
         </div>
      </header>
   );
};

export default Header;