import { type Config } from "tailwindcss";
import { shadcnPreset } from "./src/lib/shadcnPreset";

export default {
  presets: [shadcnPreset],
  content: ["./src/**/*.{ts,tsx}"],
} satisfies Config;
