import React from "react";
import Image from "next/image";
import afterHeroImage from "@/public/elimate_image.png";
import triangle from "@/public/tri-tag.png";
import glow from "@/public/glow.png";

import { FaRegCircle } from "react-icons/fa";

export default function ProjectsBlockTwo() {
  return (
    <section className=" flex font-Raj md:px-20 min-[800px]:justify-between flex-col justify-center items-center gap-10 md:gap-6 min-[800px]:flex-row-reverse w-full px-5 ">
      <div className="relative hidden min-[800px]:block">
        <div className=" w-full image_rotate ">
          <Image
            src={afterHeroImage}
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
          How this Project works
        </h2>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
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
            The main way to solve the the best quality It solution neque porro
            quisquam qui dolorem ipsum quia golor sit amet, conse ctetur,
            adipisci velit, sed eligendi optio cumque nihil impedit quo minus id
            quod maxime placeat
          </p>
        </div>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          The main way to solve the the best quality It solution neque porro
          quisquam qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
          velit, sed eligendi optio cumque nihil impedit quo minus id quod
          maxime placeat
        </p>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          The main way to solve the the best quality It solution neque porro
          quisquam qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
          velit, sed eligendi optio cumque nihil impedit quo minus id quod
          maxime placeat
        </p>
      </div>
    </section>
  );
}
