"use client";
import React from "react";
import { UserNotification as UN } from "@atoms/user";
import { EventType } from "@app/profile/[userId]/_components/UserChallengesRecord";
import { Button, UserAvatar } from "@repo/ui";
import moment from "moment";

export interface UserNotificationProps {
   notification: UN;
}

const UserNotification = ({ notification }: UserNotificationProps) => {

   if (notification.payload.type === EventType.ChallengeUser) {
      const { fromUserImage, fromUserName, fromUserId } = notification.payload;

      return <div key={notification.id} className={`flex items-center gap-2 text-nowrap flex-col`}>
         <div className={`flex items-center gap-2`}>
            <UserAvatar className={`w-8 h-8`} imageSrc={fromUserImage!} />
            <div className={`flex flex-col items-start justify-center gap-1`}>
               <span>
                  <b className={`!font-semibold`}>
                     {fromUserName}
                  </b>{` `}
                     challenged you to a game!
               </span>
               <time className={`text-sm`}>{moment(new Date(notification.timestamp)).fromNow()}</time>
            </div>
         </div>
         <div className={`w-full flex items-center justify-center gap-4 !mt-4`}>
            <Button className={`flex-1 text-sm`} variant={`default`}>Accept</Button>
            <Button className={`flex-1 text-sm`} variant={`destructive`}>Reject</Button>
         </div>
      </div>
   }

   return (
      <div key={notification.id} className={`flex items-center gap-2`}>
         {JSON.stringify(notification.payload, null, 2)}
      </div>
   );
};

export default UserNotification;