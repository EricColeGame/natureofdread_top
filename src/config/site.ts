export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Nature of Dread Wiki",
  shortName: "Nature of Dread",
  logoText: "N",
  tagline: "Survival Horror Guides, Enemies & Story",
  description: "Explore the cursed settlement of Hellhole in Nature of Dread with survival horror guides, enemy details, weapons, story coverage, and release updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://natureofdread.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://natureofdread.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/4022950/",
  heroVideoId: "7vvRYeDEyKY", // Nature of Dread official reveal trailer
  social: {
    youtube: "https://www.youtube.com/watch?v=7vvRYeDEyKY",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
