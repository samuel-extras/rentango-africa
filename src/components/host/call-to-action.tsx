import Link from "next/link";
import { Button } from "../ui/button";

export function CallToAction() {
  return (
    <div className="max-w-7xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-linear-to-b from-[#090857] to-[#090857] rounded-2xl p-10 text-white">
      <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-purple-600/10 backdrop-blur border border-purple-500/40 text-sm px-2.5">
        <p className=" font-medium">
          No pressure. No obligation. Just clarity.
        </p>
      </div>
      <h1 className="text-4xl md:text-5xl md:leading-[60px] font-semibold max-w-xl mt-5 bg-linear-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
        Let’s see if your apartment qualifies.
      </h1>
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row ">
        <Button
          size="lg"
          className="px-8 py-3 text-white bg-[#090857] hover:bg-white transition-all rounded-full uppercase text-sm mt-8 cursor-pointer"
          variant="outline"
          asChild
        >
          <Link href="https://forms.gle/HVhxJ8V9UTmgzLRv6" target="_blank">
            Start the assessment
          </Link>
        </Button>
        <Button
          size="lg"
          className="px-8 py-3 text-[#090857] bg-white hover:bg-white/80 transition-all rounded-full uppercase text-sm mt-8 cursor-pointer"
          asChild
        >
          <Link href="https://forms.gle/HVhxJ8V9UTmgzLRv6" target="_blank">
            Book a clarity call
          </Link>
        </Button>
      </div>
    </div>
  );
}

<div className="bg-background">
  {/* Approach */}
  <div className="max-w-7xl px-4 xl:px-8 py-10  mx-auto bg-[#090857] rounded-3xl space-y-6">
    <h2 className="font-semibold text-2xl text-white md:text-3xl md:leading-tight">
      HOW IT WORKS
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4">
      <div className="bg-white rounded-xl p-6 space-y-2.5">
        <div className="flex items-center gap-2 bg-[#bfc0d3] rounded-md py-1.5 px-2.5 w-fit">
          <p className="text-sm text-black"> Step 1</p>
        </div>
        <h3 className="font-semibold text-base text-foreground">
          Quick Assessment (2 minutes)
        </h3>
        <p className=" text-foreground">
          Tell us about your apartment location, size, and availability.
        </p>
      </div>
      <div className="bg-white rounded-xl p-6 space-y-2.5">
        <div className="flex items-center gap-2 bg-[#bfc0d3] rounded-md py-1.5 px-2.5 w-fit">
          <p className="text-sm text-black"> Step 2</p>
        </div>
        <h3 className="font-semibold text-base text-foreground">
          Clarity Call (15 minutes)
        </h3>
        <p className=" text-foreground">
          We review if your apartment fits shortlet demand and earning
          potential.
        </p>
      </div>
      <div className="bg-white rounded-xl p-6 space-y-2.5">
        <div className="flex items-center gap-2 bg-[#bfc0d3] rounded-md py-1.5 px-2.5 w-fit">
          <p className="text-sm text-black"> Step 3</p>
        </div>
        <h3 className="font-semibold text-base text-foreground">
          Get Listed & Start Earning
        </h3>
        <p className=" text-foreground">
          If approved, your apartment goes live and starts receiving bookings.
        </p>
      </div>
    </div>
  </div>
</div>;
