"use client";
import React, { Fragment } from "react";
import Script from "next/script";

export interface GoogleReCaptchaProps {
}

const GoogleReCaptcha = ({}: GoogleReCaptchaProps) => {
   return (
      <Fragment>
         <Script id={`google-recaptcha`} type={`text/javascript`}>
            {`
               var onloadCallback = function() {
        grecaptcha.render('html_element', {
          'sitekey' : '${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}'
        });
      };`}
         </Script>
         <form method={`POST`} action="?">
            <div id="html_element"></div>
            <br />
            <input type="submit" value="Submit" />

         </form>
         <Script id={`google-recaptcha-script`}
                 src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                 async defer />
      </Fragment>
   );
};

export default GoogleReCaptcha;