import fs from "node:fs";
import path from "node:path";

export function getClickSoundsFiles() {
   return fs
      .readdirSync(path.join(process.cwd(), "public", "clicks"), {
         withFileTypes: true,
      })
      .filter((d) => d.isFile() && d.name.endsWith(`.wav`))
      .map((d) => `/clicks/${d.name}`)
      .sort((a, b) => a.localeCompare(b));
}
