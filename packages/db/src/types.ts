declare global {
   namespace PrismaJson {
      export interface CookiePreferences {
         Marketing: boolean;
         Necessary: boolean;
         Statistics: boolean;
         Functionality: boolean;
      }

      type UserMetadata = {
         bio: string
         github: string
         twitter: string
         website: string
         keyboard: string
         ogAccount: boolean
         "cookie-consent": boolean
         "cookie-preferences": CookiePreferences
      }

      type TagMetadata = {
         active?: boolean
      }

      type TypedLetters = {
         flags: number
         letter: string
         correct?: boolean
         charIndex: number
         timestamp: number
      }[]

      type TypingRunMetadata = {
         wpm: number
         rawWpm: number
         tags: any[]
         accuracy: number
         language: string
         blind_mode: boolean
         consistency: number
         completedWords: number
         isPersonalBest: boolean
         confidence_mode: string
         test_difficulty: string
      }

      type UserConfigurationMetadata = {
         customThemes?: {
            name: string;
            background: string;
            accent: string;
            main: string;
            secondary: string;
            "secondary-bg": string;
         }
      }
   }
}