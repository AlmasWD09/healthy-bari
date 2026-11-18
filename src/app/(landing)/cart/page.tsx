"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";

export default function CartPage() {
  const { orders, ready, removeOrder, clearOrders } = useCart();
  const total = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);

  return (
    <section className="min-h-[65vh] bg-[#fbfaf6] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">Your saved orders</p><h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Order list</h1><p className="mt-2 text-sm text-slate-600">Review the products and delivery details you added.</p></div>
          {orders.length > 0 && <button type="button" onClick={clearOrders} className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-red-200 bg-white px-4 text-sm font-semibold text-red-700 transition hover:bg-red-50"><Trash2 className="size-4" /> Clear all</button>}
        </div>

        {!ready ? <div className="mt-8 h-32 animate-pulse rounded-2xl bg-white" /> : orders.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center sm:py-16"><span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-800"><ShoppingBag className="size-6" /></span><h2 className="mt-4 text-lg font-semibold text-slate-900">Your order list is empty</h2><p className="mt-1 text-sm text-slate-600">Choose a product and add it to your order list.</p><Link href="/" className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#155b32] px-5 text-sm font-semibold text-white hover:bg-[#104827]">Explore products <ArrowRight className="size-4" /></Link></div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_19rem]">
            <div className="space-y-3">
              {orders.map((order) => (
                <article key={order.id} className="flex min-w-0 gap-4 rounded-2xl border border-[#e9e7df] bg-white p-4 sm:p-5">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-[#f3f1e9] sm:size-24"><Image src={order.productName.includes("Nuts") ? "/home/honey-nuts.jpg" : "/top-selling/lychee-flower-honey.png"} alt="" fill sizes="96px" className="object-cover" /></div>
                  <div className="min-w-0 flex-1"><h2 className="font-semibold text-slate-900">{order.productName}</h2><p className="mt-1 text-sm text-slate-600">৳{order.price.toLocaleString("en-BD")} × {order.quantity}</p>{order.name && <p className="mt-2 truncate text-xs text-slate-500">{order.name}{order.phone ? ` · ${order.phone}` : ""}</p>}{order.address && <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">{order.address}</p>}<p className="mt-2 font-semibold text-slate-900">৳{(order.price * order.quantity).toLocaleString("en-BD")}</p></div>
                  <button type="button" onClick={() => removeOrder(order.id)} aria-label={`Remove ${order.productName}`} className="inline-flex size-9 shrink-0 items-center justify-center self-start rounded-full text-slate-500 transition hover:bg-red-50 hover:text-red-700"><Trash2 className="size-4" /></button>
                </article>
              ))}
            </div>
            <aside className="h-fit rounded-2xl border border-[#e9e7df] bg-white p-5"><h2 className="font-semibold text-slate-900">Order summary</h2><div className="mt-4 flex justify-between gap-3 border-t border-slate-100 pt-4 text-sm text-slate-600"><span>Products ({orders.reduce((sum, order) => sum + order.quantity, 0)} items)</span><span>৳{total.toLocaleString("en-BD")}</span></div><div className="mt-4 flex justify-between gap-3 border-t border-slate-100 pt-4 font-semibold text-slate-950"><span>Total</span><span>৳{total.toLocaleString("en-BD")}</span></div><p className="mt-3 text-xs leading-5 text-slate-500">Delivery details are shown with each saved order.</p></aside>
          </div>
        )}
      </div>
    </section>
  );
}
