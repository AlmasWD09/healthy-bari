import type { Metadata } from "next";
import AuthPage from "@/components/ui/shared/auth-page";

export const metadata: Metadata = {
  title: "Sign in | Healthy Bari",
  description: "Sign in to your Healthy Bari account.",
};

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
