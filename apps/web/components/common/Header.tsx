"use client";
import UserAvatarDropdown from "@/components/common/UserAvatarDropdown";
import SearchInput from "@app/_components/search/SearchInput";
import { userDataLoadingAtom } from "@atoms/user";
import RocketLogo from "@components/icons/RocketLogo";
import { APP_NAME } from "@config/site";
import { Button, Skeleton } from "@repo/ui";
import { useAtomValue } from "jotai";
import { Crown, LogIn, LogOut, Settings, Swords } from "lucide-react";
import { signOut } from "next-auth/react";
import { Lexend_Deca } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import { SignedIn, SignedOut } from "./Auth";
import UserNotificationsButton from "./side-modal/notifications/UserNotificationsButton";

const lexend = Lexend_Deca({
   weight: ["400"],
   subsets: ["latin"],
});

export interface NavbarProps {}

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
         className={`sticky top-0 !z-10 w-full border-b border-secondary-bg bg-background/95 !py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60`}
      >
         <div
            className={`container flex h-14 !w-4/5 max-w-screen-2xl items-center justify-between`}
         >
            <nav className={`flex flex-1 items-center space-x-2 lg:space-x-2`}>
               <Link href={`/`} className={`flex items-center gap-3`}>
                  <RocketLogo className={`h-8 w-8 fill-accent`} />
                  <div className={`flex flex-col items-start gap-0`}>
                     <span
                        className={`!test-gradient text-lg !font-semibold drop-shadow-lg ${lexend.className} uppercase !text-main`}
                     >
                        {APP_NAME}
                     </span>
                     <span className={`text-nowrap text-xs text-secondary`}>
                        Accelerate your typing speed
                     </span>
                  </div>
               </Link>
               <Button
                  className={`group !ml-8 text-secondary hover:!bg-transparent`}
                  variant={`ghost`}
                  asChild
               >
                  <Link
                     title={`Settings`}
                     href={`/settings`}
                     className={`flex items-center gap-2`}
                  >
                     <Settings
                        className={`transition-colors duration-200 group-hover:!text-accent`}
                        size={16}
                     />{" "}
                  </Link>
               </Button>
               <Button
                  className={`group text-secondary hover:!bg-transparent`}
                  variant={`ghost`}
                  asChild
               >
                  <Link
                     title={`Leaderboard`}
                     href={`/leaderboard`}
                     className={`flex items-center gap-2`}
                  >
                     <Crown
                        className={`fill-secondary stroke-secondary group-hover:!fill-accent group-hover:!stroke-accent`}
                        size={16}
                     />
                  </Link>
               </Button>
               <Button
                  className={`group text-secondary hover:!bg-transparent`}
                  variant={`ghost`}
                  asChild
               >
                  <Link
                     title={`Challenge`}
                     href={`/lobby`}
                     className={`flex items-center gap-2`}
                  >
                     <Swords
                        className={`fill-secondary stroke-secondary group-hover:!fill-accent group-hover:!stroke-accent`}
                        size={16}
                     />
                  </Link>
               </Button>
            </nav>
            <SearchInput />
            <div className={`flex flex-1 items-center justify-end space-x-8`}>
               <SignedIn>
                  <div className={`flex items-center gap-6`}>
                     <div id={`user-avatar`}>
                        {userDataLoading ? (
                           <Skeleton
                              className={`h-12 w-12 rounded-full bg-neutral-700`}
                           />
                        ) : (
                           <UserAvatarDropdown />
                        )}
                     </div>
                     <UserNotificationsButton />
                     {userDataLoading ? (
                        <Skeleton
                           className={`h-8 w-32 rounded-lg bg-neutral-700`}
                        />
                     ) : (
                        <Button
                           className={`!h-fit gap-2 rounded-lg !py-2 px-4 !text-main`}
                           onClick={(_) =>
                              signOut({ redirect: true, callbackUrl: `/` })
                           }
                           variant={"ghost"}
                        >
                           <LogOut size={14} />
                           {`Sign out`}
                        </Button>
                     )}
                  </div>
               </SignedIn>
               <SignedOut>
                  <Button
                     className={`!h-fit gap-2 rounded-lg !py-2 px-4`}
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
