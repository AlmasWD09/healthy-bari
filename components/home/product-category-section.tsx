import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/lib/data/product-categories";

export default function ProductCategorySection() {
  return (
    <section id="categories" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Explore the pantry</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Find what you came for.
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Browse Healthy Bari’s everyday food categories.
            </p>
          </div>
          <Link href="/shop" className="inline-flex w-fit items-center gap-2 font-semibold text-primary hover:underline">
            View all products <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {productCategories.map(({ id, name, description, icon: Icon, tone, accent }) => (
            <Link
              key={id}
              href={`/shop#${id}`}
              className="group flex min-h-52 flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6"
            >
              <span className={`inline-flex size-12 items-center justify-center rounded-2xl ${accent} ${tone}`}>
                <Icon className="size-6" strokeWidth={1.8} />
              </span>
              <span className="mt-5 text-lg font-bold text-slate-900">{name}</span>
              <span className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
