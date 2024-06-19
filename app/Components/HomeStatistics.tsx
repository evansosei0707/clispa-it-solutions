"use client";

import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import MeetClient from "@/public/meet_the_client.png";
import BrainStorm from "@/public/brainstorm.png";
import Solution from "@/public/solution.png";
import ProjectDone from "@/public/project_done.png";

export default function HomeStatistics() {
  return (
    <section className=" px-8 md:px-12 lg:px-20 gap-14 lg:gap-20 my-20 w-full flex-col-center">
      {/* Statistics Here! */}
      <div className=" flex-row-center w-full mx-auto flex-wrap gap-4">
        <div className=" flex-col-center gap-1 min-[422px]:border-r border-dashed border-secondaryColor flex-1">
          <span className="md:text-[50px] text-[36px] leading-[36px] md:leading-[50px] text-mainColor font-bold font-Raj">
            <CountUp
              end={95}
              suffix="k"
              delay={0}
              duration={3.75}
              start={0}
              enableScrollSpy
            />
          </span>
          <p className=" md:text-[20px] text-lg font-normal md:leading-[32px] whitespace-nowrap font-liv text-customBlack">
            Happy Clients
          </p>
        </div>
        <div className=" flex-col-center gap-1 min-[422px]:border-r border-dashed border-secondaryColor flex-1">
          <span className="md:text-[50px] text-[36px] leading-[36px] md:leading-[50px] text-mainColor font-bold font-Raj">
            <CountUp
              end={65}
              suffix="+"
              delay={0}
              duration={3.75}
              start={0}
              enableScrollSpy
            />
          </span>
          <p className=" md:text-[20px] text-lg font-normal whitespace-nowrap md:leading-[32px] font-liv text-customBlack">
            Companies
          </p>
        </div>
        <div className=" flex-col-center gap-1 flex-1">
          <span className="md:text-[50px] text-[36px] leading-[36px] md:leading-[50px] text-mainColor font-bold font-Raj">
            <CountUp
              end={362}
              delay={0}
              duration={3.75}
              start={0}
              enableScrollSpy
            />
          </span>
          <p className=" md:text-[20px] text-lg whitespace-nowrap font-normal md:leading-[32px] font-liv text-customBlack">
            Projects Done
          </p>
        </div>
      </div>
      {/* How we work */}
      <div className=" flex-col-center gap-9 w-full">
        <div className="flex-col-center gap-6 flex-wrap">
          <h2 className=" font-Raj lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
            How <span className=" text-mainColor2">we</span> work
          </h2>
          <p className=" font-liv text-base sm:w-2/3 md:w-1/2 text-center w-full leading-[24px] text-customBlack font-normal">
            Neque porro quisquam est, qui dolorem ipsum quia golor sit
            ametctetur, adipisci velit, sed eligendi optio cumque nihil impedit
          </p>
        </div>
        <div className=" grid w-full grid-cols-1 place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className=" relative overflow-hidden w-full px-[30px] hover:bg-lightColor single_process pt-[50px] pb-[25px] rounded-[15px] transition-all duration-300 ease-linear text-center ">
            <div className=" flex items-end justify-center min-h-[127px] text-center">
              <Image
                alt="Meet the client"
                src={MeetClient}
                width={129}
                height={129}
                className=" max-w-[100%]"
              />
            </div>
            <div className=" text-mainColor single_process_title text-[24px] leading-[1.3]  font-Raj mt-[7px] font-bold">
              Meet the Client
            </div>
            <div className=" opacity-30 absolute left-[25px] top-[20px] right-auto bottom-auto font-Raj leading-4 font-bold text-[40px] text-mainColor2 single_process_number">
              01
            </div>
            <div className=" transition-all duration-300 bottom-line absolute left-0 right-0 bottom-0 top-auto w-full h-[8px] bg-mainColor"></div>
          </div>
          {/*This is the end of 1 */}
          <div className=" relative overflow-hidden w-full px-[30px] hover:bg-lightColor single_process pt-[50px] pb-[25px] rounded-[15px] transition-all duration-300 ease-linear text-center ">
            <div className=" flex items-end justify-center min-h-[127px] text-center">
              <Image
                alt="Brainstorming"
                src={BrainStorm}
                width={129}
                height={129}
                className=" max-w-[100%]"
              />
            </div>
            <div className=" text-mainColor single_process_title text-[24px] leading-[1.3]  font-Raj mt-[7px] font-bold">
              Brainstorming
            </div>
            <div className=" opacity-30 absolute left-[25px] top-[20px] right-auto bottom-auto font-Raj leading-4 font-bold text-[40px] text-mainColor2 single_process_number">
              02
            </div>
            <div className=" transition-all duration-300 bottom-line absolute left-0 right-0 bottom-0 top-auto w-full h-[8px] bg-mainColor"></div>
          </div>
          {/*This is the end of 1 */}
          <div className=" relative overflow-hidden w-full px-[30px] hover:bg-lightColor single_process pt-[50px] pb-[25px] rounded-[15px] transition-all duration-300 ease-linear text-center ">
            <div className=" flex items-end justify-center min-h-[127px] text-center">
              <Image
                alt="solution"
                src={Solution}
                width={87}
                height={127}
                className=" max-w-[100%]"
              />
            </div>
            <div className=" text-mainColor single_process_title text-[24px] leading-[1.3]  font-Raj mt-[7px] font-bold">
              Solution
            </div>
            <div className=" opacity-30 absolute left-[25px] top-[20px] right-auto bottom-auto font-Raj leading-4 font-bold text-[40px] text-mainColor2 single_process_number">
              03
            </div>
            <div className=" transition-all duration-300 bottom-line absolute left-0 right-0 bottom-0 top-auto w-full h-[8px] bg-mainColor"></div>
          </div>
          {/*This is the end of 1 */}
          <div className=" relative overflow-hidden w-full px-[30px] hover:bg-lightColor single_process pt-[50px] pb-[25px] rounded-[15px] transition-all duration-300 ease-linear text-center ">
            <div className=" flex items-end justify-center w-full min-h-[127px] text-center">
              <Image
                alt="project done"
                src={ProjectDone}
                width={129}
                height={129}
                className=" max-w-[100%]"
              />
            </div>
            <div className=" text-mainColor single_process_title text-[24px] leading-[1.3]  font-Raj mt-[7px] font-bold">
              Project Done
            </div>
            <div className=" opacity-30 absolute left-[25px] top-[20px] right-auto bottom-auto font-Raj leading-4 font-bold text-[40px] text-mainColor2 single_process_number">
              04
            </div>
            <div className=" transition-all duration-300 bottom-line absolute left-0 right-0 bottom-0 top-auto w-full h-[8px] bg-mainColor"></div>
          </div>
          {/*This is the end of 1 */}
        </div>
      </div>
    </section>
  );
}
