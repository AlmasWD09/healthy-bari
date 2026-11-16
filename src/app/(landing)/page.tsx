import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import ProductCategorySection from "@/components/home/product-category-section";
import WhyHealthyBariSection from "@/components/home/why-healthy-bari-section";
import AboutPreviewSection from "@/components/home/about-preview-section";
import ContactCtaSection from "@/components/home/contact-cta-section";

export const metadata: Metadata = {
  title: "Healthy Bari | Pure Food, Healthy Life",
  description: "Shop honey, nuts, black cumin, and garlic cumin at Healthy Bari.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductCategorySection />
      <WhyHealthyBariSection />
      <AboutPreviewSection />
      <ContactCtaSection />
    </>
  );
}
