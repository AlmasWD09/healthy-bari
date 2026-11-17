import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Leaf, MessageCircle } from "lucide-react";
import { productCategories } from "@/lib/data/product-categories";

export const metadata: Metadata = {
  title: "Shop | Healthy Bari",
  description: "Browse honey and pantry favorites from Healthy Bari. Ask us about current sizes, availability, and prices.",
};

const products = [
  {
    name: "Lychee Flower Honey",
    detail: "Floral, naturally sweet honey",
    image: "/top-selling/lychee-flower-honey.png",
    alt: "Healthy Bari lychee flower honey jar with lychee fruit and honey",
    badge: "Healthy Bari pick",
  },
  {
    name: "Black Cumin Honey",
    detail: "Honey with black cumin seeds",
    image: "/top-selling/black-cumin-honey.jpg",
    alt: "Honey jar beside a bowl of black cumin seeds",
    badge: "A pantry favorite",
  },
  {
    name: "Golden Honey",
    detail: "A versatile everyday staple",
    image: "/top-selling/honey-product-03.jpg",
    alt: "Golden honey in a glass jar with a wooden honey dipper",
    badge: "Everyday goodness",
  },
  {
    name: "Pure Honey",
    detail: "Enjoy with breakfast, tea, and more",
    image: "/top-selling/honey-product-04.jpg",
    alt: "A jar of golden honey with a wooden honey dipper",
    badge: "Naturally sweet",
  },
  {
    name: "Honeycomb Honey",
    detail: "Honey with a touch of the comb",
    image: "/top-selling/honey-product-05.jpg",
    alt: "A jar of honeycomb honey with a wooden honey dipper",
    badge: "A little something special",
  },
];

export default function ShopPage() {
  return (
    <div className="bg-[#fbfaf6]">
      <section className="relative overflow-hidden bg-[#f3f3f1] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_.92fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/75 px-3.5 py-2 text-xs font-semibold tracking-wide text-emerald-900">
              <Leaf className="size-4 text-emerald-700" /> GOOD FOOD FOR EVERYDAY
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Bring a little more <span className="text-[#b65b1b]">goodness</span> to your table.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore Healthy Bari favorites, from fragrant flower honey to everyday pantry essentials. Find something you love and ask us about today’s availability.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#shop-products" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#155b32] px-6 text-sm font-semibold text-white transition hover:bg-[#104827]">
                Browse products <ArrowDown className="size-4" />
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 text-sm font-semibold text-slate-800 transition hover:border-emerald-800 hover:text-emerald-900">
                <MessageCircle className="size-4" /> Ask us a question
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              {["Thoughtful pantry picks", "Friendly product support", "Made for everyday tables"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><Check className="size-4 text-emerald-700" />{item}</span>
              ))}
            </div>
          </div>

          <Link href="#shop-products" className="group relative mx-auto block w-full max-w-xl overflow-hidden rounded-[1.75rem] bg-white shadow-[0_22px_65px_rgba(50,46,30,.13)]" aria-label="Explore Lychee Flower Honey">
            <div className="relative aspect-[1.12] sm:aspect-[1.28]">
              <Image src="/top-selling/lychee-flower-honey.png" alt="Healthy Bari Lychee Flower Honey" fill priority sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#17160f]/75 via-[#17160f]/20 to-transparent p-5 pt-20 text-white sm:p-7 sm:pt-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">From the Healthy Bari pantry</p>
                <p className="mt-2 text-xl font-semibold sm:text-2xl">Lychee Flower Honey</p>
              </div>
              <span className="mb-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:bg-amber-300"><ArrowRight className="size-5" /></span>
            </div>
          </Link>
        </div>
      </section>

      <nav aria-label="Shop categories" className="border-y border-[#e9e7df] bg-white px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="mr-1 hidden text-sm font-semibold text-slate-500 sm:inline">Browse:</span>
          {productCategories.map(({ id, name }) => (
            <a key={id} href={`#${id}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-800 hover:bg-emerald-50 hover:text-emerald-900">{name}</a>
          ))}
        </div>
      </nav>

      <section id="shop-products" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">A few things we love</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Shop the pantry</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">Browse the collection and get in touch for current pack sizes, prices, and availability.</p>
            </div>
            <Link href="/contact" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-900 hover:underline">Need a recommendation? <ArrowRight className="size-4" /></Link>
          </div>

          <div id="honey" className="mt-8 scroll-mt-28 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product) => (
              <article key={product.name} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e9e7df] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(54,49,30,.1)]">
                <Link href="/contact" className="relative block aspect-[.95] overflow-hidden bg-[#f3f1e9]" aria-label={`Ask about ${product.name}`}>
                  <Image src={product.image} alt={product.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 20vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.045]" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-emerald-900 shadow-sm sm:text-xs">{product.badge}</span>
                </Link>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">{product.detail}</p>
                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-4 mt-5">
                    <span className="text-xs font-medium text-slate-500">Ask for price</span>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#a94f16] transition-colors hover:text-emerald-900">Enquire <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Other product categories" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">More for your kitchen</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Explore the rest of the pantry</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Looking for nuts, seeds, or savory essentials? Ask us what is available.</p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {productCategories.filter(({ id }) => id !== "honey").map(({ id, name, description, icon: Icon, accent, tone }) => (
              <article id={id} key={id} className="scroll-mt-28 flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#fbfaf6] p-5 sm:p-6">
                <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl ${accent} ${tone}`}><Icon className="size-5" /></span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-900">{name}</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{description}</p>
                  <Link href="/contact" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-900 hover:underline">Ask about {name.toLowerCase()} <ArrowRight className="size-3.5" /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#173d2b] px-6 py-6 text-center text-white sm:flex-row sm:px-8 sm:text-left">
            <div><h2 className="text-lg font-semibold">Have a question about a product?</h2><p className="mt-1 text-sm text-white/75">We’re happy to help with sizes, availability, and prices.</p></div>
            <Link href="/contact" className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#173d2b] transition hover:bg-amber-100">Talk to us <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
