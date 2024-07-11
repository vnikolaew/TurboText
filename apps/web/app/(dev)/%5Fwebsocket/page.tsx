"use client";
import React, { useState } from "react";
import { IMessage, useChannel } from "@hooks/websocket";
import { Button, Input } from "@repo/ui";
import moment from "moment";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   const [messages, setMessages] = useState<IMessage[]>([]);

   const { publish } = useChannel(`global`, message => setMessages(x => [...x, message]));
   const [value, setValue] = useState(``);

   return (
      <section className={`mx-auto mt-24 flex w-2/3 flex-col items-center gap-4`}>
         <h2>
            WebSocket testing page.
         </h2>
         <div className={`flex flex-col items-center gap-2`}>
            {messages.map((message, index) => (
               <span key={index + message.timestamp} className={`w-full`}>
                  [{moment(new Date(message.timestamp)).format(`DD MMM YYYY HH:mm:ss`)}] {message.channelName}: {message.data?.message ?? ``}
               </span>
            ))}
         </div>
         <div className={`flex flex-col w-[500px] gap-4`}>
            <Input onChange={e => setValue(e.target.value)} value={value} type={`text`} />
            <Button
               onClick={_ => {
                  if(!value.length) return;

                  publish(`global`, {
                     data: { message: value },
                     timestamp: Date.now(),
                     messageName: `global`,
                     extras: {},

                     messageType: `SEND`,
                  });
                  setValue(``)
               }}>
               Send a message
            </Button>
         </div>
      </section>
   );
};

export default Page;