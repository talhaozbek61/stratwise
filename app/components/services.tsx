"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import Container from "./ui/container";
import Button from "./ui/button";
import CustomLink from "./ui/link";

export default function Services({ content }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<number>(1);

  return (
    <div className="bg-primary text-primary-foreground">
      <Container className="space-y-4">
        {/* Mark */}
        <motion.div
          className="flex items-center gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUpSequence}
          custom={0}
          id="services"
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
          variants={fadeInUpSequence}
          custom={0.3}
        >
          {content.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUpSequence}
            custom={0.6}
          >
            <Image
              src={content.image.url}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              className="object-center rounded-xl size-full"
            />
          </motion.div>

          {/* Services Content */}
          <div className="space-y-4">
            {/* Services List */}
            <motion.ul
              className="divide-y divide-primary-foreground lg:max-w-md"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInRightSequence}
              custom={0.8}
            >
              {content.services.map((service) => (
                <Button
                  variant="none"
                  key={service.id}
                  className={`w-full text-xl text-start py-4 font-medium cursor-pointer ${
                    service.id === selectedService
                      ? "text-primary-foreground"
                      : "text-primary-foreground/50"
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  {service.title}
                </Button>
              ))}
            </motion.ul>

            {/* Service Paragraph */}
            <motion.p
              className="text-base/7 lg:max-w-md text-muted"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInRightSequence}
              custom={0.9}
            >
              {content.services[selectedService - 1]?.paragraph}
            </motion.p>

            {/* Link */}
            <CustomLink
              className="mt-4 bg-primary-foreground text-primary hover:scale-95 inline-block"
              animation={fadeInRightSequence}
              custom={1}
            >
              Learn more
            </CustomLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

type ServicesType = {
  id: number;
  title: string;
  paragraph: string;
};

type ImageType = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type ContentProps = {
  mark: string;
  title: string;
  image: ImageType;
  services: ServicesType[];
};

type ServicesProps = {
  content: ContentProps;
};

// Framer Animation
const fadeInUpSequence = {
  hidden: { y: 20, opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
};

const fadeInRightSequence = {
  hidden: { x: 20, opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
};
