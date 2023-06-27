import { cn } from "@/lib/utils";
import "./global.css";
import { type Metadata } from "next";
import { Inter, Literata } from "next/font/google";

const literata = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-literata",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
      className={cn(
        "bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100",
        inter.variable,
        literata.variable
      )}
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col leading-relaxed antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
