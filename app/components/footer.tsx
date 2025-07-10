"use client";

import Container from "./ui/container";
import CustomLink from "./ui/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="space-y-24 pb-5 sm:pb-5">
        <div className="flex max-lg:flex-col max-lg:gap-4 items-start justify-between py-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h4 className="text-2xl/10 sm:text-3xl xl:text-4xl sm:tracking-tight sm:leading-12 max-w-2xl">
              Ready to Elevate Your Business?
            </h4>
            <p className="text-base text-primary-muted flex-1 text-wrap">
              Seamlessly adapt to market changes and scale with confidence. Our
              flexible, growth-oriented infrastructure is built to support your
              evolving business needs.
            </p>
          </div>

          <CustomLink className="bg-accent text-primary">Contact us</CustomLink>
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-4 max-sm:items-start sm:items-center sm:justify-between py-4 border-y border-primary-muted/50">
          <CustomLink
            variant="none"
            className="hover:scale-95 transition duration-300"
          >
            Licensing
          </CustomLink>

          <span>
            &copy; 2025 Stratwise {/* (Strategy + Wise) */} Inc. All rights
            reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
