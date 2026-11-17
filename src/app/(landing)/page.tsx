import type { Metadata } from "next";
import ProductCategorySection from "@/components/home/product-category-section";
import WhyHealthyBariSection from "@/components/home/why-healthy-bari-section";
import ContactCtaSection from "@/components/home/contact-cta-section";
import BrandShowcaseSection from "@/components/home/brand-showcase-section";
import NewArrivalsSection from "@/components/home/new-arrivals-section";
import TopSellingSection from "@/components/home/top-selling-section";
import ReviewsSection from "@/components/shared/reviews-section";

export const metadata: Metadata = {
  title: "Healthy Bari | Pure Food, Healthy Life",
  description: "Shop honey, nuts, black cumin, and garlic cumin at Healthy Bari.",
};

export default function HomePage() {
  return (
    <>
      <BrandShowcaseSection />
      <NewArrivalsSection />
      <TopSellingSection />
      <ReviewsSection />
      <ProductCategorySection />
      <WhyHealthyBariSection />
      <ContactCtaSection />
    </>
  );
}
