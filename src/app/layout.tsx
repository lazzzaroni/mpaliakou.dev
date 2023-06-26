import "./global.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Mikalai Paliakou",
    template: "%s | Mikalai Paliakou",
  },
  description: "Musician and developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-white text-black dark:bg-[#111010] dark:text-white"
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
