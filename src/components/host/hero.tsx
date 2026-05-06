import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

const TRUST_POINTS = [
  "No upfront cost",
  "Free listing setup",
  "We handle the bookings",
];

export const Hero = () => {
  return (
    <section className="relative min-h-svh flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&auto=format&fit=crop&q=80"
        alt="Modern apartment"
        fill
        sizes="100vw"
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="mt-0"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#04032e] via-[#04032e]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04032e]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full pb-16 pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Now accepting apartments in Lagos & Abuja
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Turn Your Apartment Into{" "}
              <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Monthly Income
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-lg font-medium text-white/80 md:text-xl">
              Get consistent bookings on Rentango Africa without stress
            </p>

            {/* Trust points */}
            <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle className="size-4 shrink-0 text-emerald-400" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-white px-8 text-base font-semibold text-[#090857] shadow-lg shadow-black/30 hover:bg-white/90 transition-all group"
              >
                <Link href="https://forms.gle/wWc836jQhK7s7BB68" target="_blank">
                  Start Getting Bookings
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
