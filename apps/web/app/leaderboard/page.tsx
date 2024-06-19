"use client";
import React from "react";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col items-center gap-4`}>
         Leaderboard page.
      </section>
   );
};

export default Page;