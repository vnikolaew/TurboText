import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";
import { HTTP } from "./consts";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function calculateSHA256(data: string) {
   const hash = crypto.createHash("sha256");
   hash.update(data);
   return hash.digest("hex");
}

export async function getGravatarImageUrl(email: string) {
   let imageUrl: string = null!;

   const emailHash = calculateSHA256((email as string).trim().toLowerCase());
   const url = `https://bg.gravatar.com/${emailHash}.json`;
   const res = await fetch(url, {
      method: "GET",
      headers: {
         "Accept": HTTP.MEDIA_TYPES.APPLICATION_JSON,
      },
   });
   if (res.ok) {
      const body = await res.json();
      if (body[`entry`][`thumbnailUrl`]) imageUrl = body[`thumbnailUrl`];
      else if (!!body[`entry`][`photos`]?.length) {
         imageUrl = body[`entry`][`photos`][0].value;
      }

      if (imageUrl) {
         imageUrl = `${imageUrl}?s=640`;
      }
   }

   return imageUrl;
}

/**
 * A helper function for adding an artificial delay.
 * @param duration
 */
export async function sleep(duration: number) {
   return await new Promise(res => setTimeout(res, duration));
}


export function downloadFile(data: BlobPart, fileName: string, contentType: string) {
   const blob = new Blob([data], { type: contentType });
   const url = window.URL.createObjectURL(blob);
   const a = document.createElement("a");

   a.style.display = "none";
   a.href = url;
   a.download = fileName;
   document.body.appendChild(a);

   a.click();

   window.URL.revokeObjectURL(url);
   document.body.removeChild(a);
}

export function isEventInside(e: MouseEvent, element: HTMLElement) {
   const { x, y, width, height } = element?.getBoundingClientRect();

   const isInside = e.x >= x && e.x <= x + width
      && e.y >= y && e.y <= y + height;

   return isInside;
}

export function formatMillisecondsToTime(ms: number) {
   // Convert milliseconds to total seconds
   let totalSeconds = Math.floor(ms / 1000);

   // Extract hours, minutes, and remaining seconds
   let hours = Math.floor(totalSeconds / 3600);
   let minutes = Math.floor((totalSeconds % 3600) / 60);
   let seconds = totalSeconds % 60;

   // Format hours, minutes, and seconds to always be two digits
   let formattedHours = String(hours).padStart(2, "0");
   let formattedMinutes = String(minutes).padStart(2, "0");
   let formattedSeconds = String(seconds).padStart(2, "0");

   // Combine and return the formatted time
   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function formatMilliseconds(ms: number) {
   const millisecondsInSecond = 1000;
   const millisecondsInMinute = millisecondsInSecond * 60;
   const millisecondsInHour = millisecondsInMinute * 60;
   const millisecondsInDay = millisecondsInHour * 24;
   const millisecondsInMonth = millisecondsInDay * 30.44; // Average month length
   const millisecondsInYear = millisecondsInDay * 365.25; // Average year length

   const years = Math.floor(ms / millisecondsInYear);
   if (years > 0) return years + ` year${years > 1 ? `s` : ``}`;
   ms %= millisecondsInYear;

   const months = Math.floor(ms / millisecondsInMonth);
   if (months > 0) return months + ` month${months > 1 ? `s` : ``}`;
   ms %= millisecondsInMonth;

   const days = Math.floor(ms / millisecondsInDay);
   if (days > 0) return days + ` day${days > 1 ? `s` : ``}`;
   ms %= millisecondsInDay;

   const hours = Math.floor(ms / millisecondsInHour);
   if (hours > 0) return hours + ` hour${hours > 1 ? `s` : ``}`;
   ms %= millisecondsInHour;

   const minutes = Math.floor(ms / millisecondsInMinute);
   if (minutes > 0) return minutes + ` minute${minutes > 1 ? `s` : ``}`;
   ms %= millisecondsInMinute;

   const seconds = Math.floor(ms / millisecondsInSecond);
   if (seconds > 0) return seconds + ` second${seconds > 1 ? `s` : ``}`;
   ms %= millisecondsInSecond;

   const milliseconds = ms % millisecondsInSecond;
   return milliseconds + ` millisecond${milliseconds > 1 ? `s` : ``}`;
}

export function exportObjectAsJson(obj: any, filename: string) {
   // Convert object to JSON string
   const jsonString = JSON.stringify(obj, null, 2);

   // Create a Blob from the JSON string
   const blob = new Blob([jsonString], { type: "application/json" });

   // Create a link element
   const link = document.createElement("a");

   // Create a URL for the Blob and set it as the href attribute of the link
   const url = URL.createObjectURL(blob);
   link.href = url;

   // Set the download attribute of the link with the desired file name
   link.download = filename;

   // Append the link to the document body
   document.body.appendChild(link);

   // Programmatically click the link to trigger the download
   link.click();

   // Remove the link from the document
   document.body.removeChild(link);

   // Release the Blob URL
   URL.revokeObjectURL(url);
}

export function scrollToElement(elementId: string) {
   document.getElementById(elementId)?.scrollIntoView({ behavior: `smooth` });
}

export function hslToHex(hslString: string) {
   if (!hslString?.length) return ``;

   const [h, s, l] = hslString.match(/\d+/g)?.map(Number);

   // Convert HSL to RGB first
   const normalizedL = l / 100;
   const a = s * Math.min(normalizedL, 1 - normalizedL) / 100;
   const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = normalizedL - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color);
   };
   const r = f(0);
   const g = f(8);
   const b = f(4);

   // Convert RGB to HEX
   const toHex = (n: number) => n.toString(16).padStart(2, "0");
   return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function injectCSSClass(className: string, variables: Record<string, string>) {
   const styleSheet = document.styleSheets[0];

   // Construct the CSS variable definitions
   const cssVariables = Object.entries(variables).map(([key, value]) => `--${key}: ${value} !important;`).join(" ");

   // Construct the CSS rule
   const cssRule = `.${className} { ${cssVariables} :root { ${cssVariables} } } `;

   console.log({ cssRule });
   // Insert the rule into the stylesheet
   styleSheet!.insertRule(cssRule, styleSheet!.cssRules.length);
}

export function hexToHsl(hex: string) {
   // Remove the leading '#' if it is present
   hex = hex.replace(/^#/, "");

   // Parse the hex values
   let r = parseInt(hex.substring(0, 2), 16);
   let g = parseInt(hex.substring(2, 4), 16);
   let b = parseInt(hex.substring(4, 6), 16);

   // Convert RGB to a range of 0-1
   r /= 255;
   g /= 255;
   b /= 255;

   // Find the maximum and minimum values of R, G and B
   let max = Math.max(r, g, b);
   let min = Math.min(r, g, b);
   let h, s, l = (max + min) / 2;

   if (max === min) {
      h = s = 0; // Achromatic
   } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
         case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
         case g:
            h = (b - r) / d + 2;
            break;
         case b:
            h = (r - g) / d + 4;
            break;
      }
      h /= 6;
   }

   // Convert to degrees
   h = Math.round(h * 360);
   s = Math.round(s * 100);
   l = Math.round(l * 100);

   return `${h} ${s}% ${l}%`;
}

export function normalizeURL(url: string) {
   // Remove leading and trailing whitespace
   url = url.trim();

   // Add "https://" if the URL does not start with "http://" or "https://"
   if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
   }

   // Ensure the URL is lowercased (optional, depending on use case)
   url = url.toLowerCase();

   // Validate the URL (optional, to ensure it's a valid URL format)
   try {
      new URL(url);
   } catch (e) {
      console.error("Invalid URL provided:", url);
      return null;
   }

   return url;
}

export const LABELS = [
   "Novice",        // Level 0-9
   "Beginner",      // Level 10-19
   "Apprentice",    // Level 20-29
   "Journeyman",    // Level 30-39
   "Specialist",    // Level 40-49
   "Expert",        // Level 50-59
   "Professional",  // Level 60-69
   "Master",        // Level 70-79
   "Grandmaster",   // Level 80-89
   "Legend",         // Level 90-99
];

export function getUserLabel(level: number) {
   if (level < 0 || level > 99) {
      return "Invalid level"; // Handles levels outside 0-99
   }

   const index = Math.floor(level / 10); // Calculate the index based on level
   return LABELS[index];
}