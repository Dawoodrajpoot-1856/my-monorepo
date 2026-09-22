"use client";

// 👉 Direct import (Bina index ke)
import { useUsers } from "@repo/shared-logic/UseUSer";
import { Button } from "@repo/ui/button";

export default function Home() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return (
      <div className="p-10 text-xl font-bold text-blue-600">
        Loading Users...
      </div>
    );
  }
  if (error) {
    return <div className="p-10 text-red-500">Error: {error}</div>;
  }

  return (
    <main className="min-h-screen p-10 bg-slate-50">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-3xl font-extrabold text-blue-600">
            Project 1: Blue Cards
          </h1>
          <Button className="bg-blue-600 text-white rounded-full">
            Refresh
          </Button>
        </div>

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.slice(0, 6).map((user) => (
            <div
              key={user.id}
              className="p-5 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-md">
                {user.company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
