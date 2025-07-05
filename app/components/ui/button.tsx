import React, { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

import { motion, MotionProps } from "framer-motion";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className,
  type = "button",
  animation,
  custom,
  disabled = false,
}: ButtonProps) {
  const regularStyle =
    "px-6 py-3 rounded-xl font-medium transition duration-300 outline-none cursor-pointer";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:scale-95",
    secondary: "bg-secondary text-secondary-foreground hover:scale-95",
    none: "p-0 rounded-none font-normal transition-none",
  };

  const commonProps = {
    onClick,
    className: twMerge(regularStyle, variants[variant], className),
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true },
    variants: animation,
    custom,
    disabled,
  };

  return (
    <motion.button type={type} {...commonProps}>
      {children}
    </motion.button>
  );
}

type ButtonProps = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "none";
  className?: string;
  type?: "button" | "submit" | "reset";
  animation?: MotionProps["variants"];
  custom?: number;
  disabled?: boolean;
};
