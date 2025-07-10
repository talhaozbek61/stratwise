import React from "react";

import { motion, Variants } from "framer-motion";

import { BadgeCheck } from "lucide-react";

export default function HeroFeature({ variants }: Props) {
  return (
    <>
      {/* Feature 1 */}
      <motion.div
        className="absolute md:-left-20 sm:-left-8 -top-5 max-sm:left-5 h-min bg-secondary text-primary p-4 rounded-2xl shadow-lg shadow-background/50 transition-all duration-300"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variants}
        custom={1.2}
      >
        <div className="flex items-start gap-2">
          {/* Icon */}
          <div className="bg-primary size-8 p-1 rounded-full">
            <BadgeCheck className="size-6 fill-white" />
          </div>

          {/* Text */}
          <div className="text-sm">
            <h2 className="text-shadow-secondary-foreground font-semibold">
              Efficiency Boost
            </h2>
            <p className="text-secondary-muted">
              Optimizing Operational Workflows
            </p>
          </div>
        </div>

        {/* Progress Bar  */}
        <div className="relative mt-6 w-full h-8 flex gap-2 rounded overflow-hidden">
          <div className="bg-accent rounded-lg w-[calc(85%)]" />
          <div className="bg-accent/40 rounded-lg w-[calc(100%-85%)]" />
          <p className="absolute text-primary text-xs font-medium left-2 top-1/2 -translate-y-1/2">
            85%
          </p>
        </div>
      </motion.div>

      {/* Feature 2 */}
      <motion.div
        className="absolute right-4 bottom-5 max-sm:right-5 h-min bg-secondary text-primary p-4 rounded-2xl shadow-lg shadow-background/50 transition-all duration-300"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={variants}
        custom={1.4}
      >
        <div className="flex items-start gap-2">
          {/* Icon */}
          <div className="bg-primary size-8 p-1 rounded-full">
            <BadgeCheck className="size-6 fill-white" />
          </div>

          {/* Text */}
          <div className="text-sm">
            <h2 className="text-shadow-secondary-foreground font-semibold">
              Tailored Business Solutions
            </h2>
            <p className="text-secondary-muted">One Size Never Fits All</p>
          </div>
        </div>

        {/* Progress Bar  */}
        <div className="relative mt-6 w-full h-8 flex gap-2 rounded overflow-hidden">
          <div className="bg-accent rounded-lg w-[calc(75%)]" />
          <div className="bg-accent/40 rounded-lg w-[calc(100%-75%)]" />
          <p className="absolute text-primary text-xs font-medium left-2 top-1/2 -translate-y-1/2">
            75%
          </p>
        </div>
      </motion.div>
    </>
  );
}

type Props = {
  variants: Variants;
};
