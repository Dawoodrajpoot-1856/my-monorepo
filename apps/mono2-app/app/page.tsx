"use client";

import { useState } from "react";
import { useAuth } from "@repo/shared-logic/UseAuth";
import { Button } from "@repo/ui/button";
import { Badge } from "@repo/ui/badge";

export default function AdminApp() {
  const { user, isLoggedIn, isLoaded, login, logout } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isLoaded)
    return (
      <div className="min-h-screen bg-slate-950 text-emerald-400 p-10 font-mono">
        Loading Core...
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono">
      {!isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="bg-slate-900 border border-slate-800 p-8 max-w-md w-full space-y-6 shadow-2xl rounded-3xl">
            <div>
              <span className="text-emerald-400 text-xs font-bold tracking-wider">
                [RESTRICTED AREA]
              </span>
              <h1 className="text-2xl font-black mt-1 text-slate-100">
                ADMIN CONSOLE
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Login with an admin email to access controls
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">
                  Admin Operator
                </label>
                <input
                  type="text"
                  placeholder="Operator Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 text-slate-100"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">
                  Auth Email (Use 'admin' in email)
                </label>
                <input
                  type="email"
                  placeholder="admin@system.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 text-slate-100"
                />
              </div>

              <Button
                onClick={() =>
                  login(email || "admin@system.io", name || "Root Officer")
                }
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 rounded-xl shadow-md transition-all"
              >
                EXECUTE AUTHENTICATION ➔
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-screen">
          <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-black text-emerald-400 tracking-wider">
                  ⚡ SYS_ADMIN
                </h2>
                <p className="text-[10px] text-slate-500">
                  VERSION 4.2.0 ACTIVE
                </p>
              </div>

              <nav className="space-y-2 text-sm text-slate-400">
                <div className="px-3 py-2 bg-emerald-500/10 text-emerald-400 font-bold border-l-2 border-emerald-500 rounded-r-xl">
                  Dashboard
                </div>
                <div className="px-3 py-2 hover:text-slate-100 cursor-pointer transition-colors">
                  Users Manager
                </div>
                <div className="px-3 py-2 hover:text-slate-100 cursor-pointer transition-colors">
                  API Keys
                </div>
                <div className="px-3 py-2 hover:text-slate-100 cursor-pointer transition-colors">
                  System Logs
                </div>
              </nav>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-3">
              <div>
                <p className="text-xs text-slate-100 font-bold">{user?.name}</p>
                <p className="text-[11px] text-slate-500">{user?.email}</p>
              </div>
              <Button
                onClick={logout}
                variant="outline"
                className="w-full border-red-900/50 text-red-400 hover:bg-red-950/30 text-xs py-2 rounded-xl"
              >
                Terminate Session (Logout)
              </Button>
            </div>
          </aside>

          <main className="flex-1 p-10 space-y-8 bg-slate-950">
            <header className="flex justify-between items-center border-b border-slate-800 pb-6">
              <div>
                <h1 className="text-2xl font-black text-slate-100">
                  SYSTEM OVERVIEW
                </h1>
                <p className="text-xs text-slate-500">
                  Logged in as: {user?.role.toUpperCase()}
                </p>
              </div>
              <Badge className="bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                SYSTEM ONLINE
              </Badge>
            </header>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <p className="text-xs text-slate-500 uppercase">
                  Active Monorepo Apps
                </p>
                <p className="text-3xl font-black text-slate-100 mt-2">
                  2 Nodes
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <p className="text-xs text-slate-500 uppercase">
                  Shared Packages
                </p>
                <p className="text-3xl font-black text-emerald-400 mt-2">
                  2 Active
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <p className="text-xs text-slate-500 uppercase">
                  Current User Level
                </p>
                <p className="text-3xl font-black text-emerald-400 mt-2">
                  {user?.role.toUpperCase()}
                </p>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
