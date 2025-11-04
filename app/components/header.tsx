"use client";

import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { slideAnimations } from "@/animations";

import { Menu, X } from "lucide-react";

import Button from "./ui/button";
import CustomLink from "./ui/link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", openMenu);
    return () => document.body.classList.remove("overflow-hidden");
  }, [openMenu]);

  return (
    <header className="bg-secondary/30 text-secondary-foreground">
      <nav className="flex items-center justify-between mx-auto max-w-2xl lg:max-w-7xl px-6 py-4">
        {/* Logo */}
        <CustomLink
          href="/"
          variant="none"
          target="_self"
          className="text-2xl font-medium"
        >
          Stratwise
        </CustomLink>

        {/* Desktop Menu */}
        <ul className="flex items-center gap-6 max-sm:hidden">
          {navigation.map((navigate, nIdx) => (
            <li key={nIdx}>
              <CustomLink
                href={navigate.href}
                variant="none"
                target="_self"
                className="hover:text-primary/85"
              >
                {navigate.name}
              </CustomLink>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <CustomLink className="py-2.5 max-sm:hidden">Call Now</CustomLink>

        {/* Mobile Menu Button */}
        <Button
          variant="secondary"
          className="sm:hidden px-4"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu className="size-6" />
        </Button>

        {/* Mobile Menu */}
        <AnimatePresence initial={false}>
          {openMenu && (
            <motion.div
              initial="hidden"
              whileInView="show"
              exit="exit"
              variants={slideAnimations.left}
              className={
                openMenu
                  ? "fixed left-0 top-0 bg-background w-full h-full p-4 sm:hidden z-10"
                  : "hidden"
              }
            >
              {/* Logo and Button */}
              <div className="flex items-center justify-between">
                <CustomLink
                  href="/"
                  variant="none"
                  target="_self"
                  className="text-2xl font-medium"
                >
                  Stratwise
                </CustomLink>
                <Button
                  variant="secondary"
                  className="sm:hidden px-4"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <X className="size-6" />
                </Button>
              </div>

              {/* Links */}
              <ul className="mt-6 relative flex flex-col items-start gap-4 h-full [&_a]:w-full">
                {navigation.map((navigate, nIdx) => (
                  <CustomLink
                    href={navigate.href}
                    variant="none"
                    target="_self"
                    key={nIdx}
                    className="text-primary font-medium py-1"
                    onClick={() => setOpenMenu(false)}
                  >
                    {navigate.name}
                  </CustomLink>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

type navigationType = {
  name: string;
  href: string;
};

const navigation: navigationType[] = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Services",
    href: "/#services",
  },
  {
    name: "Portfolio",
    href: "/#portfolio",
  },
  {
    name: "Blog",
    href: "/#blog",
  },
];
