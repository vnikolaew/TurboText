import WithInitialState from "@components/editor/WithInitialState";
import WithTransition from "@components/common/WithTransition";
import SignInButton from "@components/buttons/SignInButton";
import { ServerSignedOut } from "@components/common/Auth.server";
import EditorToolbar from "@components/editor/toolbar/EditorToolbar";
import PressKeyLabel from "@components/editor/PressKeyLabel";
import TypingEditor from "@components/editor/TypingEditor";
import OnRunFailed from "@components/editor/toasts/OnRunFailed";
import OnRunSaved from "@components/editor/toasts/OnRunSaved";
import { getUser } from "@app/(test)/_queries";

interface HomeProps {
}

export const dynamic = `force-dynamic`;

export const revalidate = 10;

export default async function Home({ }: HomeProps) {
   let user = await getUser();

   return (
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
         <TypingEditor user={user!} />
         <OnRunFailed />
         <OnRunSaved />
         <ServerSignedOut>
            <SignInButton />
         </ServerSignedOut>
      </WithTransition>
   );
}
