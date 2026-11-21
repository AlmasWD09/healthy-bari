"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff, KeyRound, LockKeyhole, Mail } from "lucide-react";

type RecoveryMode = "forgot-password" | "otp-verify" | "reset-password";

const inputClassName =
  "mt-1.5 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10";

const copy: Record<RecoveryMode, { eyebrow: string; title: string; description: string; button: string }> = {
  "forgot-password": {
    eyebrow: "Account recovery",
    title: "Forgot your password?",
    description: "Enter the email address linked to your account and we’ll send you a verification code.",
    button: "Send verification code",
  },
  "otp-verify": {
    eyebrow: "Verify your email",
    title: "Enter your OTP code",
    description: "We sent a 6-digit verification code to your email. Enter it below to continue.",
    button: "Verify code",
  },
  "reset-password": {
    eyebrow: "Almost there",
    title: "Create a new password",
    description: "Choose a strong password you haven’t used before.",
    button: "Reset password",
  },
};

export default function PasswordRecoveryForm({ mode, initialEmail = "" }: { mode: RecoveryMode; initialEmail?: string }) {
  const router = useRouter();
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const details = copy[mode];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    if (mode === "forgot-password") {
      const submittedEmail = String(form.get("email") ?? "");
      setEmail(submittedEmail);
      router.push(`/otp-verify?email=${encodeURIComponent(submittedEmail)}`);
      return;
    }

    if (mode === "otp-verify") {
      router.push("/reset-password");
      return;
    }

    const password = String(form.get("password") ?? "");
    const confirmPassword = String(form.get("confirmPassword") ?? "");
    if (password !== confirmPassword) {
      setFeedback("Your passwords don’t match. Please check and try again.");
      return;
    }

    setFeedback("Your password form is ready, but password reset is not connected yet. Your password was not changed.");
  }

  return (
    <section className="auth-card w-full rounded-3xl bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8">
      <div className="auth-heading mb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{details.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{details.title}</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">{details.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form-fields space-y-3.5 sm:space-y-4">
        {mode === "forgot-password" && (
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email address</label>
            <div className="relative">
              <Mail aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className={`${inputClassName} pl-12`} />
            </div>
          </div>
        )}

        {mode === "otp-verify" && (
          <div>
            <label htmlFor="otp" className="text-sm font-semibold text-slate-700">6-digit code</label>
            <div className="relative">
              <KeyRound aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <input id="otp" name="otp" type="text" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} placeholder="000000" aria-describedby="otp-hint" required className={`${inputClassName} pl-12 text-center tracking-[0.45em]`} />
            </div>
            <p id="otp-hint" className="mt-2 text-xs text-slate-500">{email ? <>Code sent to <span className="font-medium text-slate-700">{email}</span></> : "Check your email for the verification code."}</p>
          </div>
        )}

        {mode === "reset-password" && (
          <>
            <div>
              <label htmlFor="password" className="text-sm font-semibold text-slate-700">New password</label>
              <div className="relative">
                <LockKeyhole aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                <input id="password" name="password" type={newPasswordVisible ? "text" : "password"} autoComplete="new-password" minLength={8} placeholder="At least 8 characters" required className={`${inputClassName} pl-12 pr-12`} />
                <button type="button" onClick={() => setNewPasswordVisible((visible) => !visible)} className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={newPasswordVisible ? "Hide new password" : "Show new password"}>
                  {newPasswordVisible ? <EyeOff aria-hidden="true" className="size-5" /> : <Eye aria-hidden="true" className="size-5" />}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-700">Confirm new password</label>
              <div className="relative">
                <LockKeyhole aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                <input id="confirmPassword" name="confirmPassword" type={confirmPasswordVisible ? "text" : "password"} autoComplete="new-password" minLength={8} placeholder="Enter your password again" required className={`${inputClassName} pl-12 pr-12`} />
                <button type="button" onClick={() => setConfirmPasswordVisible((visible) => !visible)} className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={confirmPasswordVisible ? "Hide confirm password" : "Show confirm password"}>
                  {confirmPasswordVisible ? <EyeOff aria-hidden="true" className="size-5" /> : <Eye aria-hidden="true" className="size-5" />}
                </button>
              </div>
            </div>
          </>
        )}

        {feedback && <p role="status" className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6 text-slate-700">{feedback}</p>}
        <button type="submit" className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20">{details.button}</button>
      </form>

      <Link href="/login" className="mt-5 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-primary hover:underline">
        <ArrowLeft aria-hidden="true" className="size-4" /> Back to sign in
      </Link>
    </section>
  );
}
