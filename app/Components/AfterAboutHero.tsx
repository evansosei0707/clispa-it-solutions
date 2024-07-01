import React from "react";
import Image from "next/image";
import afterHeroImage from "@/public/service_person.png";
import triangle from "@/public/tri-tag.png";
import glow from "@/public/glow.png";
import message1 from "@/public/message1.png";
import message2 from "@/public/message2.png";

import { FaRegCircle } from "react-icons/fa";

export default function AfterAboutHero() {
  return (
    <section className=" flex font-Raj bg-white pb-20 md:px-20 min-[800px]:justify-between flex-col justify-center pt-24 items-center gap-10 md:gap-6 min-[800px]:flex-row w-full px-5 ">
      <div className="relative">
        <div className=" w-full">
          <Image
            src={afterHeroImage}
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
          Over 25 years working in IT services developing software applications
          and mobile apps for clients all over the world.
        </p>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          We are Optitech provide the best quality It solution neque porro
          quisquam est qui dolorem ipsum quia golor sit amet, conse ctetur,
          adipisci velit, sed eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat facere possim us mentioned most effective
          technology to solve problem
        </p>
        <div className="  flex flex-col-x-start-only">
          <h3 className=" text-[20px] leading-[32px] font-bold text-mainColor cursor-pointer font-Raj">
            <span className=" text-mainColor2">Mission</span> / Vision
          </h3>
          <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
            We set our Mission quisquam est, qui dolorem ipsum quia more than
            enough impedit quo minus quod maxime facere possimus pleasure
            rationally encoun ter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain
          </p>
        </div>
        <a
          href="#"
          className="bg-primary-gradient text-white font-semibold py-[10px] px-[27px] text-[20px] leading-[26px] rounded-[25px] tracking-tight"
        >
          Lets talk
        </a>
      </div>
    </section>
  );
}
