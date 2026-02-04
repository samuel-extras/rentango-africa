"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, Video } from "lucide-react";
import Image from "next/image";

const LEARN_ITEMS = [
  "How the shortlet market really works",
  "How to get and list apartments without leaving your house",
  "What type of apartments make money",
  "How referrals earn 2% repeatedly",
  "How to list apartments properly",
  "How Rentango handles everything for you",
];

export function Webinar() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex "
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#090857] bg-white px-4 py-2 text-sm font-medium text-[#090857] shadow-sm">
              <Video className="size-4 text-[#090857]" />
              Free live session
            </span>
          </motion.div>{" "}
          <h2 className="relative z-10 max-w-2xl text-4xl font-medium lg:text-5xl">
            How to Earn From Shortlet Apartments Without Owning Property{" "}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px ">
              <Image
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViaW5hcnxlbnwwfHwwfHx8MA%3D%3D"
                className="rounded-[15px] shadow "
                alt="Webinar"
                width={1207}
                height={929}
              />
            </div>
          </div>
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <p className="text-base sm:text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground ">
                What you&apos;ll learn in the free live session{" "}
              </p>
            </div>
            <ul className="space-y-4 md:space-y-5 w-full mt-2">
              {LEARN_ITEMS.map((feature) => (
                <li
                  key={feature}
                  className="flex flex-row gap-2 md:gap-6 w-full items-start"
                >
                  <Check className="size-3 sm:size-4 mt-2 text-[#090857] shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p>{feature}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-[#090857] text-white hover:bg-white hover:text-[#090857] transition-all"
              asChild
            >
              <Link href="#link">
                <span>Register for free</span>
                <ChevronRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
