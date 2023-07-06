import CustomLink from "@/components/CustomLink";

export default function Home() {
  return (
    <>
      <h1 className="scroll-m-20 font-serif text-2xl font-extrabold tracking-tight lg:text-3xl">
        Hi, I&apos;m Mick 👋
      </h1>
      <p className="text-lg leading-7 text-neutral-800 dark:text-neutral-200 [&:not(:first-child)]:mt-6">
        I&apos;m a Frontend Developer specializing in&nbsp;
        <CustomLink link="https://react.dev/" text="React" />.
      </p>
      <p className="text-lg leading-7 text-neutral-800 dark:text-neutral-200 [&:not(:first-child)]:mt-6">
        My expertise lies in leveraging the power of React to build dynamic and
        responsive user interfaces. I&apos;m well-versed in the modern tools and
        frameworks that power the frontend ecosystem.
      </p>
      <p className="text-lg leading-7 text-neutral-800 dark:text-neutral-200 [&:not(:first-child)]:mt-6">
        If you&apos;re seeking a dedicated Frontend Developer with a solid
        foundation in React, I&apos;m ready to contribute to your projects.
      </p>
      <p className="text-lg leading-7 text-neutral-800 dark:text-neutral-200 [&:not(:first-child)]:mt-6">
        Let&apos;s collaborate and bring your ideas to life!
      </p>
    </>
  );
}
