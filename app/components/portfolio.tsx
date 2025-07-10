"use client";

import { motion } from "framer-motion";

import { fadeAnimations } from "@/animations";

import Container from "./ui/container";
import Image from "next/image";

export default function Portfolio({ content }: PortfolioProps) {
  return (
    <div className="bg-primary-foreground/50 text-primary" id="portfolio">
      <Container className="space-y-4">
        {/* Mark */}
        <motion.div
          className="flex items-center gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeAnimations.up}
          custom={0.1}
        >
          <div className="size-2.5 bg-primary rounded-full" />
          <p className="text-base">{content.mark}</p>
        </motion.div>

        {/* Header */}
        <motion.h2
          className="text-2xl/10 sm:text-3xl xl:text-4xl sm:tracking-tight sm:leading-12 max-w-2xl flex flex-col gap-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeAnimations.up}
          custom={0.3}
        >
          <span>Our Success Stories</span>
          <span>{content.title}</span>
        </motion.h2>

        {/* Case Studies List */}
        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {content.caseStudies.map((study) => (
            <motion.div
              key={study.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeAnimations.up}
              custom={0.6 + study.id * 0.1}
              className="border-t-[0.5px] border-primary space-y-4 group"
            >
              {/* Header */}
              <h3 className="text-base font-semibold mt-4">{study.title}</h3>

              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={study.image.url}
                  alt={study.image.alt}
                  width={study.image.width}
                  height={study.image.height}
                  className="object-center w-full max-lg:h-auto lg:h-64 xl:h-80 group-hover:scale-105 duration-300"
                />
              </div>

              {/* Description */}
              <p className="text-sm font-medium text-secondary-muted">
                {study.description}
              </p>
            </motion.div>
          ))}
        </ul>
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

type CaseType = {
  id: number;
  title: string;
  image: ImageType;
  description: string;
};

type ContentProps = {
  mark: string;
  title: string;
  caseStudies: CaseType[];
};

type PortfolioProps = {
  content: ContentProps;
};
