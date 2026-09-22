"use client";

import { useState, useEffect } from "react";

export interface AuthUser {
  name: string;
  email: string;
  role: "admin" | "user";
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("monorepo-auth-user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Auth load error", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const login = (email: string, name: string) => {
    const role: "admin" | "user" = email.toLowerCase().includes("admin")
      ? "admin"
      : "user";

    const userData: AuthUser = {
      name: name || "Demo User",
      email,
      role,
    };

    setUser(userData);
    localStorage.setItem("monorepo-auth-user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("monorepo-auth-user");
  };

  return {
    user,
    isLoggedIn: !!user,
    isLoaded,
    login,
    logout,
  };
}
