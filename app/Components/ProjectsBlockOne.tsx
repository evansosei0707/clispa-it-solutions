import React from "react";
import mainProjectImage from "@/public/clispa_services_banner.jpg";
import Image from "next/image";

export default function ProjectsBlockOne() {
  return (
    <div className=" w-full flex-col-x-start-only bg-white py-10 pt-14  px-6 gap-10 md:px-12 lg:px-16">
      <div className="flex-col-x-start-only gap-2 w-full">
        <h1 className="  lg:text-[42px] text-left text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold font-Raj mb-[10px]">
          IT Management
        </h1>
        <p className=" font-liv text-[20px] md:w-[90%] lg:w-[70%]  text-left w-full leading-[32px] text-customBlack font-normal">
          IT Consultancy provide the best quality It solution neque porro
          quisquam est qui dolore ipsum quia golor sit amet, conse ctetur,
          adipisci velit, sed eligendi optio cumque nihil take a trivial
          example, which of us ever undertakes laborious physical exercise,
          except
        </p>
      </div>
      <div className=" border-2 border-mainColor rounded-[30px] overflow-hidden h-full min-[260px] md:min-h-[409px] min-[990px]:min-h-[545px] min-[1260px]:min-h-[662px] w-full">
        <Image
          src={mainProjectImage}
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
              Flex Corporation
            </p>
          </div>
          <div className=" flex-col-x-start-only flex-1">
            <h3 className="text-left text-[24px] leading-[38px] font-bold font-Raj underline capitalize text-mainColor2">
              Date
            </h3>
            <p className=" text-left whitespace-nowrap font-liv text-[20px] leading-[32px] text-customBlack font-normal">
              12 August, 2024
            </p>
          </div>
          <div className=" flex-col-x-start-only flex-1">
            <h3 className="text-left text-[24px] leading-[38px] font-bold font-Raj underline capitalize text-mainColor2">
              Category
            </h3>
            <p className=" text-left font-liv whitespace-nowrap text-[20px] leading-[32px] text-customBlack font-normal">
              Consultancy
            </p>
          </div>
          <div className=" flex-col-x-start-only flex-1">
            <h3 className="text-left text-[24px] leading-[38px] font-bold font-Raj underline capitalize text-mainColor2">
              Address
            </h3>
            <p className=" text-left whitespace-nowrap font-liv text-[20px] leading-[32px] text-customBlack font-normal">
              25K, North City, New York
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
