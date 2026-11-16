import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Droplets, Leaf } from "lucide-react";
import { productCategories } from "@/lib/data/product-categories";

export const metadata: Metadata = {
  title: "Shop | Healthy Bari",
  description: "Explore honey, nuts, black cumin, and garlic cumin at Healthy Bari.",
};

export default function ShopPage() {
  return (
    <div className="overflow-hidden">
      <section className="bg-[#F6F8F0]">
        <div className="mx-auto grid container items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
              <Leaf className="size-4" /> Naturally good choices
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Goodness for your everyday table.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore honey, nuts, black cumin, and garlic cumin—all the
              pantry favorites you came to Healthy Bari for.
            </p>
            <Link
              href="#products"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Explore products <ArrowDown className="size-4" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-amber-200/60 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 size-36 rounded-full bg-emerald-200/70 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white bg-white/85 p-5 shadow-xl shadow-emerald-950/5 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-emerald-800">The Healthy Bari pantry</p>
                  <p className="mt-1 text-xs text-slate-500">Four everyday favorites</p>
                </div>
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Droplets className="size-5" />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {productCategories.map(({ id, name, icon: Icon, tone, accent }) => (
                  <a
                    href={`#${id}`}
                    key={id}
                    className={`group rounded-2xl ${accent} p-4 transition-transform hover:-translate-y-1 sm:p-5`}
                  >
                    <span className={`inline-flex size-10 items-center justify-center rounded-xl bg-white ${tone}`}>
                      <Icon className="size-5" />
                    </span>
                    <span className="mt-4 block text-sm font-bold text-slate-800 sm:text-base">{name}</span>
                  </a>
                ))}
              </div>
              <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                Need a size or price? We’re happy to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Shop by category</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A few good things for your pantry</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Choose a category to ask about current availability, sizes, and prices.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {productCategories.map(({ id, name, description, icon: Icon, tone, accent }) => (
              <article
                id={id}
                key={id}
                className="scroll-mt-28 group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                <div className={`flex aspect-[1.45] items-center justify-center rounded-2xl ${accent}`}>
                  <span className={`inline-flex size-16 items-center justify-center rounded-2xl bg-white shadow-sm ${tone}`}>
                    <Icon className="size-8" strokeWidth={1.7} />
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Ask about availability <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950 px-6 py-8 text-center text-white sm:px-10 sm:py-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Looking for something specific?</h2>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-300">
              Contact us for current product sizes, availability, and pricing.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Contact Healthy Bari
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
