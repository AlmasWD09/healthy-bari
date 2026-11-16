import Navbar from "@/components/ui/shared/navbar";
import type { childrenProps } from "../types";
import Footer from "@/components/ui/shared/footer";

export default function LandingPageLayout({ children }: childrenProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
