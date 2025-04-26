"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About({ content }: AboutProps) {
  return (
    <motion.div className="bg-primary text-primary-foreground" id="about">
      <div className="px-6 py-28 sm:py-32 lg:px-8 mx-auto max-lg:max-w-2xl lg:max-w-7xl flex max-lg:flex-col lg:gap-4 gap-12 items-center xl:justify-between">
        {/* Image */}
        <motion.div
          className="flex-1 xl:flex-initial"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sequentialFadeIn}
          custom={0.7}
        >
          <Image
            src={content.image.url}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            className="lg:max-w-xl w-full object-center rounded-xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="relative flex-1 xl:flex-initial max-w-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sequentialFadeIn}
          custom={0.5}
        >
          {/* Mark */}
          <div className="absolute -top-8 left-0 flex items-center gap-3">
            <div className="size-2.5 bg-primary-foreground rounded-full" />
            <p className="text-base">About</p>
          </div>

          {/* Header */}
          <h1 className="text-2xl sm:text-3xl">{content.title}</h1>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 lg:gap-4 md:grid-cols-3 mt-8">
            {content.stats.map((stat) => (
              <div
                className={`flex flex-col items-start gap-2 max-w-40 ${
                  stat.id == 3 ? "!max-w-none max-sm:col-span-2" : ""
                }`}
                key={stat.id}
              >
                <h4 className="text-3xl font-light tracking-tight sm:text-4xl">
                  {stat.value}
                </h4>
                <p className="text-base/7 font-medium">{stat.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

type StatsType = {
  id: number;
  name: string;
  value: string;
};

type ImageType = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type ContentProps = {
  title: string;
  image: ImageType;
  stats: StatsType[];
};

type AboutProps = {
  content: ContentProps;
};

// Framer Animation
const sequentialFadeIn = {
  hidden: { y: 40, opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
};
