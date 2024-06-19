import Image from "next/image";
import React from "react";
import heroImage from "@/public/clispa_hero_image.png";
import arrowUnderHero from "@/public/arrow_hero_image.png";
import playImage from "@/public/play_image.png";

export default function HomeHero() {
  return (
    <section className=" flex md:px-20 font-Raj min-[800px]:justify-between flex-col justify-center pt-12 items-center gap-6 min-[800px]:flex-row w-full px-5 ">
      <div className=" flex-row-x-start-only w-full min-[800px]:w-1/2 gap-5 flex-wrap">
        <h1 className=" md:text-[72px] text-[40px] leading-[45px] font-bold text-mainColor md:leading-[81px]">
          IT <span className=" underline text-mainColor2">Solutions</span> for
          your Business
        </h1>
        <p className=" text-[20px] leading-[32px] font-liv text-[#0c0c0c]">
          Neque porro quisquam est, qui dolorem ipsum quia golor sit amet,
          consectetur, adipisci velit, sed
        </p>
        <div className=" flex-row-center gap-8">
          <a
            href="#"
            className="bg-primary-gradient text-white font-semibold py-[10px] px-[27px] text-[20px] leading-[26px] rounded-[25px] tracking-tight"
          >
            Learn more
          </a>
          <div className="flex-row-center gap-2">
            <Image
              src={playImage}
              alt="play button image"
              width={31}
              height={31}
            />
            <span className=" font-liv text-base text-mainColor2">
              Watch Video
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className=" w-full">
          <Image src={heroImage} width={750} height={750} alt="hero Image" />
        </div>
        <div className=" absolute bottom-10 left-0 sm:left-5 md:left-12">
          <Image
            src={arrowUnderHero}
            width={110}
            height={94}
            alt="Arrow Hero Image"
          />
        </div>
      </div>
    </section>
  );
}
