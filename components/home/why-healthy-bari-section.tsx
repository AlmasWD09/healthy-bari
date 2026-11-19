import { ClipboardList, Leaf, MessageCircle } from "lucide-react";

const reasons = [
  {
    title: "Everyday pantry favorites",
    description: "Explore honey, nuts, black cumin, and garlic cumin in one place.",
    icon: Leaf,
  },
  {
    title: "Clear product details",
    description: "Ask us about available sizes, current stock, and pricing before you order.",
    icon: ClipboardList,
  },
  {
    title: "Helpful, direct support",
    description: "Contact Healthy Bari if you need help choosing or have a question.",
    icon: MessageCircle,
  },
];

export default function WhyHealthyBariSection() {
  return (
    <section className="bg-[#F8FAF5] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">A simpler way to shop</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Why Healthy Bari?</h2>
          <p className="mt-4 leading-7 text-slate-600">
            We keep things focused on the products you want and the information you need.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3 lg:mt-12">
          {reasons.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
              <div className="flex items-center justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Icon className="size-6" strokeWidth={1.8} />
                </span>
                <span className="text-sm font-bold tracking-widest text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
