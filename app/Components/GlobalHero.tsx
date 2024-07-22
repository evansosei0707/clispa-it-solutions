import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";

interface GlobalHeroProps {
  titleStart: string;
  titleEnd: string;
  description: string;
  bannerImage: any;
  parentLink: string;
  childLink?: string;
}

export default function GlobalHero({
  titleStart,
  titleEnd,
  description,
  bannerImage,
  parentLink,
  childLink,
}: GlobalHeroProps) {
  return (
    <div className=" relative w-full h-[400px] md:h-[450px] md:max-h-[500px]  overflow-hidden">
      <div className=" absolute top-0 left-0 flex-col-center font-Raj text-white w-full h-full bg-black bg-opacity-70">
        <h1 className=" text-[48px] leading-[54px] md:text-[56px] md:leading-[63px] lg:text-[72px] lg:leading-[81px] font-bold text-white">
          {titleStart} <span className=" text-mainColor2">{titleEnd}</span>
        </h1>
        <p className=" md:text-[20px] text-lg text-center font-liv md:leading-[32px] text-white w-[90%] lg:w-[35%] md:w-1/2">
          {description}
        </p>
        <p className=" text-white font-Raj pt-4 font-semibold text-[20px] leading-[32px] whitespace-nowrap">
          <Link
            href="/"
            className=" hover:text-mainColor2 transition-colors duration-150"
          >
            Home
          </Link>{" "}
          /
          {!!childLink ? (
            <Link
              href={`/${parentLink}`}
              className=" hover:text-mainColor2 capitalize transition-colors duration-150"
            >
              {parentLink}
            </Link>
          ) : (
            <span className=" capitalize">{parentLink}</span>
          )}
          {!!childLink && <span> /{childLink}</span>}
        </p>
      </div>
      <img
        src={urlFor(bannerImage).url()}
        alt="about Banner image"
        className=" w-full h-full object-cover object-center"
      />
    </div>
  );
}
