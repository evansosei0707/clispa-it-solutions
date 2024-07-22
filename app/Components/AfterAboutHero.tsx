"use client";

import React, { useState } from "react";
import Image from "next/image";
import afterHeroImage from "@/public/service_person.png";
import triangle from "@/public/tri-tag.png";
import glow from "@/public/glow.png";
import message1 from "@/public/message1.png";
import message2 from "@/public/message2.png";

import { FaRegCircle } from "react-icons/fa";
import { urlFor } from "../lib/client";

interface AfterAboutHeroProps {
  afterAboutData: aboutBlockType;
}

export default function AfterAboutHero({
  afterAboutData,
}: AfterAboutHeroProps) {
  const [switchVision, setSwitchVision] = useState("mission");

  return (
    <section className=" flex font-Raj bg-white pb-20 md:px-20 min-[800px]:justify-between flex-col justify-center pt-24 items-center gap-10 md:gap-6 min-[800px]:flex-row w-full px-5 ">
      <div className="relative">
        <div className=" w-full">
          <Image
            src={urlFor(afterAboutData.image).url()}
            width={479}
            height={602}
            alt="lady holding laptop"
          />
        </div>
        <div className=" absolute z-10 right-0 top-6">
          <Image src={message1} width={136} height={114} alt="glow" />
        </div>
        <div className=" absolute z-10 left-3 max-[600px]:-left-2 top-2 ">
          <Image src={message2} width={123} height={107} alt="triangle tag" />
        </div>
      </div>
      <div className=" flex-col-x-start-only w-full min-[800px]:w-1/2 gap-5 flex-wrap">
        <h2 className=" md:text-[42px] text-[30px] leading-[32px] md:leading-[45px] text-mainColor font-bold">
          Hi <span className=" text-mainColor2">there!</span>
        </h2>
        <p className=" text-[20px] leading-[32px] text-mainColor font-medium font-liv">
          {afterAboutData.subTitle}
        </p>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          {afterAboutData.para1}
        </p>
        <div className="  flex flex-col-x-start-only">
          <h3 className=" text-[20px] leading-[32px] font-bold text-mainColor2 cursor-pointer font-Raj">
            <span
              onClick={() => setSwitchVision("mission")}
              className={`${switchVision === "mission" && "text-mainColor"} `}
            >
              Mission
            </span>{" "}
            /{" "}
            <span
              className={`${switchVision === "vision" && "text-mainColor"} `}
              onClick={() => setSwitchVision("vision")}
            >
              Vision
            </span>
          </h3>
          {switchVision === "mission" ? (
            <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
              {afterAboutData.mission}
            </p>
          ) : (
            <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
              {afterAboutData.vision}
            </p>
          )}
        </div>
        <a
          href="/contact#getQuote"
          className="bg-primary-gradient text-white font-semibold py-[10px] px-[27px] text-[20px] leading-[26px] rounded-[25px] tracking-tight"
        >
          Lets talk
        </a>
      </div>
    </section>
  );
}
