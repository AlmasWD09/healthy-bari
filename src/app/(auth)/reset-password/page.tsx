import type { Metadata } from "next";
import PasswordRecoveryPage from "@/components/ui/shared/password-recovery-page";

export const metadata: Metadata = {
  title: "Reset password | Healthy Bari",
  description: "Create a new password for your Healthy Bari account.",
};

export default function ResetPasswordPage() {
  return <PasswordRecoveryPage mode="reset-password" />;
}
