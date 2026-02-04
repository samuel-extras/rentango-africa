"use client";

import { motion } from "motion/react";

import Image from "next/image";

export function WhyThisWorks() {
  return (
    <section className="py-16 md:py-32 bg-[#090857] overflow-hidden">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          The People Who Won With Uber & Bolt Didn&apos;t Drive Cars{" "}
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p className="text-white">
              Most people think the money in Uber and Bolt went to drivers.
              That’s not true.
            </p>
            <p className="text-white">
              The real winners were the early agents, the ones who simply
              introduced drivers and riders to the platform.
            </p>
            <ul className="list-inside list-disc space-y-2 text-white">
              <li>They didn’t buy cars.</li>
              <li>They didn’t drive.</li>
              <li>They didn’t work daily.</li>
            </ul>
            <p className="text-white">
              They introduced once… …and earned over and over again.
            </p>
            <p className="text-white">
              Some of them quietly became millionaires by just being early.
            </p>
            <p className="text-white">
              Today, that window is gone. Uber and Bolt no longer pay agent
            </p>
          </div>
          <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
              <Image
                src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
                className=" rounded-[12px] "
                alt="payments illustration dark"
                width={2500}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
