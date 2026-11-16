import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import BrandLogo from "@/components/ui/shared/brand-logo";

const productNames = ["Honey", "Nuts", "Black cumin", "Garlic cumin"];

export default function AboutPreviewSection() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="container mx-auto grid items-center gap-8 rounded-[2rem] bg-white sm:border sm:border-slate-200 sm:p-8 sm:shadow-sm lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:p-12">
        <div className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-3xl bg-[#F6F8F0] p-6 sm:min-h-80">
          <div aria-hidden="true" className="absolute -right-10 -top-10 size-40 rounded-full bg-amber-100" />
          <div aria-hidden="true" className="absolute -bottom-12 -left-8 size-44 rounded-full bg-emerald-100" />
          <div className="relative rounded-2xl bg-white p-5 shadow-lg shadow-emerald-950/5 sm:p-7">
            <BrandLogo className="text-slate-900" />
          </div>
        </div>

        <div className="py-2 sm:py-4">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">A little about us</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Natural food for the everyday table.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Healthy Bari brings together familiar pantry favorites and makes it easy to ask about the details before you buy.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {productNames.map((name) => (
              <li key={name} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <Check className="size-3.5" />
                </span>
                {name}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            More about Healthy Bari <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
