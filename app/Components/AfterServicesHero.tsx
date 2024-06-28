import React from "react";
import Image from "next/image";
import Link from "next/link";
import ChooseImage from "@/public/chooseUs_image.png";
import expertTeams from "@/public/expert_team.png";
import quickAction from "@/public/quick_action.png";
import latestTech from "@/public/latest_tech.png";

export default function AfterServicesHero() {
  return (
    <section className=" flex md:px-20 bg-white font-Raj min-[800px]:justify-between flex-col justify-center pt-24 items-center gap-10 md:gap-6 min-[800px]:flex-row w-full px-5">
      <div className=" flex-col-x-start-only w-full min-[800px]:w-[45%] min-[800px]:pr-12 gap-5 flex-wrap">
        <h2 className=" lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold">
          We have the <span className="text-mainColor2">best IT Services</span>{" "}
          <span className="text-mainColor2">to solve your</span>
          {""}Problems
        </h2>
        <p className=" text-[20px] leading-[32px] text-mainColor2 font-medium font-liv">
          Over 25 years working in IT services developing software applications
          and mobile apps for clients all over the world.
        </p>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          We are Optitech provide the best quality It solution neque porro qui
          dolorem ipsum quia golor sit amet, conse ctetur, adipisci velit, optio
          cumque nihil impedit quo minus id quod maxime placossim us mentioned
          most effective technology to solve problem
        </p>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          We set our Mission quisquam est, qui dolorem ipsum quia more impedit
          quo minus quod maxime facere possimus pleasure
        </p>
        <Link
          href="/services#serviceList"
          className=" text-[24px] leading-[38px] text-mainColor font-medium underline"
        >
          Choose your Desired Services
        </Link>
      </div>
      <div className="relative">
        <div className=" w-full">
          <Image
            src={ChooseImage}
            width={535}
            height={712}
            alt="Man pointing to the reason why you should choose us"
          />
          <div className=" absolute -left-[10px] sm:-left-[100px] top-auto right-auto text-[20px] max-w-[166px] text-mainColor z-10 leading-6 font-semibold  bottom-[102px] font-raj py-[16px] px-[30px] rounded-[15px] float-text bg-[#ffffffdb]">
            <p>100% Clients Satisfaction</p>
          </div>
          <div className=" absolute top-auto right-2 sm:-right-4 left-auto text-[20px] text-mainColor z-10 max-w-[220px] leading-6 font-semibold  bottom-[261px] font-raj py-[20px] pr-[30px] pl-[25px] rounded-[15px] float-text bg-[#ffffffdb]">
            <p>Get Perfect Solution for your Problems</p>
          </div>
        </div>
        {/* <div className=" absolute z-10 right-0 top-16">
        <Image src={glow} width={175} height={248} alt="glow" />
      </div>
      <div className=" absolute z-10 right-12 bottom-28">
        <Image src={triangle} width={84} height={83} alt="triangle tag" />
      </div> */}
      </div>
    </section>
  );
}
