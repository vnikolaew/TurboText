import TypingEditor from "@components/editor/TypingEditor";
import WithUserLoading from "@app/_components/WithUserLoading";
import WithInitialState from "@components/editor/WithInitialState";
import WithTransition from "@components/common/WithTransition";
import SignInButton from "@components/buttons/SignInButton";
import { auth } from "@auth";
import { ServerSignedOut } from "@components/common/Auth.server";
import EditorToolbar from "@components/editor/toolbar/EditorToolbar";

export default async function Home() {
   const session = await auth();
   const authenticated = !!session?.user;

   const main = (
      <WithTransition
         initial={{ opacity: 100 }}
         animate={{ opacity: 100 }}
         transition={{ duration: 1000, delay: 0.3 }}
         exit={{ opacity: 100 }}
         className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-16 sm:p-20 text-2xl w-full">
         <span>Start typing!</span>
         <EditorToolbar />
         <WithInitialState user={session?.user!} />
         <TypingEditor />

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
