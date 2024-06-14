export const strings = {
   ascii_letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",

   ascii_lowercase: "abcdefghijklmnopqrstuvwxyz",

   ascii_uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

   digits: "0123456789",

   hexdigits: "0123456789abcdefABCDEF",

   letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",

   lowercase: "abcdefghijklmnopqrstuvwxyz",

   octdigits: "01234567",

   printable: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c",

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
         let punctuation = punctuations[Math.floor(Math.random() * punctuations.length)];

         // Append the punctuation to the current word
         words[i] = words[i]! + punctuation;
      }
   }
   return words;
}