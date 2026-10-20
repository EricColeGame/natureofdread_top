interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "trailers", path: "/trailers", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "development", path: "/development", isContentType: true },
  { key: "story", path: "/story", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
