import React from "react";
import Image from "next/image";
import MeetClient from "@/public/meet_the_client.png";
import BrainStorm from "@/public/brainstorm.png";
import Solution from "@/public/solution.png";
import ProjectDone from "@/public/project_done.png";
import CountUpStats from "./CountUp";
import { urlFor } from "../lib/client";

interface HomeStatisticsProps {
  homeStatsData: homePageTypes;
}

export default function HomeStatistics({ homeStatsData }: HomeStatisticsProps) {
  return (
    <section className=" px-6 md:px-12 lg:px-20 gap-14 lg:gap-20 my-20 w-full flex-col-center">
      {/* Statistics Here! */}
      <CountUpStats countUpData={homeStatsData.homeStats} />
      {/* How we work */}
      <div className=" flex-col-center gap-9 w-full">
        <div className="flex-col-center gap-6 flex-wrap">
          <h2 className=" font-Raj lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
            How <span className=" text-mainColor2">we</span> work
          </h2>
          <p className=" font-liv text-base sm:w-2/3 md:w-1/2 text-center w-full leading-[24px] text-customBlack font-normal">
            {homeStatsData.howWeWork.para}
          </p>
        </div>
        <div className=" grid w-full grid-cols-1 place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {homeStatsData.howWeWork.process.map((item, idx) => (
            <div
              key={idx}
              className=" relative overflow-hidden w-full px-[30px] hover:bg-lightColor single_process pt-[50px] pb-[25px] rounded-[15px] transition-all duration-300 ease-linear text-center "
            >
              <div className=" flex items-end justify-center min-h-[127px] text-center">
                <Image
                  alt="Meet the client"
                  src={urlFor(item.Image).url()}
                  width={129}
                  height={129}
                  className=" max-w-[100%]"
                />
              </div>
              <div className=" text-mainColor single_process_title text-[24px] leading-[1.3]  font-Raj mt-[7px] font-bold">
                {item.title}
              </div>
              <div className=" opacity-30 absolute left-[25px] top-[20px] right-auto bottom-auto font-Raj leading-4 font-bold text-[40px] text-mainColor2 single_process_number">
                0{idx + 1}
              </div>
              <div className=" transition-all duration-300 bottom-line absolute left-0 right-0 bottom-0 top-auto w-full h-[8px] bg-mainColor"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
