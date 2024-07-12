"use client";
import { acceptChallenge, rejectChallenge } from "@app/lobby/actions";
import {
   ChallengeState,
   currentUserMatchAtom,
} from "@app/lobby/hooks/useTypingChallenge";
import { globalUserSheetAtom, UserNotification as UN } from "@atoms/user";
import LoadingButton from "@components/common/LoadingButton";
import { TOASTS } from "@config/toasts";
import { CHANEL_NAME } from "@providers";
import { Button, toast, UserAvatar } from "@repo/ui";
import { useAtom, useSetAtom } from "jotai/index";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useChannel } from "@hooks/websocket";

export interface UserNotificationProps {
   notification: UN;
}

export enum EventType {
   Match = `match`,
   Accepted = `accepted`,
   Rejected = `rejected`,
   ChallengeStarted = `challenge-started`,
   ChallengeStopped = `challenge-stopped`,
   ChallengeUser = `challenge-user`,
}

const UserNotification = ({ notification }: UserNotificationProps) => {
   const setUserSheet = useSetAtom(globalUserSheetAtom);
   const [currentMatch, setCurrentMatch] = useAtom(currentUserMatchAtom);
   const router = useRouter();
   const session = useSession();
   const { clientId } = useChannel(CHANEL_NAME, async (message) => {
      if (message.messageName === EventType.Accepted) {
         console.log(`Challenge accepted!`, message);
      }

      if (message.messageName === EventType.ChallengeStarted) {
         console.log(`Challenge started!`, message);
         setCurrentMatch({
            ...(currentMatch ?? {}),
            matchId: message.data.matchId,
            ...(message.data.matchedUserId !== session.data?.user?.id && {
               matchedUserId: message.data.matchedUserId,
            }),
            state: ChallengeState.Started,
            userOneAccepted: true,
            userTwoAccepted: true,
         });

         setTimeout(() => {
            setUserSheet(false);
            router.push(`/game/${message.data.gameId!}`);
         }, 2000);
      }
   });

   const { execute: decline, isExecuting: declining } = useAction(
      rejectChallenge,
      {
         onSuccess: (res) => {
            if (res.data?.success) {
               console.log(res.data);
               toast(
                  TOASTS.CHALLENGE_REJECTED(notification.payload.fromUserName)
               );
            }
         },
      }
   );
   const {
      execute: accept,
      isExecuting: accepting,
      status,
   } = useAction(acceptChallenge, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res.data);
            toast(TOASTS.CHALLENGE_ACCEPTED(notification.payload.fromUserName));
         }
      },
   });

   function handleAccept() {
      accept({
         userId: session?.data?.user?.id!,
         matchedUserId: notification.payload.fromUserId,
         matchId: notification.payload.matchId,
         clientId,
      });
   }

   function handleReject() {
      decline({
         userId: session?.data?.user?.id!,
         matchedUserId: notification.payload.fromUserId,
         matchId: notification.payload.matchId,
         clientId,
      });
   }

   if (notification.payload.type === EventType.ChallengeUser) {
      const { fromUserImage, fromUserName, fromUserId, matchId } =
         notification.payload;

      return (
         <div
            key={notification.id}
            className={`flex flex-col items-center gap-2 text-nowrap`}
         >
            <div className={`flex items-center gap-2`}>
               <UserAvatar className={`h-8 w-8`} imageSrc={fromUserImage!} />
               <div
                  className={`flex flex-col items-start justify-center gap-1`}
               >
                  <span>
                     <Link
                        onClick={(_) => setUserSheet(false)}
                        href={`/profile/${fromUserId}`}
                     >
                        <b className={`!font-semibold`}>{fromUserName}</b>
                        {` `}
                     </Link>
                     challenged you to a game!
                  </span>
                  <time className={`text-sm`}>
                     {moment(new Date(notification.timestamp)).fromNow()}
                  </time>
               </div>
            </div>
            <div
               className={`mx-auto !mt-4 flex w-4/5 items-center justify-center gap-4`}
            >
               <LoadingButton
                  loadingText={`Game is about to start ...`}
                  loading={status === `hasSucceeded`}
                  onClick={handleAccept}
                  className={`flex-1 text-sm`}
                  variant={`default`}
               >
                  {" "}
                  Accept
               </LoadingButton>
               <Button
                  onClick={handleReject}
                  className={`flex-1 text-sm`}
                  variant={`destructive`}
               >
                  Reject
               </Button>
            </div>
         </div>
      );
   }

   return (
      <div key={notification.id} className={`flex items-center gap-2`}>
         {JSON.stringify(notification.payload, null, 2)}
      </div>
   );
};

export default UserNotification;
