"use client";

import React, { useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import Button from "./ui/button";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between mx-auto max-w-7xl p-4 lg:px-6">
        <Link
          href="/"
          className="text-2xl text-prirmary font-medium outline-none"
        >
          Stratwise
        </Link>
        {/* Desktop Menu */}
        <ul className="flex items-center gap-6 max-sm:hidden">
          {navigation.map((navigate, nIdx) => (
            <li key={nIdx}>
              <Link
                href={navigate.href}
                className="hover:text-primary/85 duration-300 outline-none"
              >
                {navigate.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
          className="px-6 py-2.5 rounded-xl font-medium transition duration-300 outline-none bg-primary text-primary-foreground hover:scale-95 max-sm:hidden"
        >
          Call Now
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="secondary"
          className="sm:hidden px-4"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X className="size-6" /> : <Menu className="size-6" />}
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
                  ? "absolute left-0 top-16 bg-background w-full h-[90%] p-4 sm:hidden"
                  : "hidden"
              }
            >
              <ul className="relative flex flex-col items-start gap-4 h-full">
                {navigation.map((navigate, nIdx) => (
                  <Link
                    href={navigate.href}
                    key={nIdx}
                    className="text-primary font-medium outline-none w-full py-1"
                    onClick={() => setOpenMenu(false)}
                  >
                    {navigate.name}
                  </Link>
                ))}
                <Link
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                  className="px-6 py-2.5 absolute bottom-0 left-0 w-full rounded-xl font-medium transition duration-300 outline-none bg-primary text-primary-foreground hover:scale-95"
                  onClick={() => setOpenMenu(false)}
                >
                  Call Now
                </Link>
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
