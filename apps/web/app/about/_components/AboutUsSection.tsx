import { APP_NAME } from "@config/site";
import { Info } from "lucide-react";

export interface AboutUsSectionProps {}

const AboutUsSection = ({}: AboutUsSectionProps) => {
   return (
      <section
         id={`about`}
         className={`flex flex-col items-start gap-4 text-left`}
      >
         <h2
            className={`mt-16 inline-flex items-center gap-2 text-2xl text-main`}
         >
            <Info size={24} />
            <span>About us</span>
         </h2>
         <p className={`text-secondary`}>
            Welcome to {APP_NAME}, your go-to platform for enhancing your typing
            skills and boosting your productivity. At {APP_NAME}, we provide an
            engaging and interactive environment where users can challenge
            themselves with various typing tests and exercises designed to
            improve speed and accuracy. Our mission is to help individuals, from
            beginners to professionals, develop efficient typing habits that
            will benefit them in their academic, professional, and personal
            endeavors. By offering personalized progress tracking and a wide
            range of difficulty levels, we aim to make typing practice both fun
            and rewarding. Join our community today and take the first step
            towards mastering the art of typing!
         </p>
         <p className={`text-secondary`}>
            Test yourself in various modes, track your progress and improve your
            speed.
         </p>
      </section>
   );
};

export default AboutUsSection;
