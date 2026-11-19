"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogPopup,
  DialogTitle,
} from "@/components/ui/dialog";

type Product = { name: string; price: number };
const fieldClass =
  "mt-1.5 h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15";

export default function AddToCartButton({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { addOrder } = useCart();

  function submitOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addOrder({
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      productName: product.name,
      price: product.price,
      quantity,
    });
    closeDialog(false);
  }

  function closeDialog(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      setQuantity(1);
    }
  }

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <ShoppingCart className="size-3.5 shrink-0" /> Add To Cart
      </button>
      <DialogPopup>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <DialogTitle>Complete your order</DialogTitle>
            <DialogDescription className="mt-1">
              Add your contact and delivery details.
            </DialogDescription>
          </div>
          <DialogClose aria-label="Close dialog">
            <X className="size-5" />
          </DialogClose>
        </div>
        <form onSubmit={submitOrder} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Full name
              <input
                required
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={fieldClass}
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Phone number
              <input
                required
                type="tel"
                autoComplete="tel"
                pattern="[+0-9 ()-]{7,20}"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className={fieldClass}
                placeholder="01XXXXXXXXX"
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-slate-700">
            Delivery address
            <textarea
              required
              autoComplete="street-address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className={`${fieldClass} min-h-20 resize-y py-3`}
              placeholder="House, road, area, city"
            />
          </label>
          <section
            aria-label="Selected product"
            className="rounded-2xl border border-slate-200 bg-[#fbfaf6] p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Selected product
            </p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold text-slate-900">{product.name}</p>
                <p className="mt-1 text-sm text-slate-600">
                  ৳{product.price.toLocaleString("en-BD")} each
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white p-1">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="inline-flex size-8 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                >
                  <Minus className="size-4" />
                </button>
                <span
                  aria-live="polite"
                  className="min-w-5 text-center text-sm font-semibold"
                >
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="inline-flex size-8 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
                >
                  <Plus className="size-4" />
                </button>
              </div>
            </div>
          </section>
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-sm text-slate-600">Total Bill</span>
            <strong className="text-lg text-slate-950">
              ৳{(product.price * quantity).toLocaleString("en-BD")}
            </strong>
          </div>
          <button
            type="submit"
            className="h-12 w-full rounded-full bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary"
          >
            Order Now
          </button>
        </form>
      </DialogPopup>
    </Dialog>
  );
}
