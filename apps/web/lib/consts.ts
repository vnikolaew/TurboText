import { UserConfiguration } from "@repo/db";
import moment from "moment";

// Development flag
export const __IS_DEV__ = process.env.NODE_ENV === "development";

// Production flag
export const __IS_PROD__ = process.env.NODE_ENV === "production";

export const HTTP = {
   MEDIA_TYPES: {
      APPLICATION_JSON: `application/json`,
   },
};

export const USER_SUBMITTED_FEEDBACK_COOKIE_NAME = `feedback-submitted`;
export const USER_LOCALE_COOKIE_NAME = `NEXT_LOCALE`;

export const FONT_FAMILIES = [
   "Atkinson Hyperlegible",
   "SF Mono",
   "CommitMono",
   "IBM Plex Sans",
   "Lexend Deca",
   "Oxygen",
   "Ubuntu Mono",
   "Boon (‘nel)",
   "Courier",
   "Inconsolata",
   "Montserrat",
   "Roboto",
   "Custom",
   "Cascadia Mono",
   "Fira Code",
   "Itim",
   "Noto Naskh Arabic",
   "Roboto Mono",
   "Comfortaa",
   "Georgia",
   "JetBrains Mono",
   "Nunito",
   "Source Code Pro",
   "Helvetica",
   "Hack",
   "Lalezar",
   "Open Dyslexic",
   "Titillium Web",
   "Coming Soon",
   "IBM Plex Mono",
   "Lato",
   "Ubuntu",
] as const;

export const DEFAULT_USER_SETTINGS: Partial<UserConfiguration> = {
   test_difficulty: "NORMAL",
   elements_show_oof_warning: false,
   elements_show_key_tips: false,
   elements_show_caps_lock_warning: false,
   elements_show_average: "OFF",
   theme_colorful_mode: false,
   theme_flip_colors: false,
   pace_caret_style: "CURSOR",
   caret_style: "CURSOR",
   blind_mode: false,
   auto_save_mode: false,
   input_freedom_mode: false,
   input_confidence_mode: "OFF",
   input_indicate_typos: "OFF",
   sound_click_sound: "Off",
   sound_error_sound: "Off",
   caret_smoothness: "MEDIUM",
   pace_caret_speed: "AVG",
   theme: "dark",
   font_family: "SF Mono",
   font_size: 3,
   language: "English",
   metadata: null,
   createdAt: moment("2024-06-20T09:07:28.530Z").toDate(),
   updatedAt: moment("2024-06-26T08:54:34.120Z").toDate(),
};

export const THEMES = [
   `dark`,
   `nighthawk`,
   `obsidian`,
   `onyx`,
   `frost`,
   `slate`,
   `sandstone`,
];

export const SOUNDS = [
   "Off",
   "Click",
   "Beep",
   "Pop",
   "Nk creams",
   "Typewriter",
   "Osu",
   "Hitmarker",
   "Sine",
   "Sawtooth",
   "Square",
   "Triangle",
   "Pentatonic",
   "Wholetone",
   "Fist fight",
   "Rubber keys",
];
