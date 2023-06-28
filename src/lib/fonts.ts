import { Khula as FontSans, Literata as FontSerif } from "next/font/google";

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});
