"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";

type AuthFormProps = {
  mode: "login" | "register";
};

const inputClassName =
  "mt-1.5 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10";

export default function AuthForm({ mode }: AuthFormProps) {
  const isRegister = mode === "register";
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(
      "Your form is ready, but account sign-in is not connected yet. Your details were not sent.",
    );
  }

  return (
    <section className="auth-card w-full rounded-3xl bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8">
      <div className="auth-heading mb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {isRegister ? "Join Healthy Bari" : "Welcome back"}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {isRegister ? "Create your account" : "Sign in to your account"}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {isRegister
            ? "Create an account to make shopping for natural goodness easier."
            : "Enter your details to continue to Healthy Bari."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form-fields space-y-3.5 sm:space-y-4">
        {isRegister && (
          <div>
            <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">
              Full name
            </label>
            <div className="relative">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
                className={`${inputClassName} pl-12`}
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-700">
            Email address
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className={`${inputClassName} pl-12`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-semibold text-slate-700">
            Password
          </label>
          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
            <input
              id="password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              autoComplete={isRegister ? "new-password" : "current-password"}
              placeholder="At least 8 characters"
              minLength={8}
              required
              className={`${inputClassName} pl-12 pr-12`}
            />
            <button
              type="button"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
              onClick={() => setPasswordVisible((visible) => !visible)}
              className="absolute right-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              {passwordVisible ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </div>
        </div>

        {!isRegister && (
          <div className="flex items-center justify-between gap-3 text-sm">
            <label className="inline-flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                name="rememberMe"
                className="size-4 rounded border-slate-300 accent-primary"
              />
              Remember me
            </label>
            <Link href="/forgot-password" className="font-semibold text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
        )}

        {isRegister && (
          <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
            <input
              type="checkbox"
              name="terms"
              required
              className="mt-1 size-4 shrink-0 rounded border-slate-300 accent-primary"
            />
            <span>
              I agree to the <Link href="/terms" className="font-semibold text-primary hover:underline">Terms &amp; Conditions</Link> and <Link href="/privacy-policy" className="font-semibold text-primary hover:underline">Privacy Policy</Link>.
            </span>
          </label>
        )}

        {feedback && (
          <p
            role="status"
            className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6 text-slate-700"
          >
            {feedback}
          </p>
        )}

        <button
          type="submit"
          className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
        >
          {isRegister ? "Create account" : "Sign in"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-slate-500">
        {isRegister ? "Already have an account? " : "New to Healthy Bari? "}
        <Link
          href={isRegister ? "/login" : "/register"}
          className="font-semibold text-primary hover:underline"
        >
          {isRegister ? "Sign in" : "Create an account"}
        </Link>
      </p>
    </section>
  );
}
