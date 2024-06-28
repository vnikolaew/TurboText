export const DEFAULT_WORD_COUNT = 40;

export const WORDS_COUNTS = {
   10: 10,
   25: 25,
   50: 50,
   100: 100,
} as const;

export const LANGUAGES_MAP = {
   en: `English`,
   es: `Spanish`,
   it: `Italian`,
   fr: `French`,
   de: `German`,
   ru: `Russian`,
   mo: `Mongolian`,
   arb: `Arabic`,
   cs: `Czech`,
};

export enum TypingMode {
   TIME = `TIME`,
   QUOTE = `QUOTE`,
   WORDS = `WORDS`,
}

export enum TypingFlags {
   PUNCTUATION = 1,
   NUMBERS = 1 << 1,
}

export enum TypedLetterFlags {
   INSERTED = 1,
   DELETED = 2,
   EXTRA = 3,
}

export enum TypingRunSuccess {
   SUCCESS = `SUCCESS`,
   FAILED = `FAILED`,
   INDETERMINATE = `INDETERMINATE`,
}

export enum TypingRunState {
   STOPPED = `STOPPED`,
   RUNNING = `RUNNING`,
   PAUSED = `PAUSED`,
   FINISHED = `FINISHED`
}

export interface TypedLetterInfo {
   charIndex: number;
   timestamp: number;
   letter: string;
   correct?: boolean | null;
   flags?: number | null;
}

export interface WordRange {
   word: string;
   range: [number, number];
}


export interface UserExperience {
   points: number;
   level: number;
}
