import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Nature of Dread Wiki at natureofdread.top is an independent fan site that provides informational game guides. We do not request account credentials, game login details, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages. These services are used to operate and improve the site.</p>
      <p>External links may lead to the official Nature of Dread website, Steam, YouTube, or other community services. Those services are governed by their own privacy policies.</p>
      <p>Questions or privacy requests can be sent to <a className="text-[hsl(var(--nav-theme))] underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
