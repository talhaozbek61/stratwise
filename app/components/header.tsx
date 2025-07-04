"use client";

import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import Button from "./ui/button";
import CustomLink from "./ui/link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between mx-auto max-w-7xl p-4 lg:px-6">
        {/* Logo */}
        <CustomLink
          href="/"
          variant="none"
          target="_self"
          className="text-2xl text-primary font-medium"
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
        <CustomLink className="py-2.5 bg-primary text-primary-foreground hover:scale-95 max-sm:hidden">
          Call Now
        </CustomLink>

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
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileMenuVariants}
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
                  className="text-2xl text-primary font-medium"
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
              <ul className="mt-6 relative flex flex-col items-start gap-4 h-full">
                {navigation.map((navigate, nIdx) => (
                  <CustomLink
                    href={navigate.href}
                    variant="none"
                    target="_self"
                    key={nIdx}
                    className="text-primary font-medium w-full py-1"
                    onClick={() => setOpenMenu(false)}
                  >
                    {navigate.name}
                  </CustomLink>
                ))}
              </ul>

              {/* Call to Action */}
              <CustomLink
                className="py-2.5 absolute bottom-5 left-0 w-full bg-primary text-primary-foreground hover:scale-95"
                onClick={() => setOpenMenu(false)}
              >
                Call Now
              </CustomLink>
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
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "Blog",
    href: "#blog",
  },
];

const mobileMenuVariants = {
  initial: { x: -50, opacity: 0 },
  animate: {
    opacity: 1,
    x: 1,
  },
  exit: { x: -50, opacity: 0 },
};
