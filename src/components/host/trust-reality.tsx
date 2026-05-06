"use client";

import { MapPin, TrendingUp, Eye, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const LOCATIONS = ["Lekki", "Ikoyi", "Victoria Island", "Abuja"];

const PAIN_POINTS = [
  {
    icon: Eye,
    title: "Low visibility",
    description: "Your apartment isn't being seen by the right guests.",
  },
  {
    icon: TrendingUp,
    title: "Underpriced",
    description: "Most landlords leave 40–60% of potential earnings on the table.",
  },
  {
    icon: Share2,
    title: "Poor distribution",
    description: "You're not listed where high-paying guests actually search.",
  },
];

export function TrustReality() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-[#090857]">
            <MapPin className="size-4" />
            We operate in your city
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Your apartment is worth more.{" "}
            <span className="text-[#090857]">A lot more.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            If you own a property in any of these locations, you're sitting on
            untapped income. The problem isn't your apartment.
          </p>

          {/* Location pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {LOCATIONS.map((location) => (
              <span
                key={location}
                className="rounded-full border border-[#090857]/20 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-[#090857]"
              >
                {location}
              </span>
            ))}
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-50 -z-10" />
            <img
              className="w-full rounded-2xl object-cover shadow-xl aspect-[4/3]"
              src="https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=900&h=675&auto=format&fit=crop&q=80"
              alt="Modern apartment interior"
            />
            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white p-4 shadow-lg border border-gray-100">
              <p className="text-3xl font-bold text-[#090857]">3×</p>
              <p className="text-xs text-gray-500 mt-0.5">avg. earnings increase</p>
            </div>
          </div>

          {/* Pain points */}
          <div className="space-y-6">
            <p className="text-2xl font-bold text-gray-900">
              The problem is{" "}
              <span className="text-[#090857]">
                visibility, pricing & distribution.
              </span>
            </p>
            <p className="text-gray-500">
              Rentango fixes all three — we get your apartment in front of the
              right guests, at the right price, on the right platforms.
            </p>

            <div className="space-y-4 pt-2">
              {PAIN_POINTS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#090857]/10">
                    <Icon className="size-5 text-[#090857]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-4 h-13 rounded-full bg-[#090857] px-8 text-white hover:bg-[#090857]/90 transition-all"
              asChild
            >
              <Link href="https://forms.gle/wWc836jQhK7s7BB68" target="_blank">
                Start Getting Bookings
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
