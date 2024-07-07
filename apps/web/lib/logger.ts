import { __IS_DEV__ } from "@lib/consts";

export class Logger {
   static INFO = "INFO";
   static WARN = "WARN";
   static ERROR = "ERROR";
   static console: Console;

   static {}

   private static get enabled() {
      return __IS_DEV__;
   }

   static log(level: string, message: string) {
      if (!this.enabled) return;
      let color;

      switch (level) {
         case Logger.INFO:
            color = "green";
            break;
         case Logger.WARN:
            color = "orange";
            break;
         case Logger.ERROR:
            color = "red";
            break;
         default:
            color = "black";
      }

      console.log(
         `%c[${level}]%c ${message}`,
         `color: white; background-color: ${color}; font-weight: bold;`,
         "color: inherit; font-weight: normal;"
      );
   }

   static info(message: string) {
      this?.log(Logger.INFO, message);
   }

   static warn(message: string) {
      this?.log(Logger.WARN, message);
   }

   static error(message: string) {
      this?.log(Logger.ERROR, message);
   }
}
