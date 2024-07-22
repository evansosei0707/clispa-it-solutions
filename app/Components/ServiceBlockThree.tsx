import React from "react";
import Image from "next/image";
import service4Image from "@/public/service3.jpg";
import { urlFor } from "../lib/client";

interface ServiceBlockThreeProps {
  blockThreeData: serviceBlock3Type;
}

export default function ServiceBlockThree({
  blockThreeData,
}: ServiceBlockThreeProps) {
  return (
    <div className=" w-full flex flex-col items-start justify-center min-[750px]:flex-row bg-white py-9 gap-8  px-4 min-[975px]:gap-14 md:px-10 lg:px-12">
      <div className=" flex-col-x-start-only flex-1 rounded-[20px] overflow-hidden gap-6 w-full min-[750px]:w-1/2">
        <img
          src={urlFor(blockThreeData.image).url()}
          alt="service image 3"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" flex-col-x-start-only gap-6 w-full min-[750px]:w-1/2">
        <h2 className=" font-Raj w-full lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
          {blockThreeData.subject}
        </h2>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          {blockThreeData.para1}
        </p>
        <div className=" border-l border-mainColor2 pl-7 flex-col-x-start-only w-full gap-4">
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            {blockThreeData.legend1}
          </p>
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            {blockThreeData.legend2}
          </p>
        </div>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          {blockThreeData.para2}
        </p>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          {blockThreeData.para3}
        </p>
      </div>
    </div>
  );
}
