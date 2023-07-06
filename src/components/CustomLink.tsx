import Link from "next/link";

import { Icons } from "./Icons";

interface CustomLink {
  link: string;
  text: string;
}

export default function CustomLink({ link, text }: CustomLink) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex font-medium text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-2"
    >
      {text}
      <Icons.arrow className="ml-1 mt-1" />
    </Link>
  );
}
