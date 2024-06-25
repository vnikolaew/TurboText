"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { signOut } from "next-auth/react";
import { SignedIn, SignedOut } from "./Auth";
import { Bell, Crown, LogIn, LogOut, Settings } from "lucide-react";
import { APP_NAME } from "@config/site";
import UserAvatarDropdown from "@/components/common/UserAvatarDropdown";
import { Button, Skeleton } from "@repo/ui";
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
                     className={`text-lg !test-gradient drop-shadow-lg !font-semibold ${lexend.className} uppercase  !text-main`}>{APP_NAME}</span>
               </Link>
               <Button className={`hover:!bg-transparent text-secondary`} variant={`ghost`} asChild>
                  <Link title={`Settings`} href={`/settings`} className={`flex items-center gap-2`}>
                     <Settings size={16} />
                     <span
                        className={`text-base drop-shadow-lg !font-semibold`}>
                     Settings
                  </span>
                  </Link>
               </Button>
               <Button className={`hover:!bg-transparent text-secondary`} variant={`ghost`} asChild>
                  <Link title={`Leaderboard`} href={`/leaderboard`} className={`flex items-center gap-2`}>
                     <Crown className={`fill-secondary stroke-secondary `} size={16} />
                     <span
                        className={`text-base drop-shadow-lg !font-semibold`}>
                     Leaderboard
                  </span>
                  </Link>
               </Button>
            </nav>
            <div className={`flex-1 text-center flex items-center gap-4 justify-center`}>
            </div>
            <div className={`flex flex-1 items-center justify-end space-x-8`}>
               <SignedIn>
                  <div className={`flex items-center gap-6`}>
                     <div id={`user-avatar`}>
                        {userDataLoading ? (
                           <Skeleton className={`h-12 w-12 rounded-full bg-neutral-700`} />
                        ) : <UserAvatarDropdown />}
                     </div>
                     <div>
                        <Bell className={`text-secondary fill-secondary  hover:!fill-secondary transition-colors duration-200 hover:!text-neutral-300 cursor-pointer`} size={20} />
                     </div>
                     {userDataLoading ? (
                        <Skeleton className={`h-8 w-32 rounded-lg bg-neutral-700`} />
                     ) : (
                        <Button
                           className={`px-4 gap-2 rounded-lg !py-2 !h-fit !text-secondary`}
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
                     asChild
                      variant={"secondary"}
                  >
                     <Link href={`/login`}>
                        <LogIn size={14} />
                        {`Sign in`}
                     </Link>
                  </Button>
               </SignedOut>
            </div>
         </div>
      </header>
   );
};

export default Header;