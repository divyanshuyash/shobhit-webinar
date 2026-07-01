import { LegalPage } from "@/components/LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This website may collect contact details submitted through forms, webinar registration interest, and basic usage information used to improve the visitor experience.</p>
      <p className="mt-4">Information may be used to respond to inquiries, share relevant webinar or consulting updates, and understand how visitors interact with the website.</p>
      <p className="mt-4">Third-party tools such as webinar platforms, analytics providers, payment processors, or email tools may have their own privacy practices when they are used.</p>
    </LegalPage>
  );
}
