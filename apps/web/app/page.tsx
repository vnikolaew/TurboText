"use client";
import { Button } from "@repo/ui";
import { signIn, signOut, useSession } from "next-auth/react";
import { SignedIn, SignedOut } from "@components/common/Auth";
import TypingEditor from "@app/_components/TypingEditor";
import { LogOut } from "lucide-react";

export default function Home() {
   const session = useSession();

   return (
      <div
         className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-16 sm:p-20 text-2xl w-full">
         <SignedIn>
            <span>Start typing!</span>
            <TypingEditor />
            <Button onClick={_ => signOut()} className={`px-8 rounded-lg items-center gap-2`} variant={`secondary`}>
               <LogOut size={18} />
               Sign out
            </Button>
         </SignedIn>

         <SignedOut>
            <Button onClick={() => signIn(`google`)} className={`px-8 rounded-lg`} variant={`secondary`}>Sign
               in</Button>
         </SignedOut>
      </div>
   );
}
