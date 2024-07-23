import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import HomeServicesSlider from "./HomeServicesSlider";
import Image from "next/image";
import dots from "@/public/dots.png";
import serviceMessage from "@/public/message.png";
import { client, urlFor } from "../lib/client";

async function getContent() {
  const CONTENT_QUERY = `*[_type == 'service'] {
  'serviceSlug': slug.current,
    title,
  serviceHero {
    ...,
    image {
      asset -> {
        url
      }
    },
  },
  serviceBlock1 {
      ...,
      firstPara,
      image1 {
        asset -> {
          url
        }
      },
      image2 {
        asset -> {
          url
        }
      },
  },
  serviceBlock2 {
      ...,
      image {
        asset -> {
          url
        }
      },
      listings[],
  },
  serviceBlock3 {
      ...,
      image {
        asset -> {
          url
        }
      },
      
  },
  serviceBlock4 {
    ...,
    listings[],
    image {
      asset -> {
        url
      }
    },
  },
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

interface HomeServicesProps {
  homeServicesData: homeServicesType;
}

export default async function HomeServices({
  homeServicesData,
}: HomeServicesProps) {
  const ServicesData: singleServicePageDataTypes[] = await getContent();

  return (
    <section className="flex-row-center gap-6 px-5 md:px-8 lg:px-24 w-full pt-12 bg-gradient-to-b from-transparent to-[#f6fdff]">
      <div className=" hidden w-[30%] lg:flex relative">
        <div className=" w-full h-full max-h-[460px]">
          <img
            src={urlFor(homeServicesData.image).url()}
            className=" w-full h-full object-cover"
            alt="Service Image banner"
          />
        </div>
        {/* <div className=" w-max h-max  absolute left-[100px] top-[5%] right-auto bottom-auto -z-10">
          <Image
            src={dots}
            width={215}
            height={204}
            alt="dots images behind a person"
          />
        </div> */}
        {/* <div className=" w-max h-max absolute -left-[8%] top-0 right-auto bottom-auto -z-10">
          <Image
            src={serviceMessage}
            width={136}
            height={114}
            alt="message image"
          />
        </div> */}
      </div>
      <div className=" flex-col-x-start-only w-full lg:w-[70%] gap-6">
        <div className=" flex-col-x-start-only w-full gap-2">
          <h2 className="  lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold font-Raj max-w-[250px] mb-[10px]">
            Services <span className=" text-mainColor2">that we</span> provide
          </h2>
          <div className="flex justify-between w-full items-center">
            <p className=" max-w-[400px]">{homeServicesData.para}</p>
            <Link href="/services" className="">
              <HiArrowRight color="#023e8a" fontSize={35} />
            </Link>
          </div>
        </div>
        <HomeServicesSlider servicesData={ServicesData} />
      </div>
    </section>
  );
}
