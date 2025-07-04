"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import Container from "./ui/container";
import CustomLink from "./ui/link";

import HeroFeature from "./hero-feature";

export default function Hero({ content }: HeroProps) {
  return (
    <Container className="flex max-lg:flex-col max-[1090px]:gap-12 items-center min-[1090px]:justify-between h-full">
      {/* Text */}
      <motion.div
        className="lg:max-w-lg lg:flex-initial max-lg:text-center w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h1
          className="text-5xl sm:text-6xl text-primary"
          variants={fadeInUp}
        >
          {content.title}
        </motion.h1>
        <motion.p className="text-muted mt-4" variants={fadeInUp}>
          {content.paragraph}
        </motion.p>

        {/* Link */}
        <CustomLink
          className="mt-8 bg-primary text-primary-foreground hover:scale-95 inline-block"
          animation={fadeInUp}
        >
          Get Started
        </CustomLink>
      </motion.div>

      {/* Image */}
      <motion.div
        className="relative max-lg:flex max-lg:flex-col"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.div variants={fadeInRight}>
          <Image
            src={content.image.url}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            className="sm:w-[calc(100vh-30rem)] lg:max-h-[700px] w-full h-full object-center rounded-2xl"
          />
        </motion.div>

        {/* Features */}
        <HeroFeature variants={fadeInRight} />
      </motion.div>
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

// Framer Animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};
