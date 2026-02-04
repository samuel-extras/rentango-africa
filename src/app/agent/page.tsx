import { Hero } from "@/components/agent/hero";
import { WhoIsItFor } from "@/components/agent/who-is-it-for";
import { WhyThisWorks } from "@/components/agent/why-this-works";
import { TheWindow } from "@/components/agent/the-window";
import { HowToMakeMoney } from "@/components/agent/how-to-make-money";
import { ThePicture } from "@/components/agent/the-picture";
import { Webinar } from "@/components/agent/webinar";
import FAQs from "@/components/agent/faqs";
import { ReasonToAct } from "@/components/agent/reason-to-act";
import { CTA } from "@/components/agent/cta";
import FooterSection from "@/components/footer";
import { Header } from "@/components/header";

const WHO_IS_IT_FOR_ITEMS = [
  {
    title: "You don't own the apartment",
    description: "You don't own the apartment",
    link: "/",
  },
  {
    title: "You don't own the apartment",
    description: "You don't own the apartment",
    link: "/",
  },
  {
    title: "You don't own the apartment",
    description: "You don't own the apartment",
    link: "/",
  },
  {
    title: "You don't own the apartment",
    description: "You don't own the apartment",
    link: "/",
  },
  {
    title: "You don't own the apartment",
    description: "You don't own the apartment",
    link: "/",
  },
  {
    title: "You don't own the apartment",
    description: "You don't own the apartment",
    link: "/",
  },
];
const HERO_DESCRIPTION =
  "Earn from shortlet apartments… even if you don't own one. You don't need capital. You don't need property. You don't need to manage guests. You only need access. Rentango pays you 2% commission on every booking again and again for apartments you help list.";

export default function AgentPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero
          tagline="Earn From Shortlet"
          title={
            <>
              Earn From Shortlet Real Estate
              <br className="hidden sm:block" /> Without Owning Property
            </>
          }
          description={HERO_DESCRIPTION}
          ctaText="👉 Join the Free Live Session"
          images={[
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb3BlcnR5fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3BlcnR5fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1684151302119-4cea9ea294e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHByb3BlcnR5fGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1683891068536-2467572c9a2b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHByb3BlcnR5fGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1582647534594-2c4eef400def?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
          ]}
        />
        <WhoIsItFor />
        <WhyThisWorks />
        <TheWindow />
        <HowToMakeMoney />
        <ThePicture />
        <Webinar />
        <FAQs />
        <ReasonToAct />
        <CTA />
      </main>
      <FooterSection />
    </>
  );
}
