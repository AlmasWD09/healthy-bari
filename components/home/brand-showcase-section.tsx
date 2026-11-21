"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/home/market-honey.jpg",
    alt: "A jar of golden honey with a wooden dipper, nuts, and honeycomb",
    fit: "cover",
    position: "center 52%",
  },
  {
    image: "/home/honey-mustard-flower.jpg",
    alt: "A bee gathering nectar from mustard flowers",
    fit: "cover",
    position: "center 52%",
  },
  {
    image: "/home/honey-sundarbans.jpg",
    alt: "A river winding through the green Sundarbans forest",
    fit: "cover",
    position: "center 62%",
  },
];

export default function BrandShowcaseSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="px-3 pt-4 sm:px-5 sm:pt-6 lg:px-7" aria-label="Healthy Bari photo slider">
      <div className="home-hero-swiper mx-auto max-w-7xl overflow-hidden border border-[#e8e5d9] bg-[#f3f1e9] shadow-[0_18px_55px_rgba(54,49,30,.12)]">
        {isMounted ? (
        <Swiper
          modules={[A11y, Autoplay, Pagination]}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={700}
          a11y={{ enabled: true }}
          className="h-[360px] sm:h-[440px] lg:h-[500px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.image}>
              <div className="relative h-full overflow-hidden bg-[#eae8df]">
                {slide.fit === "contain" && (
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    sizes="100vw"
                    className="home-hero-backdrop object-cover"
                    style={{ objectPosition: slide.position }}
                  />
                )}
              
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className={slide.fit === "contain" ? "home-hero-photo object-contain" : "home-hero-photo object-cover"}
                  style={{ objectPosition: slide.position }}
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 border-[5px] border-white/35 sm:border-[7px]" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#201b12]/20 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        ) : (
          <div aria-hidden="true" className="h-[360px] bg-[#eae8df] sm:h-[440px] lg:h-[500px]" />
        )}
      </div>
    </section>
  );
}
