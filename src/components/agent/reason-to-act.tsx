"use client";

import { motion } from "motion/react";
import { Zap, Gift, Repeat, Building } from "lucide-react";

import Image from "next/image";

export function ReasonToAct() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Why you should act now
          </h2>
          <p className="max-w-sm sm:ml-auto">
            Just like Uber and Bolt, this phase won&apos;t last forever. Early
            connectors benefit the most.
          </p>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-[#090857]" />
              <h3 className="text-sm font-medium text-[#090857]">Expanding</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Rentango is still expanding its network of apartments and hosts.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Building className="size-4 text-[#090857]" />
              <h3 className="text-sm font-medium text-[#090857]">
                Building supply
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Rentango is still building its supply of apartments and hosts.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Gift className="size-4 text-[#090857]" />
              <h3 className="text-sm font-medium text-[#090857]">
                Rewarding referrers
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Rentango is still rewarding referrers for their referrals.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Repeat className="size-4 text-[#090857]" />

              <h3 className="text-sm font-medium text-[#090857]">
                Recurring commissions
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Rentango is still paying recurring commissions to referrers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
