import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="min-h-[calc(100vh - 64px)] ">
      <div className="py-24 md:pb-32 lg:pb-16 items-end flex  min-h-svh">
        <div className="absolute top-20 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-[#090857]/80 mix-blend-multiply z-10 border-8 border-white rounded-3xl" />
        <Image
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFByb3BlcnR5fGVufDB8fDB8fHww"
          alt="Hero"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="border-8 border-white rounded-3xl mt-20"
          // width={1000}
          // height={1000}
          // className="size-full object-cover  invert-0 dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
        />
        <div className="relative mx-auto flex w-full flex-col px-6 lg:block lg:px-12 z-20 ">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
            <h1 className="mt-8 max-w-4xl text-balance text-4xl md:text-8xl lg:mt-16 xl:text-5xl text-white font-semibold text-shadow-2xs text-shadow-black">
              Can your apartment make money every single month?{" "}
            </h1>
            <p className="mt-8 max-w-4xl text-balance text-md text-white font-medium text-shadow-2xs text-shadow-black">
              Most apartments sit empty, underpriced, or poorly marketed.
              Rentango helps you turn your apartment into a booked,
              income-producing asset — without stress.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full pl-5 pr-3 text-base bg-[#090857] text-white hover:bg-white hover:text-[#090857] transition-all"
              >
                <Link
                  href="https://forms.gle/HVhxJ8V9UTmgzLRv6"
                  target="_blank"
                >
                  <span className="text-nowrap">
                    👉 Check if your apartment qualifies
                  </span>
                  <ChevronRight className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
