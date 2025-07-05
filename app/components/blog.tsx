"use client";

import { motion } from "framer-motion";

import { fadeAnimations } from "@/animations";

import Container from "./ui/container";
import Slider from "./ui/slider";

export default function Blog({ content }: BlogProps) {
  return (
    <div
      className="bg-primary text-primary-foreground overflow-hidden"
      id="blog"
    >
      <Container className="space-y-4 relative">
        {/* Mark */}
        <motion.div
          className="flex items-center gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeAnimations.up}
          custom={0.1}
        >
          <div className="size-2.5 bg-primary-foreground rounded-full" />
          <p className="text-base">{content.mark}</p>
        </motion.div>

        {/* Header */}
        <motion.h2
          className="text-2xl/10 sm:text-3xl xl:text-4xl sm:tracking-tight sm:leading-12 max-w-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeAnimations.up}
          custom={0.3}
        >
          {content.title}
        </motion.h2>

        {/* Slider */}
        <Slider content={content.blogPosts} />
      </Container>
    </div>
  );
}

type ImageType = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type BlogPostsType = {
  id: number;
  type: string;
  title: string;
  description: string;
  image: ImageType;
};

type ContentProps = {
  mark: string;
  title: string;
  blogPosts: BlogPostsType[];
};

type BlogProps = {
  content: ContentProps;
};
