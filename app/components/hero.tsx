"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { fadeAnimations } from "@/animations";

import Container from "./ui/container";
import CustomLink from "./ui/link";

import HeroFeature from "./hero-feature";

export default function Hero({ content }: HeroProps) {
  return (
    <Container className="flex max-lg:flex-col max-[1090px]:gap-12 items-center min-[1090px]:justify-between h-full">
      {/* Text */}
      <div className="lg:max-w-lg lg:flex-initial max-lg:text-center w-full">
        <motion.h1
          className="text-5xl sm:text-6xl text-primary"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeAnimations.up}
          custom={0.3}
        >
          {content.title}
        </motion.h1>
        <motion.p
          className="text-muted mt-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeAnimations.up}
          custom={0.6}
        >
          {content.paragraph}
        </motion.p>

        {/* Link */}
        <CustomLink
          className="mt-8 bg-primary text-primary-foreground hover:scale-95 inline-block"
          animation={fadeAnimations.up}
          custom={0.7}
        >
          Get Started
        </CustomLink>
      </div>

      {/* Image */}
      <div className="relative max-lg:flex max-lg:flex-col">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeAnimations.right}
          custom={1}
        >
          <Image
            src={content.image.url}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            className="sm:w-[calc(100vh-30rem)] lg:max-h-[700px] w-full h-full object-center rounded-2xl"
          />
        </motion.div>

        {/* Features */}
        <HeroFeature variants={fadeAnimations.left} />
      </div>
    </Container>
  );
}

type ImageType = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type ContentProps = {
  title: string;
  paragraph: string;
  image: ImageType;
};

type HeroProps = {
  content: ContentProps;
};
