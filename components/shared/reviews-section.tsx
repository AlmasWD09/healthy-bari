"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play, Quote, Star } from "lucide-react";

export type Review = {
  name: string;
  image?: string;
  location?: string;
  rating?: number;
  text: string;
  product?: string;
};

type ReviewsSectionProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  reviews?: Review[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

const defaultReviews: Review[] = [
  {
    name: "Healthy Bari customer",
    image: "/reviews/customer-01.jpg",
    text: "The honey tastes lovely and fresh. It has become a favorite at our breakfast table.",
    product: "Lychee Flower Honey",
  },
  {
    name: "Healthy Bari customer",
    image: "/reviews/customer-02.jpg",
    text: "I had a question before ordering and got a helpful, friendly reply. The whole experience felt easy.",
    product: "Customer care",
  },
  {
    name: "Healthy Bari customer",
    image: "/reviews/customer-03.jpg",
    text: "Good quality and carefully packed. I will be ordering again for my family.",
    product: "Pantry favorites",
  },
];

export default function ReviewsSection({
  title = "Kind words, shared with care.",
  eyebrow = "Customer reviews",
  description = "Hear from people who have welcomed Healthy Bari into their homes.",
  reviews = defaultReviews,
  className = "",
  autoPlay = true,
  autoPlayInterval = 5000,
}: ReviewsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused || isHovered || isFocused || isSliding || reviews.length < 2) return;

    const timer = window.setInterval(() => setIsSliding(true), autoPlayInterval);
    return () => window.clearInterval(timer);
  }, [autoPlay, autoPlayInterval, isFocused, isHovered, isPaused, isSliding, reviews.length]);

  if (reviews.length === 0) return null;

  const goTo = (index: number) => {
    setIsSliding(false);
    setActiveIndex((index + reviews.length) % reviews.length);
  };

  const visibleReviews = Array.from({ length: reviews.length + 1 }, (_, offset) => reviews[(activeIndex + offset) % reviews.length]);

  return (
    <section aria-label="Customer reviews" className={`bg-[#faf9f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
            <span aria-hidden="true" className="h-px w-7 bg-amber-600" /> {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
        </div>

        <div
          className="mt-9 overflow-hidden sm:mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
          }}
        >
          <div
            className={`flex w-[400%] sm:w-[200%] lg:w-[133.333333%] ${isSliding ? "transition-transform duration-500 ease-out" : "transition-none"} motion-reduce:transition-none`}
            style={{ transform: isSliding ? "translateX(-25%)" : "translateX(0)" }}
            onTransitionEnd={(event) => {
              if (event.target !== event.currentTarget || event.propertyName !== "transform" || !isSliding) return;
              setActiveIndex((index) => (index + 1) % reviews.length);
              setIsSliding(false);
            }}
          >
            {visibleReviews.map((review, index) => {
              const rating = Math.min(5, Math.max(0, review.rating ?? 5));

              return (
                <div key={`${activeIndex}-${index}`} className="w-1/4 shrink-0 px-2 pb-1">
                  <article className="flex h-full min-w-0 flex-col rounded-2xl border border-[#e8e5db] bg-white p-5 shadow-[0_8px_28px_rgba(40,38,26,.045)] sm:p-6">
                    <div className="flex items-start gap-3">
                      {review.image ? (
                        <Image src={review.image} alt="Illustrative customer portrait" width={56} height={56} className="size-14 shrink-0 rounded-full object-cover ring-2 ring-[#eaf1e8]" />
                      ) : (
                        <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#eaf1e8] text-lg font-semibold text-emerald-900">
                          {review.name.trim().charAt(0).toUpperCase()}
                        </span>
                      )}
                      <div className="min-w-0 pt-0.5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Review by</p>
                        <h3 className="mt-1 truncate text-sm font-semibold text-slate-900">{review.name}</h3>
                        <p className="mt-0.5 text-[10px] text-slate-500">Illustrative portrait</p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div className="flex shrink-0 gap-0.5" aria-label={`${rating} out of 5 stars`}>
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <Star key={starIndex} className={`size-4 ${starIndex < rating ? "fill-amber-400 text-amber-500" : "text-slate-200"}`} />
                        ))}
                      </div>
                      <span className="max-w-[55%] truncate rounded-full bg-[#f2f5ef] px-2.5 py-1 text-[10px] font-semibold text-emerald-900 sm:text-xs">
                        {review.product ?? review.location ?? "Healthy Bari"}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-1 gap-2.5 border-t border-slate-100 pt-4">
                      <Quote aria-hidden="true" className="mt-0.5 size-4 shrink-0 rotate-180 text-emerald-800" />
                      <blockquote className="text-sm leading-6 text-slate-700">{review.text}</blockquote>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3" aria-label="Review navigation">
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous review" className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-emerald-800 hover:bg-emerald-50 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
            <ArrowLeft className="size-4" />
          </button>
          <div className="flex items-center gap-1.5" aria-label={`Review ${activeIndex + 1} of ${reviews.length}`}>
            {reviews.map((review, index) => (
              <button key={`${review.name}-${index}`} type="button" onClick={() => goTo(index)} aria-label={`Show review ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} className={`h-1.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 ${index === activeIndex ? "w-7 bg-emerald-800" : "w-1.5 bg-slate-300 hover:bg-slate-500"}`} />
            ))}
          </div>
          {autoPlay && reviews.length > 1 && (
            <button type="button" onClick={() => setIsPaused((paused) => !paused)} aria-label={isPaused ? "Play reviews automatically" : "Pause automatic reviews"} className="inline-flex size-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
              {isPaused ? <Play className="size-3.5 fill-current" /> : <Pause className="size-3.5" />}
            </button>
          )}
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next review" className="inline-flex size-9 items-center justify-center rounded-full bg-[#155b32] text-white transition hover:bg-[#104827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
