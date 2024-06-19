import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogImage from "@/public/blog1.jpg";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BiUser } from "react-icons/bi";
import { Blogs } from "../lib/helper";

export default function BlogSection() {
  return (
    <section className=" flex-col-x-start-only w-full px-5 md:px-8 mb-14 lg:px-24 mx-auto gap-6  bg-gradient-to-b from-transparent to-[#f6fdff]">
      <div className=" flex-col-x-start-only w-full gap-2">
        <h2 className=" lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold font-Raj max-w-[250px] mb-[10px]">
          Latest Posts <span className=" text-mainColor2">from</span> Blog
        </h2>
        <div className="flex flex-col items-start justify-center gap-6 min-[650px]:gap-0 min-[650px]:flex-row  min-[650px]:justify-between w-full min-[650px]:items-center">
          <p className=" max-w-[400px]">
            Neque porro quisquam est, qui dolorem ipsum quiactetur, adipisci
            velit, sed eligendi option cumque
          </p>
          <Link
            href="#"
            className="bg-primary-gradient text-white font-semibold py-[10px] px-[27px] text-[20px] leading-[26px] rounded-[25px] tracking-tight"
          >
            View all
          </Link>
        </div>
      </div>
      <div className=" flex flex-col w-full lg:flex-row items-center h-full justify-center gap-8">
        <div className=" flex w-full h-full lg:h-[555px] flex-auto relative rounded-[25px] overflow-hidden lg:w-[60%] ">
          <Image
            src={BlogImage}
            alt="blog image"
            className=" w-full h-full object-cover"
          />
          <div className=" absolute hidden min-[480px]:flex left-[35px] right-[35px] bottom-[35px] max-w-[470px] py-[20px] px-[35px] rounded-[20px] bg-[#ffffffcc] z-10">
            <div className=" flex-col-x-start-only w-full gap-2 ">
              <div className=" flex-row-x-start-only gap-4 flex-wrap">
                <div className=" flex-row-center text-[#1f89c0] gap-2">
                  <FaRegCalendarDays />
                  <p className=" font-liv font-medium leading-3 ">
                    August 12, 2024
                  </p>
                </div>
                <div className=" flex-row-center text-[#1f89c0] gap-2">
                  <BiUser fontSize={20} />
                  <p className=" font-liv font-medium leading-3">
                    Clement Mensah
                  </p>
                </div>
              </div>
              <Link
                href="#"
                className=" no-underline text-[24px] font-bold text-mainColor font-Raj mt-[10px] inline-block leading-7"
              >
                Everything you need to learn about IT Solution for your Company.
              </Link>
            </div>
          </div>
        </div>
        <div className=" h-full w-full p-[50px] rounded-[25px] flex-col-x-start-only gap-[25px] lg:w-[40%]  bg-lightColor ">
          {Blogs.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className=" flex-col-x-start-only w-full border-mainColor gap-2 border-b pb-10 "
            >
              <div className=" flex-row-x-start-only gap-4 flex-wrap">
                <div className=" flex-row-center text-[#1f89c0] gap-2">
                  <FaRegCalendarDays />
                  <p className=" font-liv font-medium leading-3 ">
                    {item.date}
                  </p>
                </div>
                <div className=" flex-row-center text-[#1f89c0] gap-2">
                  <BiUser fontSize={20} />
                  <p className=" font-liv font-medium leading-3">
                    {item.author}
                  </p>
                </div>
              </div>
              <Link
                href="#"
                className=" no-underline text-[24px] font-bold text-mainColor font-Raj mt-[10px] inline-block leading-7"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
