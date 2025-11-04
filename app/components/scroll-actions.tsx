"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import Button from "./ui/button";
import CustomLink from "./ui/link";

export default function ScrollActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCustomLink, setShowCustomLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 600);
      setShowCustomLink(scrollY > 1200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to Top */}
      <Button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full ring-1 ring-primary-foreground flex items-center justify-center ${
          showScrollTop ? "translate-y-0" : "translate-y-96"
        }`}
      >
        <ArrowUp className="size-5 stroke-primary-foreground" />
      </Button>

      {/* Personal Web Site Link */}
      <CustomLink
        variant="secondary"
        className={`fixed bottom-20 right-6 z-50 size-11 p-0 rounded-full ring-1 ring-primary flex items-center justify-center font-bold group ${
          showCustomLink ? "translate-y-0" : "translate-y-96"
        }`}
      >
        T
      </CustomLink>
    </>
  );
}
