import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ui/shared/contact-form";

export const metadata: Metadata = {
  title: "Contact | Healthy Bari",
  description: "Contact Healthy Bari about honey, nuts, black cumin, and garlic cumin.",
};

const contactDetails = [
  {
    title: "Call us",
    value: "+880 1700-000000",
    href: "tel:+8801700000000",
    icon: Phone,
    color: "bg-blue-50 text-primary",
  },
  {
    title: "Email us",
    value: "info@honeybari.com",
    href: "mailto:info@honeybari.com",
    icon: Mail,
    color: "bg-amber-50 text-amber-700",
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-[#F6F8F0] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto container">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">Contact Healthy Bari</p>
          <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">We’re here to help.</h1>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600 sm:text-lg">
                Ask us about honey, nuts, black cumin, garlic cumin, or anything else you need to know.
              </p>
            </div>
            <Link href="/shop" className="inline-flex w-fit items-center gap-2 font-semibold text-primary hover:underline">
              Browse products <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid container gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
          <div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactDetails.map(({ title, value, href, icon: Icon, color }) => (
                <a key={title} href={href} className="flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-primary/40 hover:shadow-md">
                  <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-2xl ${color}`}>
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-500">{title}</span>
                    <span className="mt-1 block break-all font-semibold text-slate-900">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <MapPin className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Our location</span>
                <span className="mt-1 block font-semibold text-slate-900">Fulbaria, Dhaka, Bangladesh</span>
              </span>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
              <h2 className="text-lg font-bold">Need product details?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Contact us for current availability, pack sizes, and prices.
              </p>
              <Link href="/shop" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:underline">
                See product categories <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
