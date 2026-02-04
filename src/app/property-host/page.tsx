import { CallToAction } from "@/components/host/call-to-action";
import { Header } from "@/components/header";
import { Hero } from "@/components/host/hero";
import { SocialProof } from "@/components/host/social-proof";
import { TrustReality } from "@/components/host/trust-reality";
import { HowItWorks } from "@/components/host/how-it-works";
import FooterSection from "@/components/footer";

export default function PropertyHostPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <TrustReality />
        <HowItWorks />
        <SocialProof />
        <CallToAction />
        <FooterSection />
      </main>
    </>
  );
}
