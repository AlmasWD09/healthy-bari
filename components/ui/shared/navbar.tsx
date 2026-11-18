"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, UserPlus, UserRound, X } from "lucide-react";
import BrandLogo from "@/components/ui/shared/brand-logo";
import { useCart } from "@/components/cart/cart-provider";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { orders } = useCart();
  const orderCount = orders.reduce((total, order) => total + order.quantity, 0);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Main navigation"
        className=" flex h-20 min-h-20 shrink-0 items-center justify-between gap-4 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" aria-label="Healthy Bari home" onClick={closeMenu}>
          <BrandLogo showTagline={false} />
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative px-1 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary ${
                isActive(link.href)
                  ? "text-primary after:scale-x-100"
                  : "text-slate-700 after:scale-x-0 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/cart" aria-label={`Your orders${orderCount ? `, ${orderCount} items` : ""}`} aria-current={isActive("/cart") ? "page" : undefined} className={`relative inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors hover:bg-slate-100 ${isActive("/cart") ? "text-primary" : "text-slate-700"}`}>
            <ShoppingBag className="size-4" /> Orders
            {orderCount > 0 && <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-[#155b32] px-1.5 py-0.5 text-[11px] font-bold text-white">{orderCount}</span>}
          </Link>
          <Link
            href="/login"
            aria-current={isActive("/login") ? "page" : undefined}
            className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors hover:bg-slate-100 ${isActive("/login") ? "text-primary" : "text-slate-700"}`}
          >
            <UserRound className="size-4" />
            Login
          </Link>
          <Link
            href="/register"
            aria-current={isActive("/register") ? "page" : undefined}
            className={`inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors ${isActive("/register") ? "bg-primary/15 text-primary" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
          >
            <UserPlus className="size-4" />
            Create account
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition-colors hover:bg-slate-50 lg:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="animate-fadeIn border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex container flex-col">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${isActive(link.href) ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50 hover:text-primary"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/cart" onClick={closeMenu} aria-current={isActive("/cart") ? "page" : undefined} className={`flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors ${isActive("/cart") ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50 hover:text-primary"}`}><span className="inline-flex items-center gap-2"><ShoppingBag className="size-4" /> Orders</span>{orderCount > 0 && <span className="rounded-full bg-[#155b32] px-2 py-0.5 text-xs font-bold text-white">{orderCount}</span>}</Link>
            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              <Link
                href="/login"
                onClick={closeMenu}
                aria-current={isActive("/login") ? "page" : undefined}
                className={`inline-flex h-11 items-center justify-center gap-2 rounded-xl border font-semibold ${isActive("/login") ? "border-primary bg-primary/10 text-primary" : "border-slate-200 text-slate-700"}`}
              >
                <UserRound className="size-4" /> Login
              </Link>
              <Link
                href="/register"
                onClick={closeMenu}
                aria-current={isActive("/register") ? "page" : undefined}
                className={`inline-flex h-11 items-center justify-center gap-2 rounded-xl font-semibold ${isActive("/register") ? "bg-primary/15 text-primary" : "bg-primary text-primary-foreground"}`}
              >
                <UserPlus className="size-4" /> Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
