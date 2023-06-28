import { cn } from "@/lib/utils";
import "../styles/globals.css";
import { type Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { fontSans, fontSerif } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Mikalai Paliakou",
    template: "%s | Mikalai Paliakou",
  },
  description: "Musician and developer.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
          "mx-4 mb-40 mt-8 flex max-w-2xl flex-col scroll-smooth leading-relaxed antialiased selection:bg-purple-300 selection:text-purple-900 md:mx-auto md:flex-row",
          fontSans.className,
          fontSerif.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}