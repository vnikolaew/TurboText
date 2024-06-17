import TypingPage from "@components/editor/TypingPage";
import WithUserLoading from "@app/_components/WithUserLoading";
import WithInitialState from "@components/editor/WithInitialState";
import WithTransition from "@components/common/WithTransition";
import SignInButton from "@components/buttons/SignInButton";
import { auth } from "@auth";
import { ServerSignedOut } from "@components/common/Auth.server";
import EditorToolbar from "@components/editor/toolbar/EditorToolbar";
import PressKeyLabel from "@components/editor/PressKeyLabel";
import { xprisma } from "@repo/db";

export default async function Home() {
   const session = await auth();

   let user;
   if (!session?.user) user = null;
   else {
      let dbUser = await xprisma.user.findUnique({
         where: { id: session?.user?.id ?? `` },
         include: { configuration: true },
      });
      if (!dbUser) user = null;
      else {
         const { updatePassword, verifyPassword, ...rest } = dbUser;
         user = rest;
      }
   }

   const authenticated = !!session?.user;

   const main = (
      <WithTransition
         key={`home`}
         initial={{ opacity: 100 }}
         animate={{ opacity: 100 }}
         transition={{ duration: 1000, delay: 0.3 }}
         exit={{ opacity: 100 }}
         className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-16 sm:p-20 text-2xl w-full">
         <div className={`flex flex-col w-full items-center gap-2`}>
            <EditorToolbar />
            <PressKeyLabel />
         </div>
         <WithInitialState user={user!} />
         <TypingPage />
         <ServerSignedOut>
            <SignInButton />
         </ServerSignedOut>
      </WithTransition>
   );

   return main;

   return authenticated ? (
      <WithUserLoading>
         {main}
      </WithUserLoading>
   ) : main;
}
