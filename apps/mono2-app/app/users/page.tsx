"use client";

import { useUsers } from "@repo/shared-logic/UseUSer";

export default function Home() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-xl font-bold text-emerald-400 animate-pulse">
          Loading Users...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="p-6 bg-red-950/50 border border-red-800 text-red-400 rounded-xl">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-10 bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <h1 className="text-3xl font-extrabold text-emerald-400 tracking-wide">
            Project 2: Emerald Cards
          </h1>
          <button
            onClick={() => window.location.reload()}
            className="bg-emerald-500 text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10"
          >
            Refresh
          </button>
        </div>

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.slice(0, 6).map((user) => (
            <div
              key={user.id}
              className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-sm hover:border-emerald-500/50 hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <h2 className="text-lg font-bold text-slate-100">{user.name}</h2>
              <p className="text-sm text-slate-400">{user.email}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-emerald-950 border border-emerald-800/50 text-emerald-400 text-xs font-semibold rounded-md">
                {user.company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
