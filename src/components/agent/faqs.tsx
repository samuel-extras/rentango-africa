"use client";

import { motion } from "motion/react";

export default function FAQs() {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid gap-y-12 px-2 lg:grid-cols-[1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
              Frequently <br className="hidden lg:block" /> Asked{" "}
              <br className="hidden lg:block" />
              Questions
            </h2>
            <p>Objection handling</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium">Do I need money to start?</h3>
              <p className="text-muted-foreground mt-4">No.</p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Do I need to manage guests?</h3>
              <p className="text-muted-foreground mt-4">No.</p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Is this legal?</h3>
              <p className="text-muted-foreground my-4">
                Yes — fully structured and transparent.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Can I do this part-time?</h3>
              <p className="text-muted-foreground mt-4">Yes.</p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Do I earn once or repeatedly?</h3>
              <p className="text-muted-foreground mt-4">
                Repeatedly for as long as the apartment is booked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
