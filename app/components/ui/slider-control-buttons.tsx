import { ComponentPropsWithRef, useCallback } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { fadeAnimations } from "@/animations";

import { EmblaCarouselType } from "embla-carousel";

import Button from "./button";

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton: React.FC<PropType> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <Button
      variant="secondary"
      className="rounded-full p-3"
      onClick={onClick}
      disabled={disabled}
      animation={fadeAnimations.right}
      custom={0.3}
    >
      <ArrowLeft className="stroke-primary size-6" />
      {children}
    </Button>
  );
};

export const NextButton: React.FC<PropType> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <Button
      variant="secondary"
      className="rounded-full p-3"
      onClick={onClick}
      disabled={disabled}
      animation={fadeAnimations.right}
      custom={0.1}
    >
      <ArrowRight className="stroke-primary size-6" />
      {children}
    </Button>
  );
};

type PropType = ComponentPropsWithRef<"button">;

type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};
