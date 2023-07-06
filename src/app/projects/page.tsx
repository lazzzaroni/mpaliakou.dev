import CustomLink from "@/components/CustomLink";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="scroll-m-20 font-serif text-2xl font-extrabold tracking-tight lg:text-3xl">
        Projects Page
      </h1>
      <p className="text-lg leading-7 text-neutral-800 dark:text-neutral-200 [&:not(:first-child)]:mt-6">
        {"Currently I'm working on my skills on "}
        <CustomLink
          link="https://www.frontendmentor.io/profile/lazzzaroni"
          text="Frontend Mentor"
        />
        .
      </p>
      <p className="text-lg leading-7 text-neutral-800 dark:text-neutral-200 [&:not(:first-child)]:mt-6">
        {"Also feel free to check my "}
        <CustomLink link="https://github.com/lazzzaroni" text="GitHub" />
        {" repo."}
      </p>
    </>
  );
}
