import React from "react";
import Image from "next/image";
import triangle from "@/public/tri-tag.png";
import glow from "@/public/glow.png";
import { urlFor } from "../lib/client";

interface ProjectsBlockTwoProps {
  blockTwoData: howProjectWorksType;
}

export default function ProjectsBlockTwo({
  blockTwoData,
}: ProjectsBlockTwoProps) {
  return (
    <section className=" flex font-Raj md:px-20 min-[800px]:justify-between flex-col justify-center items-center gap-10 md:gap-6 min-[800px]:flex-row-reverse w-full px-5 ">
      <div className="relative hidden min-[800px]:block">
        <div className=" w-full image_rotate ">
          <Image
            src={urlFor(blockTwoData.image).url()}
            width={479}
            height={602}
            alt="lady holding laptop"
          />
        </div>
        <div className=" absolute z-10 left-0 image_rotate top-16">
          <Image src={glow} width={175} height={248} alt="glow" />
        </div>
        <div className=" absolute z-10 left-12 image_rotate bottom-28">
          <Image src={triangle} width={84} height={83} alt="triangle tag" />
        </div>
      </div>
      <div className=" flex-col-x-start-only w-full min-[800px]:w-1/2 gap-5 flex-wrap">
        <h2 className=" md:text-[42px] text-[30px] leading-[32px] md:leading-[45px] text-mainColor font-bold">
          {blockTwoData.subject}
        </h2>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          {blockTwoData.para1}
        </p>
        <div className=" border-l border-mainColor2 pl-7 flex-col-x-start-only w-full gap-4">
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            {blockTwoData.legend1}
          </p>
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            {blockTwoData.legend2}
          </p>
        </div>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          {blockTwoData.para2}
        </p>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          {blockTwoData.para3}
        </p>
      </div>
    </section>
  );
}
