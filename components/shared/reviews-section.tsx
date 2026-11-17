"use client";

import { useEffect, useRef, useState } from "react";
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
    image: "/reviews/customer-01.svg",
    text: "The honey tastes lovely and fresh. It has become a favorite at our breakfast table.",
    product: "Lychee Flower Honey",
  },
  {
    name: "Healthy Bari customer",
    image: "/reviews/customer-02.svg",
    text: "I had a question before ordering and got a helpful, friendly reply. The whole experience felt easy.",
    product: "Customer care",
  },
  {
    name: "Healthy Bari customer",
    image: "/reviews/customer-03.svg",
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
  const touchStartX = useRef<number | null>(null);
  const review = reviews[activeIndex];

  useEffect(() => {
    if (!autoPlay || isPaused || isHovered || isFocused || reviews.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length);
    }, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [autoPlay, autoPlayInterval, isFocused, isHovered, isPaused, reviews.length]);

  if (!review || reviews.length === 0) return null;

  const goTo = (index: number) => setActiveIndex((index + reviews.length) % reviews.length);
  const rating = Math.min(5, Math.max(0, review.rating ?? 5));

  return (
    <section aria-label="Customer reviews" className={`bg-[#faf9f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end lg:gap-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
              <span aria-hidden="true" className="h-px w-7 bg-amber-600" /> {eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.7rem]">{title}</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e8e5db] bg-white px-3.5 py-2">
              <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} className="size-3.5 fill-amber-400 text-amber-500" />)}
              </span>
              <span className="text-xs font-medium text-slate-600">A little love from our customers</span>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[1.5rem] border border-[#e8e5db] bg-white shadow-[0_12px_40px_rgba(40,38,26,.055)] sm:rounded-[1.8rem]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
            }}
            onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => {
              const endX = event.changedTouches[0]?.clientX;
              if (touchStartX.current !== null && endX !== undefined) {
                const distance = endX - touchStartX.current;
                if (Math.abs(distance) > 45) goTo(activeIndex + (distance < 0 ? 1 : -1));
              }
              touchStartX.current = null;
            }}
          >
            <div className="relative min-h-[280px] p-5 sm:min-h-[300px] sm:p-8 lg:p-10">
              <div aria-hidden="true" className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-[#f2f5ef] text-emerald-800 sm:right-8 sm:top-8">
                <Quote className="size-5 rotate-180" />
              </div>
              <div key={activeIndex} className="review-slide-enter flex min-h-[238px] flex-col sm:min-h-[228px]">
                <div className="flex gap-1 pt-1" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} className={`size-4 ${index < rating ? "fill-amber-400 text-amber-500" : "text-slate-200"}`} />)}
                </div>
                <blockquote className="mt-6 max-w-3xl pr-3 text-xl font-medium leading-8 tracking-tight text-slate-800 sm:mt-8 sm:pr-12 sm:text-2xl sm:leading-9">
                  “{review.text}”
                </blockquote>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
                  <div className="flex min-w-0 items-center gap-3">
                    {review.image ? (
                      <Image src={review.image} alt={`${review.name} avatar`} width={44} height={44} className="size-11 shrink-0 rounded-full object-cover ring-2 ring-[#eaf1e8]" />
                    ) : (
                      <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#eaf1e8] text-base font-semibold text-emerald-900">
                        {review.name.trim().charAt(0).toUpperCase()}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">{review.name}</p>
                      <p className="mt-0.5 truncate text-xs text-slate-500">{review.product ?? review.location ?? "Healthy Bari customer"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2" aria-label="Review navigation">
                    <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous review" className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-emerald-800 hover:bg-emerald-50 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
                      <ArrowLeft className="size-4" />
                    </button>
                    <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next review" className="inline-flex size-10 items-center justify-center rounded-full bg-[#155b32] text-white transition hover:bg-[#104827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3.5 sm:px-8 lg:px-10">
              <div className="flex items-center gap-1.5" aria-label={`Review ${activeIndex + 1} of ${reviews.length}`}>
                {reviews.map((item, index) => (
                  <button key={`${item.name}-${index}`} type="button" onClick={() => goTo(index)} aria-label={`Show review ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} className={`h-1.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 ${index === activeIndex ? "w-7 bg-emerald-800" : "w-1.5 bg-slate-300 hover:bg-slate-500"}`} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                {autoPlay && reviews.length > 1 && (
                  <button type="button" onClick={() => setIsPaused((paused) => !paused)} aria-label={isPaused ? "Play reviews automatically" : "Pause automatic reviews"} className="inline-flex size-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
                    {isPaused ? <Play className="size-3.5 fill-current" /> : <Pause className="size-3.5" />}
                  </button>
                )}
                <span className="text-xs font-medium tabular-nums text-slate-500">{String(activeIndex + 1).padStart(2, "0")} <span className="px-1 text-slate-300">/</span> {String(reviews.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
