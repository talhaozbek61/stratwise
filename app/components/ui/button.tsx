import React, { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  onClick,
  variant,
  className,
  type = "button",
}: ButtonProps) {
  const regularStyle =
    "px-6 py-3 rounded-xl font-medium transition duration-300 outline-none";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:scale-95",
    secondary: "bg-secondary text-secondary-foreground hover:scale-95",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(regularStyle, variants[variant], className)}
    >
      {children}
    </button>
  );
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
};
