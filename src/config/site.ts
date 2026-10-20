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
    website?: string;
    steamCommunity?: string;
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
  supportEmail: "support@natureofdread.top",
  gameUrl: "https://store.steampowered.com/app/4022950/Nature_of_Dread/",
  heroVideoId: "7vvRYeDEyKY", // Nature of Dread official reveal trailer
  social: {
    website: "https://www.natureofdread.com/",
    youtube: "https://www.youtube.com/watch?v=7vvRYeDEyKY",
    steamCommunity: "https://steamcommunity.com/app/4022950",
  },
  locales: ["en", "es", "de", "fr"],
  defaultLocale: "en",
};
