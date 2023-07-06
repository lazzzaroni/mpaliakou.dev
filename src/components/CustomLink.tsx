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
      className="inline-flex font-medium text-muted-foreground transition duration-0 hover:text-foreground hover:duration-200"
    >
      {text}
      <Icons.arrow className="ml-1 mt-1" />
    </Link>
  );
}
