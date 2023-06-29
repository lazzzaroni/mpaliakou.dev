"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { ThemeToggle } from "./ThemeToggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/projects": {
    name: "projects",
  },
  "/about": {
    name: "about",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/projects/")) {
    pathname = "/projects";
  }

  return (
    <>
      <header className="-ml-1.5 mb-2">
        <nav className="flex scroll-pr-6 flex-row items-center px-0 pb-0 md:relative md:overflow-auto">
          <ThemeToggle />
          <div className="flex px-1 pt-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link key={path} href={path} className="px-1">
                  <span
                    className={cn("hover:text-foreground", {
                      "text-muted-foreground": !isActive,
                    })}
                  >
                    {name}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}
