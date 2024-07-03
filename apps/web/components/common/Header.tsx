"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { signOut } from "next-auth/react";
import { SignedIn, SignedOut } from "./Auth";
import { Crown, LogIn, LogOut, Settings, Swords } from "lucide-react";
import { APP_NAME } from "@config/site";
import UserAvatarDropdown from "@/components/common/UserAvatarDropdown";
import { Button, Skeleton } from "@repo/ui";
import RocketLogo from "@components/icons/RocketLogo";
import { Lexend_Deca } from "next/font/google";
import { useAtomValue } from "jotai";
import { userDataLoadingAtom } from "@atoms/user";
import UserNotificationsButton from "./side-modal/notifications/UserNotificationsButton";
import SearchInput from "@app/_components/search/SearchInput";

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
         className={`sticky top-0 w-full border-b border-secondary-bg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 !py-3 !z-10`}>
         <div className={`container flex h-14 max-w-screen-2xl items-center !w-4/5 justify-between`}>
            <nav className={`flex flex-1 items-center space-x-2 lg:space-x-2`}>
               <Link href={`/`} className={`flex items-center gap-3`}>
                  <RocketLogo className={`w-8 h-8 fill-accent `} />
                  <div className={`flex flex-col items-start gap-0`}>
                     <span
                        className={`text-lg !test-gradient drop-shadow-lg !font-semibold ${lexend.className} uppercase  !text-main`}>
                        {APP_NAME}
                     </span>
                     <span className={`text-secondary text-xs text-nowrap`}>Accelerate your typing speed</span>
                  </div>
               </Link>
               <Button className={`hover:!bg-transparent group text-secondary !ml-8`} variant={`ghost`} asChild>
                  <Link title={`Settings`} href={`/settings`} className={`flex items-center gap-2 `}>
                     <Settings className={`group-hover:!text-accent transition-colors duration-200`} size={16} /> </Link>
               </Button>
               <Button className={`hover:!bg-transparent text-secondary group`} variant={`ghost`} asChild>
                  <Link title={`Leaderboard`} href={`/leaderboard`} className={`flex items-center gap-2`}>
                     <Crown className={`fill-secondary stroke-secondary group-hover:!fill-accent group-hover:!stroke-accent`} size={16} />
                  </Link>
               </Button>
               <Button className={`hover:!bg-transparent text-secondary group`} variant={`ghost`} asChild>
                  <Link title={`Challenge`} href={`/_lobby`} className={`flex items-center gap-2`}>
                     <Swords className={`fill-secondary stroke-secondary group-hover:!fill-accent group-hover:!stroke-accent`} size={16} />
                  </Link>
               </Button>
            </nav>
            <SearchInput />
            <div className={`flex flex-1 items-center justify-end space-x-8`}>
               <SignedIn>
                  <div className={`flex items-center gap-6`}>
                     <div id={`user-avatar`}>
                        {userDataLoading ? (
                           <Skeleton className={`h-12 w-12 rounded-full bg-neutral-700`} />
                        ) : <UserAvatarDropdown />}
                     </div>
                     <UserNotificationsButton />
                     {userDataLoading ? (
                        <Skeleton className={`h-8 w-32 rounded-lg bg-neutral-700`} />
                     ) : (
                        <Button
                           className={`px-4 gap-2 rounded-lg !py-2 !h-fit !text-main`}
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