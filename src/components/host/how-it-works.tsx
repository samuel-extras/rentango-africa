import Link from "next/link";
import { Button } from "../ui/button";

export function HowItWorks() {
  return (
    <div className="bg-background">
      {/* Approach */}
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-4xl font-semibold">
            HOW IT WORKS (SIMPLE, FAST & FREE)
          </h2>
          <p className="mt-1 ">
            This profound insight guides our comprehensive strategy from
            meticulous research and strategic planning to the seamless execution
            of brand development and website or product deployment.
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-6 lg:aspect-none">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1589828994379-7a8869c4f519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG93JTIwaXQlMjB3b3Jrc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Features Image"
            />
          </div>
          {/* End Col */}

          {/* Timeline */}
          <div>
            {/* Heading */}
            <div className="mb-4">
              <h3 className="text-primary text-xs font-medium uppercase">
                Steps
              </h3>
            </div>
            {/* End Heading */}

            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s after:border-[#090857]">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-[#090857] text-[#090857] font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base">
                  <span className="text-foreground font-medium">
                    Quick Assessment (2 minutes):{" "}
                  </span>
                  Tell us about your apartment — location, size, and
                  availability.
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s after:border-[#090857]">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-[#090857] text-[#090857] font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base ">
                  <span className="text-foreground font-medium">
                    Clarity Call (15 minutes):{" "}
                  </span>
                  We review if your apartment fits shortlet demand and earning
                  potential.
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:-translate-x-[0.5px] after:border-s after:border-[#090857]">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-[#090857] text-[#090857] font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base ">
                  <span className="text-foreground font-medium">
                    Get Listed & Start Earning:{" "}
                  </span>
                  If approved, your apartment goes live and starts receiving
                  bookings.
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}

            <Button
              asChild
              className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#090857] border border-[#090857] text-white font-medium text-sm rounded-full focus:outline-hidden"
            >
              <Link href="https://forms.gle/HVhxJ8V9UTmgzLRv6" target="_blank">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  ></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  ></path>
                </svg>
                Schedule a call
              </Link>
            </Button>
          </div>
          {/* End Timeline */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
}
