"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import { urlFor } from "../lib/client";

interface HomeServicesSliderProps {
  servicesData: singleServicePageDataTypes[];
}

export default function HomeServicesSlider({
  servicesData,
}: HomeServicesSliderProps) {
  const settings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    centerMode: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 558,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex w-full h-full box-border mb-8 mx-auto mt-0 justify-center items-center">
      <Slider
        {...settings}
        className="w-[100%] overflow-hidden gap-6 h-full flex"
      >
        {servicesData.map((item, idx) => (
          <div
            key={idx}
            className=" flex flex-col service-box justify-center items-center gap-7 w-full rounded-[10px] bg-[#e7fbff] overflow-hidden p-4"
          >
            <div className=" w-full pb-5 rounded-[10px] overflow-hidden h-[250px]">
              <img
                src={urlFor(item.serviceBlock1.image2).url()}
                alt={item.title}
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
            <div className=" font-Raj flex-col-center pt-5 pb-8 gap-4">
              <Link
                href={`/services/${item.serviceSlug}`}
                className=" text-[24px] leading-[31px] text-mainColor whitespace-nowrap font-bold"
              >
                {item.title}
              </Link>
              <p className=" font-liv text-center text-base leading-[26px] font-normal text-customBlack">
                {item.serviceHero.briefDescrip}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
