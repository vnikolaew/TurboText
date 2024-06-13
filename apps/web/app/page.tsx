"use client";
import { Button } from "@repo/ui";
import { signIn } from "next-auth/react";
import { SignedOut } from "@components/common/Auth";
import TypingEditor from "@components/editor/TypingEditor";

export default function Home() {
   return (
      <div
         className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-16 sm:p-20 text-2xl w-full">
         <span>Start typing!</span>
         <TypingEditor />

         <SignedOut>
            <Button onClick={() => signIn(`google`)} className={`px-8 rounded-lg`} variant={`secondary`}>Sign
               in</Button>
         </SignedOut>
      </div>
   );
}
