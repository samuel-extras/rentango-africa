import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="mx-auto max-w-5xl rounded-3xl bg-[#04032e] px-8 py-16 text-center md:px-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
          <span className="size-2 rounded-full bg-emerald-400" />
          No pressure. No obligation. Just clarity.
        </div>

        {/* Heading */}
        <h2 className="relative text-4xl font-bold text-white md:text-5xl md:leading-tight max-w-2xl mx-auto">
          Let's see if your apartment{" "}
          <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            qualifies.
          </span>
        </h2>

        <p className="relative mt-4 text-lg text-white/60 max-w-lg mx-auto">
          Start the 2-minute assessment and find out how much your apartment could
          earn every month.
        </p>

        {/* Buttons */}
        <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-14 rounded-full bg-white px-8 text-base font-semibold text-[#090857] hover:bg-white/90 transition-all group"
            asChild
          >
            <Link href="https://forms.gle/wWc836jQhK7s7BB68" target="_blank">
              Start Getting Bookings
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-14 rounded-full border-white/30 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10 transition-all"
            asChild
          >
            <Link href="https://forms.gle/wWc836jQhK7s7BB68" target="_blank">
              <PhoneCall className="mr-2 size-5" />
              Book a Clarity Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
