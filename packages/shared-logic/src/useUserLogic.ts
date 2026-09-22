"use client";

import { useState } from "react";

// 1. TypeScript Interface (Types define kar di hain)
export interface UseUserLogicReturn {
  userName: string;
  points: number;
  addPoints: () => void;
  minusPoints: () => void;
  changeName: (newName: string) => void;
}

// 2. Custom Hook with Explicit Return Type
export function useUserLogic(): UseUserLogicReturn {
  const [userName, setUserName] = useState<string>("Dawood Rajpoot");
  const [points, setPoints] = useState<number>(10);

  // Logic: Points barhana (+5)
  const addPoints = (): void => {
    setPoints((prev: number) => prev + 5);
  };

  // Logic: Points kam karna (-5)
  const minusPoints = (): void => {
    setPoints((prev: number) => (prev > 0 ? prev - 5 : 0));
  };

  // Logic: Naam change karna
  const changeName = (newName: string): void => {
    setUserName(newName);
  };

  return {
    userName,
    points,
    addPoints,
    minusPoints,
    changeName,
  };
}