import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhiteLogo from "@/public/whiteLogo.png";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="w-full flex flex-col items-center justify-center gap-6 py-14 pb-0 md:pt-24 bg-mainColor text-white">
      <div className="flex flex-col min-[748px]:flex-row w-[90%] mx-auto text-white py-11 pb-12  items-start justify-center gap-8">
        <div className="flex flex-col min-[1322px]:flex-row  min-[748px]:w-[60%] w-full text-white items-center justify-center gap-8 lg:gap-20">
          <div className="flex flex-col justify-start w-full min-[1322px]:w-[60%] flex-1 items-start gap-4">
            <div className=" block">
              <Link href="/" className=" no-underline">
                <Image
                  src={WhiteLogo}
                  alt="Clispa_logo"
                  width={211}
                  height={39}
                />
              </Link>
            </div>
            <p className=" text-white mb-[25px] font-liv ">
              Neque porro quisquam est qui most dolorem quia enough impedit same
              quo minus quod and maxime
            </p>
            <div className="flex items-center gap-[20px] justify-start">
              <a
                href="#"
                rel="no-referrer"
                className=" w-[36px] flex-row-center rounded-full border border-[#48cae4]  h-[36px]"
              >
                <BiLogoFacebook
                  fontSize={20}
                  className=" text-white duration-75 transition-colors"
                />
              </a>
              <a
                href="#"
                rel="no-referrer"
                className=" w-[36px] flex-row-center rounded-full border border-[#48cae4]  h-[36px]"
              >
                <FaXTwitter
                  fontSize={20}
                  className=" text-white duration-75 transition-colors"
                />
              </a>
              <a
                href="#"
                rel="no-referrer"
                className=" w-[36px] flex-row-center rounded-full border border-[#48cae4]  h-[36px]"
              >
                <IoLogoInstagram
                  fontSize={20}
                  className=" text-white duration-75 transition-colors"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col w-full min-[1322px]:w-[40%] justify-center items-start whitespace-nowrap gap-4">
            <p className=" text-[24px] my-[10px] font-bold text-white font-Raj">
              Links
            </p>
            <div className="flex flex-col justify-center font-liv items-start gap-4">
              <Link href="/about" className="text-white ">
                About
              </Link>
              <Link href="/services" className="text-white ">
                Services{" "}
              </Link>
              <Link href="/" className="text-white ">
                Company
              </Link>
              <Link href="/projects" className="text-white ">
                Projects
              </Link>
              <Link href="/blog" className="text-white ">
                Blog Post
              </Link>
              <Link href="/contact" className="text-white ">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[1024px]:flex-row  min-[748px]:w-[40%] w-full text-white  items-start justify-center gap-8">
          <div className="flex flex-col w-full min-[1322px]:w-[50%] justify-center items-start whitespace-nowrap gap-4">
            <p className=" text-[24px] my-[10px] font-bold text-white font-Raj">
              Support
            </p>
            <div className="flex flex-col justify-center font-liv items-start gap-4">
              <Link href="/about" className="text-white ">
                Style Guide
              </Link>
              <Link href="/services" className="text-white ">
                Change Log
              </Link>
              <Link href="/" className="text-white ">
                License
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full min-[1322px]:w-[50%] justify-center items-start whitespace-nowrap gap-4">
            <p className=" text-[24px] my-[10px] font-bold text-white font-Raj">
              Contact
            </p>
            <div className="flex flex-col justify-center font-liv items-start gap-4">
              <Link href="/about" className="text-white ">
                About
              </Link>
              <Link href="/services" className="text-white ">
                Services{" "}
              </Link>
              <Link href="/" className="text-white ">
                Company
              </Link>
              <Link href="/projects" className="text-white ">
                Projects
              </Link>
              <Link href="/blog" className="text-white ">
                Blog Post
              </Link>
              <Link href="/contact" className="text-white ">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#043676] w-full py-6 flex-row-center mx-auto">
        <p className=" text-white text-[15px] whitespace-nowrap ">
          Copyright &copy;{currentYear} Clispa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
