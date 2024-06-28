import React from "react";
import GlobalHero from "../Components/GlobalHero";
import projectsBannerImage from "@/public/projects_banner.png";
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { services } from "../lib/helper";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col  w-full items-center bg-white gap-28 mb-28 justify-start">
      <GlobalHero
        titleStart="Our"
        titleEnd="Projects"
        parentLink="projects"
        bannerImage={projectsBannerImage}
        description="Neque porro quisquam est, qui quia lorem some   golor sit amet, are more consectetur sed"
      />
      <section className=" flex-row-center w-full px-5 md:px-8 lg:px-24 mx-auto gap-6  bg-white">
        <div className=" grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-[30px]">
          {services.map((item, idx) => (
            <div
              key={idx}
              className=" relative p-[25px] w-full single_project rounded-[10px] bg-lightColor "
            >
              <div className=" relative rounded-[10px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={280}
                  className=" w-full h-full object-cover"
                />
                <div className=" absolute project_overlay ease-in-out transition-all duration-500 top-0 right-0 left-0 bottom-0 flex flex-col p-[25px] items-center justify-center text-center bg-mainColor2">
                  <Link
                    href="/projects/1"
                    className=" project_link text-xl font-bold font-Raj text-white no-underline "
                  >
                    {item.title}
                  </Link>
                  <p className=" mb-[35px] font-liv text-white">
                    {item.description}
                  </p>
                  <div className=" relative w-full">
                    <Link
                      href="/projects/1"
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
    </main>
  );
}
