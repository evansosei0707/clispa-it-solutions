import React from "react";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import service4Image from "@/public/service4.jpg";

export default function ServiceBlockTwo() {
  return (
    <div className=" w-full flex flex-col-reverse items-start justify-center min-[750px]:flex-row-reverse bg-white py-5 gap-8  px-4 min-[975px]:gap-14 md:px-10 lg:px-12">
      <div className=" flex-col-x-start-only flex-1 rounded-[20px] overflow-hidden gap-6 w-full min-[750px]:w-1/2">
        <Image
          src={service4Image}
          alt="service image 3"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" flex-col-x-start-only gap-6 w-full min-[750px]:w-1/2">
        <h2 className=" font-Raj w-full lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
          Which area we cover
        </h2>
        <div className="flex-col-x-start-only w-full gap-2">
          <h4 className=" text-[20px] leading-[32px] text-mainColor2 font-medium font-liv">
            In IT Management Service we cover most of the IT problems that your
            company faces and we try to solve it.
          </h4>
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            We are Optitech provide the best quality It solution neque porro
            quisquam est qui dolorem ipsum quia golor sit amet, conse ctetur,
            adipisci velit, sed eligendi optio cumque nihil impedit quo minus id
            quod maxime placeat
          </p>
        </div>
        <div className=" flex-col-x-start-only w-full gap-4">
          <div className=" flex justify-start items-start gap-4 w-full">
            <span className=" whitespace-nowrap flex flex-shrink-0 text-mainColor">
              <IoIosCheckmarkCircle fontSize={25} />
            </span>
            <p className=" text-base leading-[26px] font-liv  text-customBlack">
              IT Management provide the most service neque porro quisquam est
              qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
              velit
            </p>
          </div>
          <div className=" flex justify-start items-start gap-4 w-full">
            <span className=" whitespace-nowrap flex flex-shrink-0 text-mainColor">
              <IoIosCheckmarkCircle fontSize={25} />
            </span>
            <p className=" text-base leading-[26px] font-liv  text-customBlack">
              IT Management provide the most service neque porro quisquam est
              qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
              velit
            </p>
          </div>
          <div className=" flex justify-start items-start gap-4 w-full">
            <span className=" whitespace-nowrap flex flex-shrink-0 text-mainColor">
              <IoIosCheckmarkCircle fontSize={25} />
            </span>
            <p className=" text-base leading-[26px] font-liv  text-customBlack">
              IT Management provide the most service neque porro quisquam est
              qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
              velit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
