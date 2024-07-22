"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiTwotoneStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";
import { clientFeedbacks } from "../lib/helper";
import Image from "next/image";
import QuotationMark from "@/public/quotionMark.png";

interface ClientReviewSliderProps {
  reviewData: clientReviewType[];
}

const ClientReviewSlider = ({ reviewData }: ClientReviewSliderProps) => {
  const slider = React.useRef<Slider | null>(null);

  //   function SampleNextArrow(props: any) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={`${className} rounded-full absolute -bottom-[200px] right-24 bg-black border-2 z-50 p-3 hover:text-white hover:bg-primary transition-colors duration-100 cursor-pointer`}
  //         style={{ ...style }}
  //         onClick={onClick}
  //       >
  //         <GoArrowRight className=" text-black" fontSize={30} />
  //       </div>
  //     );
  //   }

  //   function SamplePrevArrow(props: any) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={`${className} rounded-full absolute -bottom-[200px] bg-black z-50 left-7 text-black  border-2 p-3 hover:text-white hover:bg-primary transition-colors duration-100 cursor-pointer`}
  //         style={{ ...style }}
  //         onClick={onClick}
  //       >
  //         <GoArrowLeft className=" text-black" fontSize={30} />
  //       </div>
  //     );
  //   }

  const settings = {
    infinite: true,
    speed: 200,

    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 2,
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
        breakpoint: 558,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex w-full h-full  mb-8 client_talk  mt-0 justify-center flex-col items-center">
      <Slider ref={slider} {...settings} className=" w-full relative ">
        {reviewData?.map((item, idx) => (
          <div
            key={idx}
            className=" review_box relative rounded-[20px] flex-col-x-start-only gap-4 overflow-hidden z-10 p-5 py-9  border border-mainColor bg-lightColor"
          >
            <div className=" text-[20px] font-bold font-Raj text-mainColor mb-2">
              {item.subject}
            </div>
            <p className=" text-[#4c4c4c] font-liv mb-2">{item.message}</p>
            <p className=" text-[20px] font-semibold mb-2 text-[#181e23] font-Raj">
              {item.author}
            </p>
            <div className="flex-row-x-start-only  text-secondaryColor gap-1">
              <AiTwotoneStar
                color="#0077b6"
                enableBackground={"#0077b6"}
                fontSize={15}
              />
              <AiTwotoneStar color="#0077b6" fontSize={15} />
              <AiTwotoneStar className="text-[#0077b6]" fontSize={15} />
              <AiTwotoneStar className="text-[#0077b6]" fontSize={15} />
              <AiTwotoneStar className="text-[#0077b6]" fontSize={15} />
            </div>
            <div className=" absolute left-auto top-auto right-[50px] bottom-[20px] -z-10 ">
              <Image
                src={QuotationMark}
                alt="quotation mark"
                width={73}
                height={51}
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className=" cursor-pointer py-8">
        <span onClick={() => slider?.current?.slickPrev()}>
          <LiaLongArrowAltLeftSolid
            className=" p-0 -ml-4 text-[#0077b6] "
            fontSize={55}
          />
        </span>
        <span onClick={() => slider?.current?.slickNext()}>
          <LiaLongArrowAltRightSolid
            className=" p-0 -mr-4 -mt-8 text-[#023e8a]"
            fontSize={55}
          />
        </span>
      </div>
    </div>
  );
};

export default ClientReviewSlider;
