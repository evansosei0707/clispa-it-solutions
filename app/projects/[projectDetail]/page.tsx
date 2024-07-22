import React from "react";
import projectDetailBanner from "@/public/projects_banner.png";
import GlobalHero from "@/app/Components/GlobalHero";
import ProjectsBlockOne from "@/app/Components/ProjectsBlockOne";
import ProjectsBlockTwo from "@/app/Components/ProjectsBlockTwo";
import ProjectsBlockThree from "@/app/Components/ProjectsBlockThree";
import ClientReview from "@/app/Components/ClientReview";
import { client } from "@/app/lib/client";
import ClientReviewFragment from "@/app/Components/ClientReviewFragment";
import { Metadata } from "next";

async function getContent(serviceDetail: string) {
  const CONTENT_QUERY = `*[_type == 'projects' && slug.current == '${serviceDetail}'][0] {
  title,
  "projectSlug": slug.current,
  projectHero {
    image {
      asset -> {
        url
      }
    },
    briefDescrip,
  },
 projectBlock1 {
      image {
        asset -> {
          url
        }
      },
     firstPara,
 },
 projectInfo {
   dateTime,
     address,
     category[0] -> {
       title,
     },
     clientNmae,
     
 },
  howProjectWorks {
   ...,
    image {
      asset -> {
        url
      }
    },
  },
  projectBlock4 {
    ...,
   listings[],
    image {
      asset -> {
        url
      }
    }
    
  }
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

async function getData() {
  const CONTENT_QUERY = `*[_type == 'projects'] {
    'projectSlug': slug.current,
    title,
  }
  `;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

type Params = {
  params: {
    projectDetail: string;
  };
};

export async function generateMetadata({
  params: { projectDetail },
}: Params): Promise<Metadata> {
  const singleProjectData: ProjectsListType = await getContent(projectDetail);

  return {
    title: singleProjectData.title,
    description: singleProjectData.projectHero.briefDescrip,
  };
}

export default async function page({ params: { projectDetail } }: Params) {
  const singleProjectData: ProjectsListType = await getContent(projectDetail);

  return (
    <main className="flex min-h-screen flex-col  w-full items-center bg-white gap-8 mb-28 justify-start">
      <GlobalHero
        titleStart="Project"
        titleEnd="Detail"
        parentLink="projects"
        bannerImage={singleProjectData.projectHero.image}
        childLink={singleProjectData.title}
        description={singleProjectData.projectHero.briefDescrip}
      />
      <ProjectsBlockOne blockOneData={singleProjectData} />
      <ProjectsBlockTwo blockTwoData={singleProjectData.howProjectWorks} />
      <ProjectsBlockThree blockThreeData={singleProjectData.projectBlock4} />
      <ClientReviewFragment />
    </main>
  );
}

export async function generateStaticParams() {
  const allProjectsData: ProjectsListType[] = await getData();

  return allProjectsData.map((item) => ({
    params: {
      serviceDetail: item.projectSlug,
    },
  }));
}
