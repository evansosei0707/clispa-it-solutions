import React from "react";
import GlobalHero from "../Components/GlobalHero";
import projectsBannerImage from "@/public/projects_banner.png";
import { services } from "../lib/helper";
import { client } from "../lib/client";
import ProjectsLists from "../Components/ProjectsLists";
import { Metadata } from "next";

async function getContent() {
  const CONTENT_QUERY = `*[_type == 'projectsPage'][0] {
  projectsHero {
    image {
      asset -> {
        url
      }
    },
    briefDescrip,
  }
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

interface ProjectsHeroType {
  projectsHero: serviceHeroType;
}

export async function generateMetadata(): Promise<Metadata> {
  const allProjectsData: ProjectsHeroType = await getContent();

  return {
    title:
      "TechGigs Projects | Best & Quality projects we had to offer for their business growth",
    description: allProjectsData.projectsHero.briefDescrip,
  };
}

export default async function page() {
  const allProjectsData: ProjectsHeroType = await getContent();

  return (
    <main className="flex min-h-screen flex-col  w-full items-center bg-white gap-28 mb-28 justify-start">
      <GlobalHero
        titleStart="Our"
        titleEnd="Projects"
        parentLink="projects"
        bannerImage={allProjectsData.projectsHero.image}
        description={allProjectsData.projectsHero.briefDescrip}
      />
      <ProjectsLists />
    </main>
  );
}

export const revalidate = 10;
