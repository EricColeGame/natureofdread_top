import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Nature of Dread, its logos, trailers, screenshots, and related media belong to Eira Games and their respective rights holders.</p>
      <p>Original text, layout, and guide organization on this site are provided by the Nature of Dread Wiki team for non-commercial fan and informational purposes.</p>
      <p>If you own rights to content displayed here and have a concern, contact the site operator at <a className="text-[hsl(var(--nav-theme))] underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
