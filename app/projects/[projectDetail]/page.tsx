import React from "react";
import projectDetailBanner from "@/public/projects_banner.png";
import GlobalHero from "@/app/Components/GlobalHero";
import ProjectsBlockOne from "@/app/Components/ProjectsBlockOne";
import ProjectsBlockTwo from "@/app/Components/ProjectsBlockTwo";
import ProjectsBlockThree from "@/app/Components/ProjectsBlockThree";
import ClientReview from "@/app/Components/ClientReview";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col  w-full items-center bg-white gap-12 mb-28 justify-start">
      <GlobalHero
        titleStart="Project"
        titleEnd="Detail"
        parentLink="projects"
        bannerImage={projectDetailBanner}
        childLink="Database Security"
        description="Neque porro quisquam est, qui quia lorem some   golor sit amet, are more consectetur sed"
      />
      <ProjectsBlockOne />
      <ProjectsBlockTwo />
      <ProjectsBlockThree />
      <ClientReview />
    </main>
  );
}
