import React from "react";
import { Html, Section, Tailwind, Text, Link, Row, Img } from "@react-email/components";

export interface ResetPasswordWithCodeEmailProps {
   code: string;
   username: string;
   appName: string;
}

const ResetPasswordWithCodeEmail = ({ code, username, appName }: ResetPasswordWithCodeEmailProps) => {
   return (
      <Html lang="en">
         <Tailwind
            config={{
               theme: {
                  extend: {
                     colors: {
                        brand: "#007291",
                     },
                  },
               },
            }}
         >
            <Section className={`w-4/5 flex flex-col items-start`}>
               <Row>
                  <Img height={100} width={300} alt={`logo`} src={``} />
               </Row>
               <Text className={`!my-0 text-lg`}>
                  Hey, {(username ?? `John`).trim()}
               </Text>
               <Text className={`!mt-2 text-lg`}>
                  We received a request to change your password on {appName}.
               </Text>
               <Text className={`!mt-2 !mb-0 text-lg`}>
                  To reset your {appName} password, please use the code below:
               </Text>
               <Text className={`!my-0 text-2xl text-accent`}>
                     <b>{code}</b>
               </Text>
               <Text className={`!mt-4 text-lg`}>
                  The code above will be valid for an hour.
               </Text>
               <Section className={`text-base !mt-8`}>
                  <Text className={`!my-0 !mt-4 text-neutral-500`}>© {new Date().getFullYear()} {appName}</Text>
                  <Text className={`!my-0`}>
                     <Link className={`underline`} href={`/`}>Visit our help center</Link>
                  </Text>
               </Section>
            </Section>
         </Tailwind>
      </Html>
   );
};

export default ResetPasswordWithCodeEmail;