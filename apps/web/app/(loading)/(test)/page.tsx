import { getUser } from "@app/(loading)/(test)/_queries";
import SignInButton from "@components/buttons/SignInButton";
import { ServerSignedOut } from "@components/common/Auth.server";
import WithTransition from "@components/common/WithTransition";
import TypingEditor from "@components/editor/TypingEditor";
import WithInitialState from "@components/editor/WithInitialState";
import OnRunFailed from "@components/editor/toasts/OnRunFailed";
import OnRunSaved from "@components/editor/toasts/OnRunSaved";

interface HomeProps {}

export const dynamic = `force-dynamic`;

export const revalidate = 10;

export default async function Home({}: HomeProps) {
   let user = await getUser();

   return (
      <WithTransition
         key={`home`}
         initial={{ opacity: 100 }}
         animate={{ opacity: 100 }}
         transition={{ duration: 1000, delay: 0.3 }}
         exit={{ opacity: 100 }}
         className="flex min-h-screen w-full flex-col items-center justify-start gap-16 p-8 pb-20 font-sans text-2xl sm:p-20"
      >
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
