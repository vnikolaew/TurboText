interface CharCount {
   correctWordChars: number;
   correctChars: number;
   incorrectChars: number;
   allCorrectChars: number;
   extraChars: number;
   missedChars: number;
   spaces: number;
   correctSpaces: number;
}

export function countChars(inputWords: string[]): CharCount {
   let correctWordChars = 0;
   let correctChars = 0;
   let incorrectChars = 0;
   let extraChars = 0;
   let missedChars = 0;
   let spaces = 0;
   let correctspaces = 0;

   const targetWords = getTargetWords();

   for (let i = 0; i < inputWords.length; i++) {
      const inputWord = inputWords[i] as string;
      const targetWord = targetWords[i] as string;

      if (inputWord === targetWord) {
         //the word is correct
         correctWordChars += targetWord.length;
         correctChars += targetWord.length;
      } else if (inputWord.length >= targetWord.length) {
         //too many chars
         for (let c = 0; c < inputWord.length; c++) {
            if (c < targetWord.length) {
               //on char that still has a word list pair
               if (inputWord[c] === targetWord[c]) {
                  correctChars++;
               } else {
                  incorrectChars++;
               }
            } else {
               //on char that is extra
               extraChars++;
            }
         }
      } else {
         //not enough chars
         const toAdd = {
            correct: 0,
            incorrect: 0,
            missed: 0,
         };
         for (let c = 0; c < targetWord.length; c++) {
            if (c < inputWord.length) {
               //on char that still has a word list pair
               if (inputWord[c] === targetWord[c]) {
                  toAdd.correct++;
               } else {
                  toAdd.incorrect++;
               }
            } else {
               //on char that is extra
               toAdd.missed++;
            }
         }
         correctChars += toAdd.correct;
         incorrectChars += toAdd.incorrect;
      }
      if (i < inputWords.length - 1) {
         spaces++;
      }
   }

   return {
      spaces: spaces,
      correctWordChars: correctWordChars,
      allCorrectChars: correctChars,
      incorrectChars,
      extraChars: extraChars,
      missedChars: missedChars,
      correctSpaces: correctspaces,
   };
}
