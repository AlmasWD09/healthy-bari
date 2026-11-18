import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/add-to-cart-button";

const products = [
  {
    name: "Black Seed Flower Honey 500g",
    price: "700\u09F3",
    oldPrice: "750\u09F3",
    image: "/top-selling/lychee-flower-honey.png",
    alt: "Lychee flower honey product jar",
  },
  {
    name: "Mixed Nuts Butter 400g",
    price: "650\u09F3",
    image: "/top-selling/black-cumin-honey.jpg",
    alt: "Black cumin honey product",
  },
  {
    name: "Chia Seed 350g",
    price: "400\u09F3",
    image: "/top-selling/honey-product-03.jpg",
    alt: "Packaged natural honey product",
  },
  {
    name: "Mustard Oil 5lt",
    price: "1,700\u09F3",
    image: "/top-selling/honey-product-04.jpg",
    alt: "Packaged honey product",
  },
  {
    name: "Honey Lover Combo",
    price: "1,250\u09F3",
    image: "/top-selling/honey-product-05.jpg",
    alt: "Honey product display",
  },
];

export default function TopSellingSection() {
  return (
    <section className="bg-[#f3f3f1] px-3 py-7 sm:px-5 sm:py-9 lg:px-7" aria-label="Top selling products">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 sm:gap-4">
          <span aria-hidden="true" className="h-px flex-1 bg-[#d8d8d4]" />
          <h2 className="shrink-0 text-center text-sm font-semibold uppercase tracking-wide text-slate-950 sm:text-base">Top Selling</h2>
          <span aria-hidden="true" className="h-px flex-1 bg-[#d8d8d4]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-[18px]">
          {products.map((product) => (
            <article key={product.name} className="group flex min-w-0 flex-col bg-white">
              <Link href="/shop" className="relative block aspect-square overflow-hidden bg-white" aria-label={`View ${product.name}`}>
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 60vw, (max-width: 900px) 30vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </Link>
              <div className="flex flex-1 flex-col items-center px-2 pb-3 text-center sm:px-3 sm:pb-4">
                <h3 className="line-clamp-2 min-h-10 text-[11px] font-medium leading-5 text-slate-800 sm:text-sm">{product.name}</h3>
                <p className="flex min-h-5 items-center gap-2 text-xs font-bold text-slate-950 sm:text-sm">
                  {"oldPrice" in product && <span className="font-normal text-slate-400 line-through">{product.oldPrice}</span>}
                  {product.price}
                </p>
                <AddToCartButton product={{ name: product.name, price: Number(product.price.replace(/[^0-9]/g, "")) }} className="mt-3 inline-flex h-9 w-full items-center justify-center gap-1 rounded-full border border-amber-500 px-2 text-[11px] font-semibold text-amber-700 transition-colors hover:bg-amber-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 sm:mt-4 sm:h-10 sm:gap-2 sm:text-sm" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
