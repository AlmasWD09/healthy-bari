import type { Metadata } from "next";
import { Suspense } from "react";
import PasswordRecoveryPage from "@/components/ui/shared/password-recovery-page";

export const metadata: Metadata = {
  title: "Verify your email | Healthy Bari",
  description: "Verify your email to reset your Healthy Bari password.",
};

async function OtpVerifyContent({
  searchParams,
}: {
  searchParams: Promise<{ email?: string | string[] }>;
}) {
  const params = await searchParams;
  const email = Array.isArray(params.email) ? params.email[0] : params.email;
  return <PasswordRecoveryPage mode="otp-verify" email={email} />;
}

export default function OtpVerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string | string[] }>;
}) {
  return (
    <Suspense fallback={<PasswordRecoveryPage mode="otp-verify" />}>
      <OtpVerifyContent searchParams={searchParams} />
    </Suspense>
  );
}
