"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartOrder = {
  id: string;
  name: string;
  phone: string;
  address: string;
  productName: string;
  price: number;
  quantity: number;
  createdAt: string;
};

type CartContextValue = {
  orders: CartOrder[];
  ready: boolean;
  addOrder: (order: Omit<CartOrder, "id" | "createdAt">) => void;
  removeOrder: (id: string) => void;
  clearOrders: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "healthy-bari-orders";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<CartOrder[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadOrders = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) setOrders(JSON.parse(saved) as CartOrder[]);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      } finally {
        setReady(true);
      }
    }, 0);
    return () => window.clearTimeout(loadOrders);
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders, ready]);

  const value = useMemo<CartContextValue>(() => ({
    orders,
    ready,
    addOrder: (order) => setOrders((current) => [...current, { ...order, id: crypto.randomUUID(), createdAt: new Date().toISOString() }]),
    removeOrder: (id) => setOrders((current) => current.filter((order) => order.id !== id)),
    clearOrders: () => setOrders([]),
  }), [orders, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
