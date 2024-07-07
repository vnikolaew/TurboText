export const strings = {
   ascii_letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",

   ascii_lowercase: "abcdefghijklmnopqrstuvwxyz",

   ascii_uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

   digits: "0123456789",

   hexdigits: "0123456789abcdefABCDEF",

   letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",

   lowercase: "abcdefghijklmnopqrstuvwxyz",

   octdigits: "01234567",

   printable:
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c",

   punctuation: "!',-.:;?",

   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

   whitespace: "\t\n\x0b\x0c\r",
};

// Function to randomly inject punctuation marks into the list of words
export function injectPunctuation(words: string[], punctuations: string) {
   // Determine the number of punctuations to insert
   let numPunctuations = Math.floor(Math.random() * words.length) + 1;

   for (let i = 0; i < words.length; i++) {
      // Randomly decide whether to add a punctuation mark to this word
      if (Math.random() < 0.4) {
         // Randomly select a punctuation mark
         let punctuation =
            punctuations[Math.floor(Math.random() * punctuations.length)];

         // Append the punctuation to the current word
         words[i] = words[i]! + punctuation;
      }
   }
   return words;
}

export function isValidUrl(url: string) {
   const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
         "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
         "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
         "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
         "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
         "(\\#[-a-z\\d_]*)?$",
      "i"
   ); // fragment locator

   return urlPattern.test(url);
}

export function isValidUuid(id: string) {
   return /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
      id
   );
}

export function getMonthName(monthIndex: number) {
   const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];

   if (monthIndex < 0 || monthIndex > 11) {
      throw new Error("Invalid month index. It should be between 0 and 11.");
   }

   return monthNames[monthIndex];
}
