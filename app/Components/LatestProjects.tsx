import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import { client, urlFor } from "../lib/client";

async function getContent() {
  const CONTENT_QUERY = `*[_type == 'projects'] {
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

interface LatestProjectsProps {
  latestProjectsData: latestProjectsType;
}

export default async function LatestProjects({
  latestProjectsData,
}: LatestProjectsProps) {
  const allProjectsData: ProjectsListType[] = await getContent();
  return (
    <section className=" flex-col-x-start-only w-full px-5 md:px-8 lg:px-24 mx-auto gap-6  bg-gradient-to-b from-transparent to-[#f6fdff]">
      <div className=" flex-col-x-start-only w-full gap-2">
        <h2 className=" lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold font-Raj max-w-[250px] mb-[10px]">
          Check our <span className=" text-mainColor2">latest</span> projects
        </h2>
        <div className="flex justify-between w-full items-center">
          <p className=" max-w-[400px]">{latestProjectsData.para}</p>
          <Link href="/projects" className="">
            <HiArrowRight color="#023e8a" fontSize={35} />
          </Link>
        </div>
      </div>
      <div className=" grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-[30px]">
        {allProjectsData.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className=" relative p-[25px] w-full single_project rounded-[10px] bg-lightColor "
          >
            <div className=" relative rounded-[10px] overflow-hidden">
              <Image
                src={urlFor(item.projectBlock1.image).url()}
                alt={item.title}
                width={320}
                height={280}
                className=" w-full h-full object-cover"
              />
              <div className=" absolute project_overlay ease-in-out transition-all duration-500 top-0 right-0 left-0 bottom-0 flex flex-col p-[25px] items-center justify-center text-center bg-mainColor2">
                <Link
                  href={`/projects/${item.projectSlug}`}
                  className=" project_link text-xl font-bold font-Raj text-white no-underline "
                >
                  {item.title}
                </Link>
                <p className=" mb-[35px] font-liv text-white">
                  {item.projectHero.briefDescrip}
                </p>
                <div className=" relative w-full">
                  <Link
                    href={`/projects/${item.projectSlug}`}
                    className=" project-icon text-white top-0 absolute left-auto right-0 bottom-0 "
                  >
                    <HiArrowRight fontSize={35} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
