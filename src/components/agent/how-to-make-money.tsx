"use client";

import { motion } from "motion/react";
import { X, Check, Percent } from "lucide-react";

const YOU_DONT = [
  "own the apartment",
  "manage guests",
  "clean",
  "handle payments",
  "handle complaints",
];

const RENTANGO_HANDLES = [
  "Verification",
  "Pricing",
  "Visibility",
  "Bookings",
  "Guests",
  "Payouts",
];

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HowToMakeMoney() {
  return (
    <section className="pb-16 pt-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            {" "}
            How you actually make money with Rentango
          </h1>
          <p>
            Gemini is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <h2 className="font-medium"> You don&apos;t </h2>
              </div>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {YOU_DONT.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <X className="size-3 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#090857] rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium text-white">
                    You introduce the apartment. That&apos;s it.
                  </h2>
                  <span className="my-3 block text-2xl font-semibold text-white">
                    2% commission on every booking for as long as that apartment
                    remains active.
                  </span>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent text-white hover:bg-white hover:text-[#090857] transition-all"
                >
                  <Link
                    href="https://forms.gle/W7AEVzv7WmZZiEGV8"
                    target="_blank"
                  >
                    Get Started
                  </Link>
                </Button>
              </div>

              <div>
                <div className="text-sm font-medium text-white">
                  Rentango handles:
                </div>

                <ul className="mt-4 list-outside space-y-3 text-sm text-white">
                  {RENTANGO_HANDLES.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3 text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
