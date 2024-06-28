import React from "react";
import Image from "next/image";
import Link from "next/link";
import service1Image from "@/public/service1.jpg";
import service2Image from "@/public/service2.jpg";
import { services } from "../lib/helper";

export default function ServiceBlockOne() {
  return (
    <div className=" w-full flex-row-center bg-white py-20 pt-24 px-4 min-[975px]:gap-14 md:px-10 lg:px-12">
      <div className=" overflow-hidden  hidden min-[975px]:flex flex-1 ">
        <Image
          src={service1Image}
          alt="service image 1"
          width={270}
          height={419}
        />
      </div>
      <div className="min-[975px]:flex-[4] w-full flex-col-x-start-only gap-8">
        <div className=" flex flex-col justify-center min-[750px]:flex-row sm:items-center min-[750px]:items-end items-center gap-14 w-full">
          <div className=" w-full min-[750px]:w-[65%]  h-full overflow-hidden">
            <Image
              src={service2Image}
              alt="service blog 1"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" bg-lightColor min-[750px]:w-[45%]  w-full flex-col-center px-6 py-8 rounded-[20px] overflow-hidden">
            {services.map((item, idx) => (
              <Link
                key={idx}
                href={`/${item.href}`}
                className=" border-b border-[#86c4e0] text-center w-full whitespace-nowrap font-Raj font-bold py-3 text-[24px] leading-[38px] text-mainColor hover:text-mainColor2 transition-colors duration-150"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className=" flex-col-x-start-only gap-5 w-full">
          <h2 className=" font-Raj lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
            Database Security
          </h2>
          <p className=" font-liv text-xl text-left  w-full leading-[32px] text-customBlack font-normal">
            We are Optitech provide the best quality It solution neque porro
            quisquam est qui dolore ipsum quia golor sit amet, conse ctetur,
            adipisci velit, sed eligendi optio cumque nihil take a trivial
            example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from more than a great service that
            we provide
          </p>
        </div>
      </div>
    </div>
  );
}
