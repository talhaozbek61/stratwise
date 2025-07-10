"use client";

import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

import { motion } from "framer-motion";

import { fadeAnimations } from "@/animations";

import CustomLink from "./link";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./slider-control-buttons";

export default function Slider({ content }: SliderProps) {
  const options: EmblaOptionsType = { loop: true, align: "start" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {content?.map((item) => (
            <CustomLink
              variant="none"
              key={item.id}
              className="embla__slide group hover:scale-none space-y-4 last:mr-(--embla-slide-spacing)"
            >
              {/* Image and Type */}
              <motion.div
                className="relative overflow-hidden rounded-xl"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeAnimations.left}
                custom={0.8}
              >
                <Image
                  src={item.image.url}
                  width={1280}
                  height={853}
                  alt=""
                  className="object-cover group-hover:scale-105 duration-300 size-full"
                />

                <div className="absolute top-4 left-4 w-min h-auto bg-primary-foreground text-primary text-sm rounded-md py-1.5 px-3">
                  {item.type}
                </div>
              </motion.div>

              {/* Text */}
              <div className="grid grid-rows-2 h-28 lg:h-[140px] xl:h-auto max-xl:hyphens-auto">
                <motion.h3
                  className="text-base font-semibold"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeAnimations.right}
                  custom={1}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-sm font-medium text-primary-muted"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeAnimations.right}
                  custom={1.15}
                >
                  {item.description}
                </motion.p>
              </div>
            </CustomLink>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="lg:absolute lg:right-8 lg:top-[10.5rem] xl:top-48 flex items-center max-lg:justify-center gap-4 max-lg:mt-8">
        {/* Left Button */}
        <PrevButton onClick={onPrevButtonClick} />
        {/* Right Button */}
        <NextButton onClick={onNextButtonClick} />
      </div>
    </>
  );
}

type ImageType = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type ContentProps = {
  id: number;
  type: string;
  title: string;
  description: string;
  image: ImageType;
};

type SliderProps = {
  content: ContentProps[];
};
