"use client";

import { useState } from "react";
import { useAuth } from "@repo/shared-logic/UseAuth";
import { Button } from "@repo/ui/button";
import { Badge } from "@repo/ui/badge";

export default function CustomerApp() {
  const { user, isLoggedIn, isLoaded, login, logout } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isLoaded)
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-emerald-400 font-semibold">
        Loading...
      </div>
    );

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-slate-100">
      {!isLoggedIn ? (
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl max-w-md w-full space-y-6">
          <div className="text-center space-y-1">
            <span className="text-4xl">👋</span>
            <h1 className="text-2xl font-black text-slate-100">Welcome Back</h1>
            <p className="text-xs text-slate-400">
              Enter your details to access your portal
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Dawood Rajpoot"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="dawood@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            <Button
              onClick={() =>
                login(email || "dawood@user.com", name || "Dawood Rajpoot")
              }
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl shadow-md transition-all"
            >
              Sign In to Account
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl max-w-md w-full space-y-6 text-center">
          <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-slate-950 text-3xl font-black shadow-lg shadow-emerald-500/20">
            {user?.name.charAt(0)}
          </div>

          <div>
            <Badge className="bg-emerald-950 text-emerald-400 border border-emerald-800/50 mb-2">
              Customer Account
            </Badge>
            <h2 className="text-2xl font-black text-slate-100">{user?.name}</h2>
            <p className="text-sm text-slate-400">{user?.email}</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-xs text-slate-400 font-medium">Status</p>
              <p className="text-sm font-bold text-emerald-400">
                ● Active Member
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Role</p>
              <p className="text-sm font-bold text-slate-200 uppercase">
                {user?.role}
              </p>
            </div>
          </div>

          <Button
            onClick={logout}
            variant="outline"
            className="w-full border-red-900/50 text-red-400 hover:bg-red-950/40 rounded-xl font-bold py-3"
          >
            Log Out
          </Button>
        </div>
      )}
    </main>
  );
}
