"use client"

import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import BrandLogo from "@/components/ui/shared/brand-logo";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-6 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900">
              <BrandLogo className="text-white" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Find honey, nuts, black cumin, and garlic cumin for your kitchen
              and everyday meals.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-5 fill-current"
                >
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-5 fill-current"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-primary inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/shop"
                  className="hover:text-primary transition-colors"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="/shop#honey"
                  className="hover:text-primary transition-colors"
                >
                  Honey
                </a>
              </li>
              <li>
                <a
                  href="/shop#nuts"
                  className="hover:text-primary transition-colors"
                >
                  Nuts & Seeds
                </a>
              </li>
              <li>
                <a
                  href="/shop#black-cumin"
                  className="hover:text-primary transition-colors"
                >
                  Black Cumin
                </a>
              </li>
              <li>
                <a
                  href="/shop#garlic-cumin"
                  className="hover:text-primary transition-colors"
                >
                  Garlic Cumin
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-primary inline-block pb-1">
              Customer Care
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/return-policy"
                  className="hover:text-primary transition-colors"
                >
                  Return & Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="hover:text-primary transition-colors"
                >
                  Shipping & Delivery Info
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-primary inline-block pb-1">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a
                  href="tel:+8801700000000"
                  className="transition-colors hover:text-primary"
                >
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a
                  href="mailto:info@honeybari.com"
                  className="break-all transition-colors hover:text-primary"
                >
                  info@honeybari.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-gray-400 mb-2">
                Subscribe to get special offers and updates:
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex">
                <input
                  type="email"
                  placeholder="Your email..."
                  className="w-full px-3 py-2 text-sm bg-slate-800 text-white rounded-l focus:outline-none focus:ring-primary border border-slate-700"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2 rounded-r transition-colors"
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            &copy; {year ?? ""} Healthy Bari. All Rights Reserved.
          </p>

          {/* Payment Badges Placeholder */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Cash on Delivery</span>
            <span>•</span>
            <span>bKash</span>
            <span>•</span>
            <span>Nagad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

