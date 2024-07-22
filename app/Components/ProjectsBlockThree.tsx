import React from "react";
import Image from "next/image";
import tryImage from "@/public/try.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { urlFor } from "../lib/client";

interface ProjectsBlockThreeProps {
  blockThreeData: projectBlock4Type;
}

export default function ProjectsBlockThree({
  blockThreeData,
}: ProjectsBlockThreeProps) {
  return (
    <section className=" w-full flex-col-x-start-only  bg-white py-10 pt-14  px-6 gap-6 md:px-12 lg:px-16">
      <div className="flex-col-x-start-only gap-5 w-full ">
        <h2 className=" md:text-[42px] text-[30px] leading-[32px] md:leading-[45px] text-mainColor font-bold">
          {blockThreeData.subject}
        </h2>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          {blockThreeData.para1}
        </p>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          {blockThreeData.para2}
        </p>
      </div>
      <div className=" w-full flex flex-col  h-full  items-start justify-center min-[750px]:flex-row bg-white py-8 gap-8   min-[975px]:gap-14">
        <div className="flex-1 min-h-[300px]: md:min-h-[400px]: lg:min-h-[450px] rounded-[20px] overflow-hidden gap-6 w-full min-[750px]:w-1/2">
          <img
            src={urlFor(blockThreeData.image).url()}
            alt="service image 3"
            className=" w-full h-full object-cover "
          />
        </div>
        <div className=" flex-col-x-start-only gap-6 w-full min-[750px]:w-1/2">
          <p className=" text-[20px] leading-[32px] font-liv  text-mainColor">
            {blockThreeData.para3}
          </p>
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            {blockThreeData.para4}
          </p>
          <div className=" flex-col-x-start-only w-full gap-4">
            {blockThreeData.listings.map((item, idx) => (
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
    </section>
  );
}
