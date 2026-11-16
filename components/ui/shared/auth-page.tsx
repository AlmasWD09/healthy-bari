import AuthForm from "@/components/ui/shared/auth-form";
import BrandLogo from "@/components/ui/shared/brand-logo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type AuthPageProps = {
  mode: "login" | "register";
};

export default function AuthPage({ mode }: AuthPageProps) {
  return (
    <div className="auth-viewport bg-slate-50 px-4 py-3 sm:px-6">
      <div className="auth-content">
        <div className="auth-topbar flex items-center justify-between gap-3">
          <Link href="/" aria-label="Healthy Bari home">
            <BrandLogo className="auth-brand-logo" showTagline={false} />
          </Link>
          <Link
            href="/"
            className="auth-home-link inline-flex shrink-0 items-center gap-1 rounded-lg px-1 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:gap-2 sm:px-2 sm:text-sm"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </div>
        <div className="w-full">
          <AuthForm mode={mode} />
        </div>
      </div>
    </div>
  );
}
