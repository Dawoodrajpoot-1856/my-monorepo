"use client";
import { useState } from "react";

export function useUserLogic() {
  const [userName, setUserName] = useState("Dawood");
  const [points, setPoints] = useState(10);

  const addPoints = () => setPoints((prev) => prev + 5);
  const changeName = (name: string) => setUserName(name);

  return {
    userName,
    points,
    addPoints,
    changeName,
  };
}
