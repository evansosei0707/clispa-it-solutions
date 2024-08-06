import React from "react";
import Image from "next/image";
import ChooseImage from "@/public/chooseUs_image.png";
import expertTeams from "@/public/expert_team.png";
import quickAction from "@/public/quick_action.png";
import latestTech from "@/public/latest_tech.png";
import { client, urlFor } from "../lib/client";

async function getContent() {
  const CONTENT_QUERY = `*[_type == 'homePage'][0]{
 
  whyChoose {
    para,
    image {
      asset -> {
        url
      }
    },
    listings[] {
      ...,
      Image {
        asset -> {
          url
        }
      },
    },
  },
}
`;

  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

interface whyChooseDataType {
  whyChoose: whyChooseType;
}

export default async function WhyChooseUs() {
  const whyChooseUsData: whyChooseDataType = await getContent();

  return (
    <section className=" flex md:px-20 font-Raj min-[800px]:justify-between flex-col justify-center pt-24 items-center gap-10 md:gap-6 min-[800px]:flex-row w-full px-5">
      <div className=" flex-col-x-start-only w-full min-[800px]:w-1/2 min-[800px]:pr-12 gap-5 flex-wrap">
        <h2 className=" lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold">
          Why Choose <span className="text-mainColor2">TechGigs</span>
        </h2>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          {whyChooseUsData.whyChoose.para}
        </p>
        <ul className="text-customBlack text-base flex-col-x-start-only gap-5 leading-[26px]  font-normal list-none">
          {whyChooseUsData.whyChoose.listings.map((item, idx) => (
            <div key={idx} className=" flex justify-start items-center gap-6">
              <div className=" w-max flex shrink-0">
                <Image
                  src={urlFor(item.Image).url()}
                  alt="expert team"
                  width={62}
                  height={62}
                />
              </div>
              <div className=" flex flex-col justify-start items-start">
                <p className=" text-[24px] leading-[38px] font-bold text-mainColor">
                  {item.title}
                </p>
                <p className="font-liv text-base leading-[26px]">{item.para}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div className="relative w-full min-[800px]:w-1/2">
        <div className=" w-full max-h-[630px] rounded-md overflow-hidden">
          <img
            src={urlFor(whyChooseUsData.whyChoose.image).url()}
            className=" w-full h-full object-cover"
            alt="TechGigs home page image"
          />
        </div>
        {/* <div className=" w-full">
          <Image
            src={urlFor(whyChooseUsData.whyChoose.image).url()}
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
        </div> */}
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
