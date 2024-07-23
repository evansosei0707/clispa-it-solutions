import React from "react";
import mainProjectImage from "@/public/clispa_services_banner.jpg";
import { urlFor } from "../lib/client";
import { formatDateTime } from "../lib/helper";

interface ProjectsBlockOneProps {
  blockOneData: ProjectsListType;
}

export default function ProjectsBlockOne({
  blockOneData,
}: ProjectsBlockOneProps) {
  return (
    <div className=" w-full flex-col-x-start-only bg-white py-10 pt-14  px-6 gap-10 md:px-12 lg:px-16">
      <div className="flex-col-x-start-only gap-2 w-full">
        <h1 className="  lg:text-[42px] text-left text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold font-Raj mb-[10px]">
          {blockOneData.title}
        </h1>
        <p className=" font-liv text-[20px] md:w-[90%] lg:w-[70%]  text-left w-full leading-[32px] text-customBlack font-normal">
          {blockOneData.projectBlock1.firstPara}
        </p>
      </div>
      <div className=" border-2 border-mainColor rounded-[30px] overflow-hidden h-full min-[260px] md:min-h-[409px] min-[990px]:min-h-[545px] min-[1260px]:min-h-[662px] w-full">
        <img
          src={urlFor(blockOneData.projectBlock1.image).url()}
          alt="training page banner"
          className=" object-cover w-full h-full object-center"
        />
      </div>
      <div className=" flex-col-x-start-only w-full gap-3">
        <h2 className="  lg:text-[42px] whitespace-nowrap text-left text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold font-Raj max-w-[250px] mb-[10px]">
          Project Information
        </h2>
        <div className=" flex items-center flex-wrap justify-start gap-5 w-full">
          <div className=" flex-col-x-start-only flex-1 ">
            <h3 className="text-left text-[24px] whitespace-nowrap leading-[38px] font-bold font-Raj underline capitalize text-mainColor2">
              Client Name
            </h3>
            <p className=" text-left font-liv whitespace-nowrap text-[20px] leading-[32px] text-customBlack font-normal">
              {blockOneData.projectInfo.clientNmae}
            </p>
          </div>
          <div className=" flex-col-x-start-only flex-1">
            <h3 className="text-left text-[24px] leading-[38px] font-bold font-Raj underline capitalize text-mainColor2">
              Date
            </h3>
            <p className=" text-left whitespace-nowrap font-liv text-[20px] leading-[32px] text-customBlack font-normal">
              {formatDateTime(blockOneData.projectInfo.dateTime)}
            </p>
          </div>
          <div className=" flex-col-x-start-only flex-1">
            <h3 className="text-left text-[24px] leading-[38px] font-bold font-Raj underline capitalize text-mainColor2">
              Category
            </h3>
            <p className=" text-left font-liv whitespace-nowrap text-[20px] leading-[32px] text-customBlack font-normal">
              {blockOneData.projectInfo.category.title}
            </p>
          </div>
          <div className=" flex-col-x-start-only flex-1">
            <h3 className="text-left text-[24px] leading-[38px] font-bold font-Raj underline capitalize text-mainColor2">
              Address
            </h3>
            <p className=" text-left whitespace-nowrap font-liv text-[20px] leading-[32px] text-customBlack font-normal">
              {blockOneData.projectInfo.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
