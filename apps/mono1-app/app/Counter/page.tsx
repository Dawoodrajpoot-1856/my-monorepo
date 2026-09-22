"use client";

import { useUserLogic } from "@repo/shared-logic";
import { Button } from "@repo/ui";
export default function Home() {
  const { userName, points, addPoints, minusPoints } = useUserLogic();

  return (
    <main className="min-h-screen p-10 bg-neutral-950 text-white flex flex-col items-center justify-center">
      <div className="border border-neutral-800 bg-neutral-900 p-8 text-center space-y-4 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-orange-500">Project 2 (Dark)</h1>
        <p className="text-neutral-400">
          User: <span className="font-semibold text-white">{userName}</span>
        </p>
        <p className="text-3xl font-black text-orange-400">{points} pts</p>

        <div className="flex gap-3 justify-center pt-2">
          <Button
            onClick={addPoints}
            className="bg-orange-600 text-white hover:bg-orange-500 rounded-none"
          >
            Add (+5)
          </Button>

          <Button
            onClick={minusPoints}
            variant="outline"
            className="border-neutral-700 text-white hover:bg-neutral-800 rounded-none"
          >
            Minus (-5)
          </Button>
        </div>
      </div>
    </main>
  );
}
