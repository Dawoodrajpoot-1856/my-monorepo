import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "danger";
}

export const Badge = ({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) => {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";

  const variants = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-100 text-gray-900",
    danger: "bg-red-500 text-white",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};
