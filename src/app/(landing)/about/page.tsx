import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, Sprout } from "lucide-react";
import BrandLogo from "@/components/ui/shared/brand-logo";

export const metadata: Metadata = {
  title: "About | Healthy Bari",
  description: "Learn about Healthy Bari and our natural food range.",
};

const values = [
  {
    title: "Everyday essentials",
    description: "Honey, nuts, black cumin, and garlic cumin for familiar home cooking and snacking.",
    icon: Sprout,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Clear information",
    description: "We want it to be easy to ask about product sizes, availability, and prices.",
    icon: Leaf,
    color: "bg-lime-50 text-lime-800",
  },
  {
    title: "A helpful experience",
    description: "From browsing to getting in touch, we aim to make every step feel straightforward.",
    icon: Heart,
    color: "bg-rose-50 text-rose-700",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#F6F8F0] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid container items-center gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">About Healthy Bari</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Good food belongs in every home.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Healthy Bari brings together the natural food essentials you reach for every day: honey, nuts, black cumin, and garlic cumin.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Explore our products <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="relative mx-auto flex min-h-72 w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] border border-white bg-white p-8 shadow-lg shadow-emerald-950/5 sm:min-h-96">
            <div className="absolute -right-16 -top-16 size-48 rounded-full bg-amber-100" />
            <div className="absolute -bottom-16 -left-12 size-52 rounded-full bg-emerald-100" />
            <div className="relative flex flex-col items-center text-center">
              <BrandLogo className="text-slate-900" />
              <p className="mt-7 max-w-xs text-sm leading-6 text-slate-500">
                A simple place to find pantry favorites and get the details you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto container">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">What matters to us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A thoughtful way to shop for food</h2>
            <p className="mt-4 leading-7 text-slate-600">
              We keep our focus on useful products, clear details, and friendly support.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon, color }) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
                <span className={`inline-flex size-12 items-center justify-center rounded-2xl ${color}`}>
                  <Icon className="size-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto flex container flex-col items-start justify-between gap-5 rounded-3xl bg-slate-950 px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10 sm:py-10">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Questions about a product?</h2>
            <p className="mt-2 text-slate-300">We can help with availability, sizes, and pricing.</p>
          </div>
          <Link href="/contact" className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground transition hover:bg-primary/90">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
