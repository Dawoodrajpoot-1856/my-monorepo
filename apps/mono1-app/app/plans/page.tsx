"use client";

import { useCart } from "@repo/shared-logic/useCart";
import { Button } from "@repo/ui/button";
import { Badge } from "@repo/ui/badge";

const PRODUCTS = [
  { id: 1, name: "Nike Air Jordan", price: 120 },
  { id: 2, name: "Apple AirPods Pro", price: 250 },
  { id: 3, name: "Leather Jacket", price: 80 },
];

export default function StoreApp() {
  const { cart, addToCart, removeFromCart, clearCart, totalPrice, totalItems } =
    useCart();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 pb-32">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800">
          <div>
            <h1 className="text-2xl font-extrabold text-emerald-400">
              🛍️ Premium Store
            </h1>
            <p className="text-xs text-slate-400">
              Select items to add to your order
            </p>
          </div>
          <Badge className="bg-emerald-950 text-emerald-400 border border-emerald-800/50 font-semibold px-3 py-1">
            Items in Bag: {totalItems}
          </Badge>
        </header>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm hover:border-emerald-500/50 hover:shadow-emerald-500/5 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-emerald-400 font-medium bg-emerald-950 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                  Featured
                </span>
                <h3 className="font-bold text-lg text-slate-100 mt-2">
                  {product.name}
                </h3>
                <p className="text-xl font-extrabold text-slate-100 mt-1">
                  ${product.price}
                </p>
              </div>

              <Button
                onClick={() => addToCart(product)}
                className="mt-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl shadow-sm transition-all"
              >
                + Add to Cart
              </Button>
            </div>
          ))}
        </div>

        {/* Live Order List (Inline Card) */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-sm">
          <h2 className="font-bold text-lg text-slate-100 mb-4 flex items-center gap-2">
            🛒 Your Shopping Bag
          </h2>

          {cart.length === 0 ? (
            <p className="text-slate-400 text-sm py-6 text-center">
              Your bag is empty right now.
            </p>
          ) : (
            <div className="divide-y divide-slate-800">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-slate-200">{item.name}</p>
                    <p className="text-xs text-slate-400">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-emerald-400">
                      ${item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-400 hover:bg-red-950/40 font-medium px-2 py-1 rounded-lg transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Summary Bar */}
      <div className="fixed bottom-4 left-4 right-4 max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md border border-slate-800 p-4 px-8 rounded-2xl shadow-2xl flex justify-between items-center z-40">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-xs text-slate-400 font-medium">TOTAL ITEMS</p>
            <p className="text-xl font-bold text-slate-100">
              {totalItems} Products
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">SUBTOTAL</p>
            <p className="text-2xl font-black text-emerald-400">
              ${totalPrice}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={clearCart}
            variant="outline"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl"
          >
            Clear All
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 rounded-xl shadow-md transition-all">
            Checkout Now ➔
          </Button>
        </div>
      </div>
    </main>
  );
}
