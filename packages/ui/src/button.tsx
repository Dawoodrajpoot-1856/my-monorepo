import * as React from "react";
import { cn } from "./lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-5 py-2.5 font-medium transition-all duration-200 active:scale-95 disabled:opacity-50",
          variant === "default" &&
            "bg-primary text-primary-foreground shadow hover:opacity-90",
          variant === "outline" &&
            "border border-input bg-background hover:bg-accent",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
