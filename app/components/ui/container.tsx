import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

export default function Container({ children, className }: ContainerProps) {
  return (
    <section
      className={twMerge(
        "mx-auto max-lg:max-w-2xl lg:max-w-7xl px-6 py-28 sm:py-32 lg:px-8",
        className
      )}
    >
      {children}
    </section>
  );
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
};
