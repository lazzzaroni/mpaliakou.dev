import Link from "next/link";

import CustomLink from "./CustomLink";
import { Icons } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-auto flex w-full max-w-2xl items-center justify-between py-6 text-foreground">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        <CustomLink
          link="https://github.com/lazzzaroni/mpaliakou.dev"
          text="view source code"
        />
      </span>
      <ul className="flex flex-row-reverse flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
        <li className="h-6 w-6">
          <Link
            href="https://www.linkedin.com/in/mpaliakou"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:text-foreground"
          >
            <Icons.linkedIn size={24} />
          </Link>
        </li>
        <li className="h-6 w-6">
          <Link
            href="https://github.com/lazzzaroni"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:text-foreground"
          >
            <Icons.gitHub size={24} />
          </Link>
        </li>
        <li className="h-6 w-6">
          <Link
            href="mailto:mpaliakou.dev@gmail.com"
            target="_self"
            className="transition duration-200 hover:text-foreground"
          >
            <Icons.mail size={24} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
