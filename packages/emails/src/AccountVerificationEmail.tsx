import React from "react";
import { Html, Img, Link, Row, Section, Tailwind, Text } from "@react-email/components";

export interface AccountVerificationEmailProps {
   verificationToken: string;
   username: string;
   appName: string;
   confirmationUrl: string;
}

const AccountVerificationEmail = ({ verificationToken, username, appName, confirmationUrl }: AccountVerificationEmailProps) => {
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
                  Use the link below to confirm your account for {appName}.
               </Text>
               <Text className={`!my-0 text-lg`}>
                  <Link className={`underline`} href={confirmationUrl}>
                     <b>{confirmationUrl}</b>
                  </Link>
               </Text>
               <Text className={`!mt-4 text-lg`}>
                  The link above will be valid for an hour.
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

export default AccountVerificationEmail;