"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { fadeAnimations } from "@/animations";

import Container from "./ui/container";

export default function About({ content }: AboutProps) {
  return (
    <div className="bg-secondary text-secondary-foreground" id="about">
      <Container className="flex max-lg:flex-col gap-12 items-center">
        {/* Image */}
        <motion.div
          className="flex-1 lg:flex-initial"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeAnimations.up}
          custom={0.7}
        >
          <Image
            src={content.image.url}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            className="lg:max-h-[400px] w-auto object-center rounded-xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeAnimations.up}
          custom={0.5}
        >
          {/* Header */}
          <h1 className="text-2xl/10 sm:text-3xl xl:text-4xl sm:tracking-tight sm:leading-12">
            {content.title}
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 xl:grid-cols-4 mt-8">
            {content.stats.map((stat) => (
              <div
                className="flex flex-col items-start gap-2 max-w-40"
                key={stat.id}
              >
                <h4 className="text-3xl tracking-tight sm:text-4xl">
                  {stat.value}
                </h4>
                <p className="text-base text-secondary-muted">{stat.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
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
