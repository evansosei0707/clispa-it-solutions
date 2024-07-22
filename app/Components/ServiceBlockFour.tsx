import React from "react";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import service5Image from "@/public/service5.jpg";
import { urlFor } from "../lib/client";

interface ServiceBlockFourProps {
  blockFourData: serviceBlock4Type;
}

export default function ServiceBlockFour({
  blockFourData,
}: ServiceBlockFourProps) {
  return (
    <div className=" w-full flex flex-col-reverse items-start justify-center min-[750px]:flex-row-reverse bg-white py-8 gap-8  px-4 min-[975px]:gap-14 md:px-10 lg:px-12">
      <div className=" flex-col-x-start-only flex-1 rounded-[20px] overflow-hidden gap-6 w-full min-[750px]:w-1/2">
        <img
          src={urlFor(blockFourData.image).url()}
          alt="service image 3"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" flex-col-x-start-only gap-6 w-full min-[750px]:w-1/2">
        <h2 className=" font-Raj w-full lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
          {blockFourData.subject}
        </h2>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          {blockFourData.para1}
        </p>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          {blockFourData.para2}
        </p>
        <div className=" flex-col-x-start-only w-full gap-4">
          {blockFourData.listings.map((item, idx) => (
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
