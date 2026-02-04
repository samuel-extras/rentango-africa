"use client";

import { MapPin, Sparkles } from "lucide-react";

const LOCATIONS = ["Lekki", "Ikoyi", "Victoria Island", "Abuja"];

export function TrustReality() {
  return (
    <section className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-16">
      <div className="flex justify-center mb-16">
        <h2 className="text-4xl font-semibold">Trust Reality</h2>
      </div>
      {/* Grid */}
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div className="aspect-square">
          <img
            className="rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=900&h=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGhvdXNlfGVufDB8fDB8fHww"
            alt="Features Image"
          />
        </div>
        {/* End Col */}

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            {/* Location pills */}
            <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
              <MapPin className="mr-1 size-4 text-[#090857]" aria-hidden />
              {LOCATIONS.map((location) => (
                <span
                  key={location}
                  className="rounded-full border border-[#090857] bg-white/80 px-4 py-1.5 text-sm font-medium text-[#090857] shadow-sm backdrop-blur-sm"
                >
                  {location}
                </span>
              ))}
            </div>
            {/* Title */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-medium text-lg text-foreground">
                If you own an apartment in{" "}
                <span className="font-bold text-stone-800">Lekki</span>,{" "}
                <span className="font-bold text-stone-800">Ikoyi</span>,{" "}
                <span className="font-bold text-stone-800">
                  Victoria Island
                </span>
                , or <span className="font-semibold text-stone-800">Abuja</span>
                , there's a high chance it could be earning far more than it
                currently does.{" "}
              </h2>
              <p className=" font-medium text-lg text-foreground">
                The problem isn't your apartment. It's{" "}
                <span className="font-bold">
                  visibility, pricing, and distribution.
                </span>
              </p>
            </div>
            {/* End Title */}

            <div className="inline-flex items-center gap-2 rounded-2xl bg-[#090857] px-6 py-4 text-white shadow-lg shadow-stone-900/20">
              <Sparkles className="size-5 shrink-0 text-white" aria-hidden />
              <span className="text-lg font-semibold md:text-xl">
                Rentango fixes that.
              </span>
            </div>
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </section>
  );
}
