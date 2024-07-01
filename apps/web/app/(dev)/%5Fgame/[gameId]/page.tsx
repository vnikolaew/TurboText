import React from "react";
import { UsersChallengeState, xprisma } from "@repo/db";
import UsersTypingChallengeSection from "@app/(dev)/%5Fgame/[gameId]/_components/UsersTypingChallengeSection";
import { getChallengeWinner, getGameUsers } from "@app/(dev)/%5Fgame/[gameId]/_queries";
import { UserAvatar } from "@repo/ui";
import HydrateAtoms from "@app/(dev)/%5Fgame/[gameId]/_components/HydrateAtoms";
import { auth } from "@auth";
import { Swords } from "lucide-react";
import Link from "next/link";

export interface PageProps {
   params: { gameId?: string };
}

const Page = async ({ params: { gameId } }: PageProps) => {
   const session = await auth();
   const challenge = await xprisma.usersChallenge.findUnique({
      where: { id: gameId },
      include: { userOneRun: true, userTwoRun: true },
   });

   if (!challenge) {
      return (
         <section className={`w-2/3 mx-auto my-24 flex flex-col items-center gap-4`}>
            <h2 className={`mt-4`}>
               Game {gameId} not found.
            </h2>
         </section>
      );
   }

   if (challenge?.state === UsersChallengeState.Finished) {
      const { winner, winnerCompletedWords, userOneWords, userTwoWords } = await getChallengeWinner(challenge);

      return (
         <section className={`w-2/3 mx-auto my-24 flex flex-col items-center gap-4`}>
            <div className={`text-xl flex flex-col items-center`}>
               <Swords className={`text-accent`} size={32} />
               <p className={`text-lg text-secondary`}>
                  Current state is <b className={`font-semibold text-accent`}>{challenge?.state}</b>.
               </p>
               {winner ? (
                  <div className={`flex flex-col items-center gap-2`}>
                  <span>
                     Winner ({winnerCompletedWords} completed words):
                  </span>
                     <div className={`flex items-center gap-2`}>
                        <UserAvatar imageSrc={winner.image} />
                        <Link className={`text-secondary`} href={`/profile/${winner.id}`}>{winner.name}</Link>
                     </div>
                  </div>) : (
                  <div>
                    <span className={`text-amber-600`}>
                        DRAW
                     </span> {` `}
                     ({userOneWords}vs{userTwoWords} words)</div>
               )}
            </div>
         </section>
      );
   }

   if (![challenge.userOneId, challenge.userTwoId].includes(session?.user?.id)
      || challenge?.state === UsersChallengeState.Stopped) {
      return (
         <section className={`w-2/3 mx-auto my-24 flex flex-col items-center gap-4`}>
            <div className={`text-xl flex flex-col items-center`}>
               <Swords className={`text-accent`} size={32} />
               {challenge?.metadata?.stoppedByUserId ? (
                  <h2 className={`mt-4`}>
                     Game {gameId} was stopped by <b
                     className={`font-semibold text-accent`}>{challenge?.metadata?.stoppedByUserId}</b>.
                  </h2>
               ) : (
                  <h2 className={`mt-4`}>
                     Game {gameId} not found.
                  </h2>
               )}
               <p className={`text-lg text-secondary`}>
                  Current state is <b className={`font-semibold text-accent`}>{challenge?.state}</b>.
               </p>
            </div>
         </section>
      );
   }

   const { userOne, userTwo } = await getGameUsers([challenge.userOneId, challenge.userTwoId], session?.user!.id);

   return (
      <section className={`w-2/3 mx-auto my-24 flex flex-col items-center gap-4`}>
         <HydrateAtoms challenge={challenge} />
         <h2>
            Game {challenge.id}:
         </h2>
         <div className={`flex items-center w-full justify-center gap-4`}>
            <div className={`flex items-center gap-2`}>
               <UserAvatar imageSrc={userOne.image!} />
               <span>{userOne.name}</span>
            </div>
            <span>VS</span>
            <div className={`flex items-center gap-2`}>
               <UserAvatar imageSrc={userTwo.image!} />
               <span>{userTwo.name}</span>
            </div>
         </div>
         <UsersTypingChallengeSection gameId={challenge.id} userOne={userOne} userTwo={userTwo} />
      </section>
   );
};

export default Page;