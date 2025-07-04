import React, { ReactNode } from "react";

import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { motion, MotionProps } from "framer-motion";

export default function CustomLink({
  children,
  onClick,
  variant = "primary",
  className,
  href = "https://talhaozbek.com/?ref=stratwise",
  target = "_blank",
  animation,
  custom,
}: LinkProps) {
  const regularStyle =
    "px-6 py-3 rounded-xl font-medium transition duration-300 outline-none";

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
  };

  return target === "_blank" ? (
    <motion.a href={href} target="_blank" rel="author" {...commonProps}>
      {children}
    </motion.a>
  ) : (
    <Link href={href} passHref>
      <motion.div {...commonProps}>{children}</motion.div>
    </Link>
  );
}

type LinkProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "none";
  className?: string;
  href?: string;
  target?: "_blank" | "_self";
  animation?: MotionProps["variants"];
  custom?: number;
};
