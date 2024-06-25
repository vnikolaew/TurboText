import React, { ReactNode } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({
   weight: ["400"],
   subsets: ["latin"],
});

export interface LinkInfo {
   title: string;
   href: string;
   icon?: ReactNode;
}

export interface FooterTwoProps {
   appLogo: ReactNode;
   links: {
      title: string;
      links: LinkInfo[]
   },
   legal: {
      title: string;
      links: LinkInfo[]
   },
   appName: string;
   appDescription: string;
   socialLinks: {
      title: string;
      discord: string;
      twitter: string;
      linkedIn: string;
   };
}

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
   discord: (props: IconProps) => (
      <svg width="800px" height="800px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"
           preserveAspectRatio="xMidYMid" {...props}>
         <g>
            <path
               d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
               fill="currentColor" fillRule="nonzero">

            </path>
         </g>
      </svg>
   ),
   twitter: (props: IconProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 1668.56 1221.19" viewBox="0 0 1668.56 1221.19"
           id="twitter-x" {...props}>
         <path d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
               transform="translate(52.39 -25.059)"></path>
      </svg>
   ),
   github: (props: IconProps) => (
      <Github {...props} />
   ),
   linkedIn: (props: IconProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linkedin" {...props}>
         <path
            d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
      </svg>
   ),
};

export const FooterTwo = ({
                             appLogo,
                             appDescription,
                             legal, links,
                             appName,
                             socialLinks: { linkedIn, discord, twitter, title },
                          }: FooterTwoProps) => {
   return (
      <footer className={`py-2 border-t border-neutral-700 mt-8 dark:bg-transparent`}>
         <div className="my-8 grid grid-cols-4 mx-24 gap-8">
            <div
               className="!mb-16 flex flex-col space-y-1 text-base text-muted-foreground items-start text-left h-full justify-center">
               <Link href={`/`} className={`inline-flex items-center gap-4`}>
                  {appLogo}
                  <span
                     className={`text-base !test-gradient drop-shadow-lg !font-semibold ${lexend.className} uppercase !text-main`}>{appName}</span>
               </Link>
               <span className={`!mt-2 text-sm font-normal !text-secondary`}>
                  {appDescription}
               </span>
               <span className={`!mt-4 text-sm !text-secondary`}>
                  Copyright © {new Date().getFullYear()} - All rights reserved.
               </span>
            </div>
            <div>
               <h2 className={`uppercase text-base !text-main`}>{links.title}</h2>
               <div className="mt-4 flex space-y-2 flex-col">
                  {links?.links?.map(({ title, href, icon }, index) => (
                     <Link className={`hover:underline text-sm w-fit hover:!text-accent transition-colors duration-100 inline-flex items-center gap-2 group !text-secondary`} href={href}>
                        {icon}
                        {title}
                     </Link>
                  ))}
               </div>
            </div>
            <div>
               <h2 className={`uppercase text-main text-lg`}>{legal.title}</h2>
               <div className="mt-4 flex space-y-2 flex-col">
                  {legal?.links?.map(({ title, href, icon }, index) => (
                     <Link className={`hover:underline text-sm w-fit hover:!text-accent transition-colors duration-100 inline-flex items-center gap-2 group !text-secondary`} href={href}>
                        {icon}
                        {title}
                     </Link>
                  ))}
               </div>
            </div>
            <div>
               <h2 className={`uppercase text-muted-foreground text-lg !text-main`}>{title}</h2>
               <div className="mb-8 flex space-x-8 mt-4">
                  <Link title={`Discord`} target="_blank" rel="noreferrer" href={discord}>
                     <span className="sr-only">Discord</span>
                     <Icons.discord className="h-6 w-6 fill:white text-white hover:!fill-accent hover:!text-accent transition-colors duration-100" />
                  </Link>
                  <Link title={`Twitter`} target="_blank" rel="noreferrer" href={twitter}>
                     <span className="sr-only">Twitter</span>
                     <Icons.twitter className="h-6 w-6 !fill-white text-white hover:!fill-accent hover:!text-accent transition-colors duration-100" />
                  </Link>
                  <Link title={`LinkedIn`} target="_blank" rel="noreferrer" href={linkedIn}>
                     <span className="sr-only">LinkedIn</span>
                     <Icons.linkedIn className="h-6 w-6 !fill-white !text-white hover:!fill-accent hover:!text-accent transition-colors duration-100" />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
};
