import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../lib/helper";
import { urlFor } from "../lib/client";

interface ServiceBlockOneProps {
  blockOneData: serviceBlock1Type;
  title: string;
  slug: string;
}

export default function ServiceBlockOne({
  blockOneData,
  title,
  slug,
}: ServiceBlockOneProps) {
  return (
    <div className=" w-full flex-row-center bg-white py-20 pt-24 px-4 min-[975px]:gap-14 md:px-10 lg:px-12">
      <div className=" overflow-hidden w-full  hidden min-[975px]:flex flex-1 ">
        <img
          src={urlFor(blockOneData.image1).url()}
          alt="service image 1"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="min-[975px]:flex-[4] w-full min-[975px]:w-[75%] flex-col-x-start-only gap-8">
        <div className=" flex flex-col justify-center min-[750px]:flex-row sm:items-center min-[750px]:items-end items-center gap-14 w-full">
          <div className=" w-full min-[750px]:w-[60%]  h-full overflow-hidden">
            <img
              src={urlFor(blockOneData.image2).url()}
              alt="service blog 1"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" bg-lightColor min-[750px]:w-[45%]  w-full flex-col-center px-6 py-8 rounded-[20px] overflow-hidden">
            {services.map((item, idx) => (
              <Link
                key={idx}
                href={`/services/${item.href}`}
                className={`${
                  item.href === slug
                    ? "text-mainColor2 text-[28px] leading-[40px] "
                    : " text-mainColor"
                } border-b border-[#86c4e0] text-center w-full whitespace-nowrap font-Raj font-bold py-3 text-[24px] leading-[38px] text-mainColor hover:text-mainColor2 transition-colors duration-150 `}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className=" flex-col-x-start-only gap-5 w-full">
          <h2 className=" font-Raj lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
            {title}
          </h2>
          <p className=" font-liv text-xl text-left  w-full leading-[32px] text-customBlack font-normal">
            {blockOneData.firstPara}
          </p>
        </div>
      </div>
    </div>
  );
}
