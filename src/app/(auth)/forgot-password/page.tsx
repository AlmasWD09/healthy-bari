import type { Metadata } from "next";
import PasswordRecoveryPage from "@/components/ui/shared/password-recovery-page";

export const metadata: Metadata = {
  title: "Forgot password | Healthy Bari",
  description: "Recover access to your Healthy Bari account.",
};

export default function ForgotPasswordPage() {
  return <PasswordRecoveryPage mode="forgot-password" />;
}
