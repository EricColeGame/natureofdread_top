import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>Nature of Dread Wiki is an independent fan-made guide hub for Nature of Dread. Content is provided for informational and entertainment purposes only.</p>
      <p>Release dates, platforms, game systems, enemy details, and other information may change without notice. Always verify important details through the official Nature of Dread website or Steam store page.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Eira Games or Nature of Dread property.</p>
      <p>Questions about these terms can be sent to <a className="text-[hsl(var(--nav-theme))] underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
