import React from "react";
import Image from "next/image";
import Link from "next/link";
import afterHeroImage from "@/public/elimate_image.png";
import triangle from "@/public/tri-tag.png";
import glow from "@/public/glow.png";

import { FaRegCircle } from "react-icons/fa";

export default function AfterHero() {
  return (
    <section className=" flex font-Raj md:px-20 min-[800px]:justify-between flex-col justify-center pt-24 items-center gap-10 md:gap-6 min-[800px]:flex-row w-full px-5 ">
      <div className="relative">
        <div className=" w-full">
          <Image
            src={afterHeroImage}
            width={479}
            height={602}
            alt="lady holding laptop"
          />
        </div>
        <div className=" absolute z-10 right-0 top-16">
          <Image src={glow} width={175} height={248} alt="glow" />
        </div>
        <div className=" absolute z-10 right-12 bottom-28">
          <Image src={triangle} width={84} height={83} alt="triangle tag" />
        </div>
      </div>
      <div className=" flex-col-x-start-only w-full min-[800px]:w-1/2 gap-5 flex-wrap">
        <h2 className=" md:text-[42px] text-[30px] leading-[32px] md:leading-[45px] text-mainColor font-bold">
          Eliminate IT Challenges for your Business
        </h2>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          Neque porro quisquam est, qui dolorem ipsum quia golor sit amet, conse
          ctetur, adipisci velit, sed eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus mentioned technology
        </p>
        <ul className="text-customBlack text-base flex-col-x-start-only gap-5 leading-[26px] font-liv font-normal list-none">
          <div className=" flex-row-x-start-only gap-3">
            <span className=" flex shrink-0">
              <FaRegCircle color="#00b4d8" fontSize={17} />
            </span>
            <li>
              Neque porro quisquam est, qui dolorem ipsum quia more than enough
              impedit quo minus quod maxime facere possimus
            </li>
          </div>
          <div className=" flex-row-x-start-only gap-3">
            <span className=" flex shrink-0">
              <FaRegCircle color="#00b4d8" fontSize={17} />
            </span>
            <li>
              Neque porro quisquam est, qui dolorem ipsum quia more than enough
              impedit quo minus quod maxime facere possimus
            </li>
          </div>
          <div className=" flex-row-x-start-only gap-3">
            <span className=" flex shrink-0">
              <FaRegCircle color="#00b4d8" fontSize={17} />
            </span>{" "}
            <li>
              Neque porro quisquam est, qui dolorem ipsum quia more than enough
              impedit quo minus quod maxime facere possimus
            </li>
          </div>
        </ul>
        <Link
          href="/contact"
          className="bg-primary-gradient text-white font-semibold py-[10px] px-[27px] text-[20px] leading-[26px] rounded-[25px] tracking-tight"
        >
          Lets talk
        </Link>
      </div>
    </section>
  );
}
