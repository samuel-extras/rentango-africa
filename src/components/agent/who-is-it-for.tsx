"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface WhoIsItForItem {
  id: string;
  title: string;
  image: string;
}

const data = [
  {
    id: "Real estate agents",
    title: "Real estate agents",

    image:
      "https://plus.unsplash.com/premium_photo-1679856789387-b2b6212de338?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlYWwlMjBlc3RhdGUlMjBhZ2VudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "Brokers & marketers",
    title: "Brokers & marketers",
    image:
      "https://images.unsplash.com/photo-1711606706060-52ea35a489dd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxicm9rZXJzfGVufDB8fDB8fHww",
  },
  {
    id: "Side-hustlers",
    title: "Side-hustlers",
    image:
      "https://plus.unsplash.com/premium_photo-1679941668764-886c68e7bc03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: " Young professionals",
    title: " Young professionals",
    image:
      "https://images.unsplash.com/photo-1765648496210-25b8dbd397c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHlvdW5nJTIwYmxhY2slMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: " People with landlord access",
    title: " People with landlord access",
    image:
      "https://plus.unsplash.com/premium_photo-1679856789424-f4dc3c855845?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: " Anyone who wants recurring income without stress",
    title: " Anyone who wants recurring income without stress",
    image:
      "https://images.unsplash.com/photo-1737529577010-b7ee9f819b69?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlJTIwbW9uZXl8ZW58MHx8MHx8fDA%3D",
  },
];

export const WhoIsItFor = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 ">
      <div className=" px-6 md:px-8  mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-12 lg:mb-14">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-medium lg:text-5xl">
              Who this is for
            </h2>
            <p className="max-w-lg ">
              If you can connect people, you can earn here.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto group "
            >
              <ArrowLeft className="size-5 text-foreground group-hover:text-primary" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto group"
            >
              <ArrowRight className="size-5 text-foreground group-hover:text-primary" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[280px] pl-[20px] lg:max-w-[300px] overflow-hidden"
              >
                <div className="group rounded-xl overflow-hidden relative">
                  <div className="absolute  h-full w-full bg-linear-to-b from-transparent via-transparent to-[#090857]/80 mix-blend-multiply z-10" />
                  <div className="group relative h-full min-h-96 max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8 z-20">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#090857]" : "bg-[#090857]/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
