"use client";

import { motion } from "motion/react";
import { ImageIcon } from "lucide-react";

export function ThePicture() {
  return (
    <section className="relative overflow-hidden  ">
      <div className="max-w-340 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <p
              className="inline-flex items-center gap-x-2 bg-violet-100 border border-[#090857] text-xs text-[#090857] p-2 px-3 rounded-full transition hover:border-line-3 focus:outline-hidden focus:border-line-3"
              onClick={() => {
                window.open("https://forms.gle/W7AEVzv7WmZZiEGV8", "_blank");
              }}
            >
              Earn From Shortlet
            </p>
          </div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block text-4xl font-medium lg:text-5xl text-foreground">
              No capital. No property. Just access.
            </h1>
          </div>
          {/* End Title */}

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-muted-foreground-2">
              You list one apartment today. You don&apos;t own it. You
              don&apos;t manage it. Over the next 24 months, that apartment
              keeps getting booked.{" "}
              <span className="text-[#090857] font-semibold">
                Every booking = income.{" "}
              </span>
              No extra work. No chasing. No stress. Just recurring money from
              something you introduced once. That&apos;s how silent wealth is
              built.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
