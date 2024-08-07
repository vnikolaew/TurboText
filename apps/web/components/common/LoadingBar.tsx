"use client";
import NextTopLoader from "nextjs-toploader";

export interface PageNavigationLoadingBarProps {}

const PageNavigationLoadingBar = ({}: PageNavigationLoadingBarProps) => {
   return (
      <div className={`!z-30 !h-fit`}>
         <NextTopLoader
            color={`hsl(var(--accent))`}
            showSpinner={false}
            crawl
            easing={`ease`}
            zIndex={30}
            showAtBottom={false}
            initialPosition={0.1}
            height={2}
         />
      </div>
   );
};

export default PageNavigationLoadingBar;
