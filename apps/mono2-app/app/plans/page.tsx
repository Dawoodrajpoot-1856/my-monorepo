"use client";

import { useCart } from "@repo/shared-logic/useCart";
import { Button } from "@repo/ui/button";
import { Badge } from "@repo/ui/badge";

const PRODUCTS = [
  {
    id: 1,
    name: "Nike Air Jordan 1",
    price: 120,
    icon: "👟",
    tag: "Best Seller",
  },
  { id: 2, name: "Apple AirPods Pro", price: 250, icon: "🎧", tag: "Wireless" },
  {
    id: 3,
    name: "Vintage Leather Jacket",
    price: 80,
    icon: "🧥",
    tag: "Fashion",
  },
];

export default function StoreApp() {
  const { cart, addToCart, removeFromCart, clearCart, totalPrice, totalItems } =
    useCart();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-40">
      {/* 1. Top Modern Glass Navbar */}
      <nav className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛍️</span>
            <div>
              <h1 className="text-lg font-black tracking-tight text-emerald-400">
                LUXE STORE
              </h1>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Official Flagship
              </p>
            </div>
          </div>

          <Badge className="bg-emerald-500 text-slate-950 font-semibold px-3 py-1 shadow-sm">
            Bag: {totalItems} {totalItems === 1 ? "item" : "items"}
          </Badge>
        </div>
      </nav>

      {/* 2. Main Content Container */}
      <main className="max-w-5xl mx-auto px-6 pt-8 space-y-10">
        {/* Products Grid */}
        <section>
          <h2 className="text-xl font-black tracking-tight text-slate-100 mb-5">
            Trending Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-sm hover:border-emerald-500/50 hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-4xl p-3 bg-slate-950 rounded-2xl border border-slate-800">
                      {product.icon}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                      {product.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-100 mt-5 group-hover:text-emerald-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-black text-slate-100 mt-1">
                    ${product.price}
                  </p>
                </div>

                <Button
                  onClick={() => addToCart(product)}
                  className="mt-6 w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl py-3 font-semibold shadow-sm transition-colors"
                >
                  + Add to Bag
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Live Cart Review Section */}
        <section className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-sm">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <h2 className="text-lg font-bold text-slate-100">
              Your Current Order Review
            </h2>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs font-semibold text-red-400 hover:text-red-300"
              >
                Clear Cart
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="py-12 text-center">
              <span className="text-4xl block mb-2">🛒</span>
              <p className="text-slate-400 font-medium text-sm">
                Your shopping bag is completely empty.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-800 mt-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="py-4 flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-bold text-slate-200">{item.name}</h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      ${item.price} each × {item.quantity} units
                    </p>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="text-base font-black text-slate-100">
                      ${item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-semibold text-red-400 hover:bg-red-950/40 p-2 rounded-xl transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* 3. Full-Width Fixed Checkout Bar at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] p-4 z-40">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Total Payable
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-100">
                ${totalPrice}
              </span>
              <span className="text-xs font-medium text-slate-400">
                ({totalItems} items)
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => addToCart(PRODUCTS[0])}
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-2xl hidden sm:flex"
            >
              + Quick Nike
            </Button>

            <Button
              disabled={cart.length === 0}
              className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold px-8 py-3 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all"
            >
              Proceed to Payment ➔
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
