import { LegalPage } from "@/components/LegalPage";
import { brand } from "@/data/constants";

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <p>{brand.disclaimer}</p>
      <p className="mt-4">Any proof, testimonials, revenue mentions, payment screenshots, client stories, media mentions, or community numbers should be treated as informational only when backed by verified assets and permissions.</p>
    </LegalPage>
  );
}
