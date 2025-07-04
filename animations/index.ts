import { Variants } from "framer-motion";

// Fade Animations
const fadeInUpSequence: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
    },
  }),
};

const fadeInDownSequence: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
    },
  }),
};

const fadeInRightSequence: Variants = {
  hidden: { x: 50, opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
    },
  }),
};

const fadeInLeftSequence: Variants = {
  hidden: { x: 50, opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
    },
  }),
};

// Slide Animations
const slideInLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
    },
  },
  exit: { x: -50, opacity: 0 },
};

export const fadeAnimations = {
  up: fadeInUpSequence,
  down: fadeInDownSequence,
  right: fadeInRightSequence,
  left: fadeInLeftSequence,
};

export const slideAnimations = {
  left: slideInLeft,
};
