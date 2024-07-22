import React from "react";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import service4Image from "@/public/service4.jpg";
import { urlFor } from "../lib/client";

interface ServiceBlockTwoProps {
  blockTwoData: serviceBlock2Type;
}

export default function ServiceBlockTwo({
  blockTwoData,
}: ServiceBlockTwoProps) {
  return (
    <div className=" w-full flex flex-col-reverse items-start justify-center min-[750px]:flex-row-reverse bg-white py-5 gap-8  px-4 min-[975px]:gap-14 md:px-10 lg:px-12">
      <div className=" flex-col-x-start-only flex-1 rounded-[20px] overflow-hidden gap-6 w-full min-[750px]:w-1/2">
        <img
          src={urlFor(blockTwoData.image).url()}
          alt="service image 3"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" flex-col-x-start-only gap-6 w-full min-[750px]:w-1/2">
        <h2 className=" font-Raj w-full lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
          {blockTwoData.subject}
        </h2>
        <div className="flex-col-x-start-only w-full gap-2">
          <h4 className=" text-[20px] leading-[32px] text-mainColor2 font-medium font-liv">
            {blockTwoData.subTitle}
          </h4>
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            {blockTwoData.para}
          </p>
        </div>
        <div className=" flex-col-x-start-only w-full gap-4">
          {blockTwoData.listings.map((item, idx) => (
            <div
              key={idx}
              className=" flex justify-start items-start gap-4 w-full"
            >
              <span className=" whitespace-nowrap flex flex-shrink-0 text-mainColor">
                <IoIosCheckmarkCircle fontSize={25} />
              </span>
              <p className=" text-base leading-[26px] font-liv  text-customBlack">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
