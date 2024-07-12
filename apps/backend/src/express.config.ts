import express, { Application } from "express"
import path from "node:path";

const ExpressConfig = (): Application => {
   const app = express()
   app.use(express.static(path.join(__dirname, "public")));

   return app
}
export default ExpressConfig