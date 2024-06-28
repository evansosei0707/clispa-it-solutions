import React from "react";
import Image from "next/image";
import service4Image from "@/public/service3.jpg";

export default function ServiceBlockThree() {
  return (
    <div className=" w-full flex flex-col items-start justify-center min-[750px]:flex-row bg-white py-9 gap-8  px-4 min-[975px]:gap-14 md:px-10 lg:px-12">
      <div className=" flex-col-x-start-only flex-1 rounded-[20px] overflow-hidden gap-6 w-full min-[750px]:w-1/2">
        <Image
          src={service4Image}
          alt="service image 3"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" flex-col-x-start-only gap-6 w-full min-[750px]:w-1/2">
        <h2 className=" font-Raj w-full lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
          How it works
        </h2>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          We are Optitech provide the best quality It solution neque porro
          quisquam est qui dolorem ipsum quia golor sit amet, conse ctetur,
          adipisci velit, sed eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat
        </p>
        <div className=" border-l border-mainColor2 pl-7 flex-col-x-start-only w-full gap-4">
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            IT Management provide the most service neque porro quisquam est qui
            dolorem ipsum quia golor sit amet, conse ctetur, adipisci velit
          </p>
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            IT Management provide the most service neque porro quisquam est qui
            dolorem ipsum quia golor sit amet, conse ctetur, adipisci velit
          </p>
        </div>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          The main way to solve the the best quality It solution neque porro
          quisquam qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
          velit, sed eligendi optio cumque nihil impedit quo minus id quod
          maxime placeat
        </p>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          Great deal dolorem ipsum quia golor sit amet, conse ctetur, adipisci
          velit, sed optio cumque nihil impedit quo minus id quod maxime placeat
        </p>
      </div>
    </div>
  );
}
