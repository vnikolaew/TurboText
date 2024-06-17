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

/**
 * Determines if the input URL is an absolute URL.
 * @param url
 */
export function isAbsoluteUrl(url: string) {

   // Regular expression for absolute URL
   const absoluteUrlPattern = /^(?:https?:\/\/)?(?:\w+\.)+\w{2,}(?:\/.*)?$/;

   // Test the string against the pattern
   return absoluteUrlPattern.test(url);
}

export function isValidUuid(id: string) {
   return /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(id);
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

export function getMonthName(monthIndex: number) {
   const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
   ];

   if (monthIndex < 0 || monthIndex > 11) {
      throw new Error("Invalid month index. It should be between 0 and 11.");
   }

   return monthNames[monthIndex];
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
