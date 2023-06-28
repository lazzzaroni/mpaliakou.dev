import { cn } from "@/lib/utils";
import "./global.css";
import { type Metadata } from "next";
import { Khula, Literata } from "next/font/google";
import Providers from "./providers";

const literata = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-literata",
});

const khula = Khula({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
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
      className={cn(["scroll-smooth"], khula.className, literata.variable)}
    >
      <Providers>
        <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col bg-slate-100 font-sans leading-relaxed text-slate-950 antialiased selection:bg-purple-300 selection:text-purple-900 dark:bg-slate-950 dark:text-slate-100 md:mx-auto md:flex-row">
          <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
