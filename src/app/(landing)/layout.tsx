import Navbar from "@/components/ui/shared/navbar";
import type { childrenProps } from "../types";
import Footer from "@/components/ui/shared/footer";
import { CartProvider } from "@/components/cart/cart-provider";
import WhatsAppFloat from "@/components/ui/shared/whatsapp-float";

export default function LandingPageLayout({ children }: childrenProps) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </CartProvider>
  );
}
