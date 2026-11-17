"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    name: "Lychee Flower Honey",
    detail: "Floral honey",
    image: "/home/showcase-honey-jars.jpg",
    alt: "Two jars of natural honey with a wooden honey dipper",
    href: "/shop#honey",
  },
  {
    name: "Black Cumin Flower Honey",
    detail: "Rich floral honey",
    image: "/home/showcase-honey-nature.jpg",
    alt: "Golden honey jars arranged outdoors",
    href: "/shop#honey",
  },
  {
    name: "Mustard Flower Honey",
    detail: "Golden mustard blossom honey",
    image: "/home/showcase-honey-flower.jpg",
    alt: "Golden honey beside a mustard flower",
    href: "/shop#honey",
  },
  {
    name: "Sundarbans Honey",
    detail: "Forest honey",
    image: "/home/honey-sundarbans.jpg",
    alt: "A river flowing through the Sundarbans forest",
    href: "/shop#honey",
  },
  {
    name: "Honey Nuts",
    detail: "Honey with crunchy nuts",
    image: "/home/honey-nuts.jpg",
    alt: "Honey nuts and honeycomb arranged together",
    href: "/shop#nuts",
  },
];

export default function NewArrivalsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-[#f3f3f1] px-4 py-9 sm:px-6 sm:py-12 lg:px-8" aria-label="New honey and pantry products">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 sm:gap-4">
          <span aria-hidden="true" className="h-px flex-1 bg-[#d8d8d4]" />
          <h2 className="shrink-0 text-center text-sm font-semibold uppercase tracking-wide text-slate-950 sm:text-base">New Arrivals</h2>
          <span aria-hidden="true" className="h-px flex-1 bg-[#d8d8d4]" />
        </div>

        <div className="mt-7 sm:mt-9">
          {isMounted ? (
            <Swiper
              modules={[A11y, Autoplay, Navigation, Pagination]}
              slidesPerView={1.2}
              spaceBetween={12}
              loop
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              speed={650}
              a11y={{ enabled: true }}
              breakpoints={{
                480: { slidesPerView: 1.7, spaceBetween: 14 },
                640: { slidesPerView: 2.3, spaceBetween: 16 },
                900: { slidesPerView: 3, spaceBetween: 18 },
                1150: { slidesPerView: 4, spaceBetween: 18 },
              }}
              className="new-arrivals-swiper !pb-12"
            >
              {products.map((product, index) => (
                <SwiperSlide key={product.name} className="h-auto">
                  <article className="group flex h-full min-h-[370px] flex-col overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg sm:min-h-[400px]">
                    <Link href={product.href} className="relative block aspect-[1.08] overflow-hidden bg-white" aria-label={`View ${product.name}`}>
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        priority={index < 2}
                        sizes="(max-width: 640px) 82vw, (max-width: 900px) 43vw, (max-width: 1150px) 31vw, 24vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col items-center px-3 pb-4 pt-3 text-center sm:px-4 sm:pb-5 sm:pt-4">
                      <h3 className="line-clamp-2 min-h-10 text-xs font-medium leading-5 text-slate-800 sm:text-sm">{product.name}</h3>
                      <p className="mt-1 line-clamp-1 text-[11px] text-slate-500 sm:text-xs">{product.detail}</p>
                      <Link
                        href={product.href}
                        className="mt-auto inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-amber-500 bg-white px-3 text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 sm:mt-4 sm:text-sm"
                      >
                        <ShoppingCart className="size-3.5" /> Add To Cart
                      </Link>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div aria-hidden="true" className="h-[420px] bg-white sm:h-[460px]" />
          )}
        </div>
      </div>
    </section>
  );
}
