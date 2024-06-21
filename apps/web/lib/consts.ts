// Development flag
export const __IS_DEV__ = process.env.NODE_ENV === "development";

// Production flag
export const __IS_PROD__ = process.env.NODE_ENV === "production";

export const HTTP = {
   MEDIA_TYPES: {
      APPLICATION_JSON: `application/json`,
   },
};

export const USER_SUBMITTED_FEEDBACK_COOKIE_NAME = `feedback-submitted`
export const USER_LOCALE_COOKIE_NAME = `NEXT_LOCALE`

export const STRIPE_PRICING_PLANS = {
   Free: `https://buy.stripe.com/test_3cscQh60k24ddws5kk`,
   Regular: `https://buy.stripe.com/test_00g3fHcoI24d0JGdQR`,
   Premium: `https://buy.stripe.com/test_4gw3fHdsM4clbokcMO`,
}

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
   "Ubuntu"] as const;
