import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhiteLogo from "@/public/original_white_logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { client } from "../lib/client";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
// import { ContactPageTypes, singleServicePageDataTypes } from "@/types"

async function getData() {
  const CONTENT_QUERY = `*[_type == 'service'] {
    'serviceSlug': slug.current,
    title,
  }
  `;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

async function getSocialData() {
  const CONTENT_QUERY = `*[_type == 'contactUs'][0] {
  contactInfo {
    subject,
    phones,
    emails,
    website,
    socials,
    address,
    para,
  }
}
  `;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

export default async function Footer() {
  const allServices: singleServicePageDataTypes[] = await getData();
  const socialsData: ContactPageTypes = await getSocialData();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const [allServiceData, socialsMediaData] = await Promise.all([
    allServices,
    socialsData,
  ]);

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
              {socialsMediaData.contactInfo.socials?.twitter && (
                <a
                  href={socialsMediaData.contactInfo.socials?.twitter}
                  rel="no-referrer"
                  className=" w-[36px] flex-row-center rounded-full border border-[#48cae4]  h-[36px]"
                >
                  <FaXTwitter
                    fontSize={20}
                    className=" text-white duration-75 transition-colors"
                  />
                </a>
              )}
              {socialsMediaData.contactInfo.socials?.instagram && (
                <a
                  href={socialsMediaData.contactInfo.socials?.instagram}
                  rel="no-referrer"
                  className=" w-[36px] flex-row-center rounded-full border border-[#48cae4]  h-[36px]"
                >
                  <IoLogoInstagram
                    fontSize={20}
                    className=" text-white duration-75 transition-colors"
                  />
                </a>
              )}
              {socialsMediaData.contactInfo.socials?.linkedIn && (
                <a
                  href={socialsMediaData.contactInfo.socials?.linkedIn}
                  rel="no-referrer"
                  className=" w-[36px] flex-row-center rounded-full border border-[#48cae4]  h-[36px]"
                >
                  <FaLinkedinIn
                    fontSize={20}
                    className=" text-white duration-75 transition-colors"
                  />
                </a>
              )}
              {socialsMediaData.contactInfo.socials?.tikTok && (
                <a
                  href={socialsMediaData.contactInfo.socials?.tikTok}
                  rel="no-referrer"
                  className=" w-[36px] flex-row-center rounded-full border border-[#48cae4]  h-[36px]"
                >
                  <FaTiktok
                    fontSize={20}
                    className=" text-white duration-75 transition-colors"
                  />
                </a>
              )}
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
              <Link href="/contact" className="text-white ">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[1024px]:flex-row  min-[748px]:w-[40%] w-full text-white  items-start justify-center gap-8">
          <div className="flex flex-col w-full min-[1322px]:w-[50%] justify-center items-start whitespace-nowrap gap-4">
            <p className=" text-[24px] my-[10px] font-bold text-white font-Raj">
              Services
            </p>
            <div className="flex flex-col justify-center font-liv items-start gap-4">
              {allServiceData.map((item, idx) => (
                <Link
                  key={idx}
                  href={`services/${item.serviceSlug}`}
                  className="text-white "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full min-[1322px]:w-[50%] justify-center items-start whitespace-nowrap gap-4">
            <p className=" text-[24px] my-[10px] font-bold text-white font-Raj">
              Contact
            </p>
            <div className="flex flex-col justify-center font-liv items-start gap-4">
              <Link href="/contact#getQuote" className="text-white ">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#043676] w-full py-6 flex-row-center mx-auto">
        <p className=" text-white text-[15px] whitespace-nowrap ">
          Copyright &copy;{currentYear} TechGigs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
