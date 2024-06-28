import React from "react";
import { services } from "../lib/helper";
import Image from "next/image";
import Link from "next/link";

export default function ServicesList() {
  return (
    <div
      id="serviceList"
      className=" flex flex-col items-center px-4 md:w-[95%] pt-20  py-14 justify-center gap-8 bg-white w-full"
    >
      <div className=" flex-col-center gap-4 w-full">
        <h2 className=" font-Raj lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
          Services <span className=" text-mainColor2">that we </span> provide
        </h2>
        <p className=" font-liv text-base sm:w-2/3 md:w-1/2 lg:w-[43%] text-center w-full leading-[24px] text-customBlack font-normal">
          Neque porro quisquam est, qui dolorem ipsum quia golor sit ametctetur,
          adipisci velit, sed eligendi optio cumque nihil impedit
        </p>
      </div>
      <div className="grid place-items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item, idx) => (
          <div
            key={idx}
            className=" flex flex-col service-box justify-center items-center gap-4 w-full rounded-[10px] bg-[#e7fbff] overflow-hidden p-7"
          >
            <div className=" w-full  rounded-[10px] overflow-hidden h-[250px]">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
            <div className=" font-Raj flex-col-center pb-8 gap-4">
              <Link
                href="/services/1"
                className=" text-[24px] leading-[31px] text-mainColor whitespace-nowrap font-bold"
              >
                {item.title}
              </Link>
              <p className=" font-liv text-center px-4 text-base leading-[26px] font-normal text-customBlack">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
