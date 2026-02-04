"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-linear-to-r from-violet-300/50 to-purple-100 blur-3xl w-100 h-175 rotate-[-60deg] transform -translate-x-40"></div>
        <div className="bg-linear-to-tl from-primary-50 via-primary-100 to-primary-50 blur-3xl w-[1440px] h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60"></div>
      </div>
      {/* End Gradients */}

      <div className="relative z-10">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-linear-to-l from-primary-600 to-violet-500 text-[#090857]">
              You don&apos;t need capital. You need access.{" "}
            </p>

            {/* Title */}
            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl">
                Stop watching apartments make money without you.{" "}
              </h1>
            </div>
            {/* End Title */}

            {/* Buttons */}
            <div className="mt-8  flex-col md:flex-row justify-center ">
              <Button
                className="h-12 bg-[#090857] text-white hover:bg-primary hover:text-primary-foreground transition-all mb-4 md:mb-0"
                asChild
                size="lg"
              >
                <Link href="https://forms.gle/W7AEVzv7WmZZiEGV8">
                  👉 Join the Free Live Session
                  <ChevronRight className="ml-1 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12">
                <Link href="https://forms.gle/W7AEVzv7WmZZiEGV8">
                  Start Listing Apartments
                </Link>
              </Button>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
    </section>
  );
}
