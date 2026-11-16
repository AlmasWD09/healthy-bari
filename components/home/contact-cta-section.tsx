import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ContactCtaSection() {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
      <div className="container mx-auto flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-slate-950 px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10 sm:py-10 lg:px-12">
        <div className="flex items-start gap-4">
          <span className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-amber-300 sm:inline-flex">
            <MessageCircle className="size-6" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">Need a hand?</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Ask us about a product.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              We can help with current availability, pack sizes, and prices.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Contact us <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
