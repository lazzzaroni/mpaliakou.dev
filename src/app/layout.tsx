import { cn } from "@/lib/utils";

import "../styles/globals.css";

import { type Metadata } from "next";

import { fontSans, fontSerif } from "@/lib/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://mpaliakou.dev"),
  title: {
    default: "Mikalai Paliakou",
    template: "%s | Mikalai Paliakou",
  },
  description: "Frontend developer and musician.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    title: "Mikalai Paliakou",
    description: "Frontend developer and musician.",
    url: "https://mpaliakou.dev",
    siteName: "Mikalai Paliakou",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-4 flex max-w-2xl flex-col scroll-smooth antialiased selection:bg-purple-300 selection:text-purple-900 md:mx-auto",
          fontSans.className,
          fontSerif.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-screen min-w-0 flex-auto flex-col px-2 md:px-0">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
