import Link from "next/link";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import BrandLogo from "@/components/ui/shared/brand-logo";
import { productCategories } from "@/lib/data/product-categories";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#F6F8F0]">
      <div className="container mx-auto grid items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
            <Leaf className="size-4" /> Natural food, thoughtfully brought home
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            A little more goodness in every day.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Find honey, nuts, black cumin, and garlic cumin for your kitchen and everyday table.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Explore products <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 font-semibold text-slate-800 transition hover:border-primary hover:text-primary"
            >
              Get to know us
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <Sparkles className="size-4 text-amber-600" />
            Simple pantry favorites, all in one place
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div aria-hidden="true" className="absolute -right-10 -top-10 size-40 rounded-full bg-amber-200/70 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-10 -left-10 size-48 rounded-full bg-emerald-200/80 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-800">Welcome to Healthy Bari</p>
                <h2 className="mt-2 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                  Good things for your pantry.
                </h2>
              </div>
              <BrandLogo showTagline={false} className="hidden min-[420px]:inline-flex" />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
              {productCategories.map(({ id, name, icon: Icon, tone, accent }) => (
                <Link
                  href={`/shop#${id}`}
                  key={id}
                  className={`flex min-h-28 flex-col justify-between rounded-2xl ${accent} p-4 transition-transform hover:-translate-y-1 sm:min-h-32 sm:p-5`}
                >
                  <span className={`inline-flex size-10 items-center justify-center rounded-xl bg-white ${tone}`}>
                    <Icon className="size-5" />
                  </span>
                  <span className="font-bold text-slate-900">{name}</span>
                </Link>
              ))}
            </div>
            <Link href="/shop#products" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Browse all categories <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
