import type { Metadata } from "next";
import AuthPage from "@/components/ui/shared/auth-page";

export const metadata: Metadata = {
  title: "Create an account | Healthy Bari",
  description: "Create your Healthy Bari account.",
};

export default function RegisterPage() {
  return <AuthPage mode="register" />;
}
