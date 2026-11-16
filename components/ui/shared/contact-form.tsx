"use client";

import { useState, type FormEvent } from "react";

const contactEmail = "info@honeybari.com";
const fieldClassName =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(formData.get("subject")));
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setMessage("Your email app should open so you can review and send your message.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Send a message</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">How can we help?</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Submitting opens your email app with your message ready to review.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">
          Your name
          <input name="name" autoComplete="name" required placeholder="Name" className={fieldClassName} />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Email address
          <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={fieldClassName} />
        </label>
      </div>

   

      <label className="mt-4 block text-sm font-semibold text-slate-700">
        Message
        <textarea name="message" rows={4} required placeholder="Write your message here..." className={`${fieldClassName} resize-y`} />
      </label>

      {message && <p role="status" className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800">{message}</p>}

      <button type="submit" className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-5 font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 sm:w-auto">
        Continue to email
      </button>
    </form>
  );
}
