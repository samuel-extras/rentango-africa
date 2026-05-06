import Link from "next/link";
import { Button } from "../ui/button";
import { ClipboardList, PhoneCall, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Quick Assessment",
    duration: "2 minutes",
    description:
      "Tell us about your apartment — location, size, and availability. Takes less than 2 minutes.",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "Clarity Call",
    duration: "15 minutes",
    description:
      "We review if your apartment fits shortlet demand and walk you through expected earning potential.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Get Listed & Start Earning",
    duration: "Within days",
    description:
      "If approved, your apartment goes live across our platforms and starts receiving bookings.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-[#04032e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70 mb-4">
            Simple. Fast. Free.
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Three steps to start earning from your apartment with zero upfront cost.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                {/* Connector line */}
                {index < STEPS.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-white/20 md:block" />
                )}

                {/* Step number */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="size-6 text-purple-300" />
                  </div>
                  <span className="text-5xl font-bold text-white/10 leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Duration badge */}
                <span className="mb-3 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300">
                  {step.duration}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-white px-10 text-base font-semibold text-[#090857] hover:bg-white/90 transition-all"
          >
            <Link href="https://forms.gle/wWc836jQhK7s7BB68" target="_blank">
              Start the Assessment — It's Free
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
