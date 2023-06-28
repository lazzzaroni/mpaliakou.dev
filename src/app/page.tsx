import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <h1 className="font-serif text-3xl font-bold tracking-tight">
        Hello from /app
      </h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Here will be short introduction of myself
      </p>
      <p></p>
    </>
  );
}
