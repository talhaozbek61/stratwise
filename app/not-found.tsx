import { ArrowUpRight } from "lucide-react";

import CustomLink from "./components/ui/link";
import Container from "./components/ui/container";

export default function NotFound() {
  return (
    <Container className="grid min-h-full place-items-center">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-secondary-muted sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-8">
          <CustomLink
            href="/"
            target="_self"
            className="px-3.5 py-2.5 rounded-md text-sm font-semibold shadow-xs"
          >
            Go back home
          </CustomLink>

          {/*  Contact support link */}
          <CustomLink
            variant="none"
            className="text-sm font-semibold flex items-center gap-1.5 hover:scale-105 duration-300 transition"
          >
            <span>Contact support</span>
            <ArrowUpRight className="size-4" />
          </CustomLink>
        </div>
      </div>
    </Container>
  );
}
