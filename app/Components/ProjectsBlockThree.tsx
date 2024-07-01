import React from "react";
import Image from "next/image";
import service5Image from "@/public/service5.jpg";
import tryImage from "@/public/try.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function ProjectsBlockThree() {
  return (
    <section className=" w-full flex-col-x-start-only  bg-white py-10 pt-14  px-6 gap-6 md:px-12 lg:px-16">
      <div className="flex-col-x-start-only gap-5 w-full ">
        <h2 className=" md:text-[42px] text-[30px] leading-[32px] md:leading-[45px] text-mainColor font-bold">
          Project Result & Benefits of Project
        </h2>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          We are Optitech provide the best quality It solution neque porro
          quisquam est qui dolorem ipsum quia golor sit amet, conse ctetur,
          adipisci velit, sed eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat pleasure rationally encounter consequences that
          are extremely painful. Nor again is there anyone who loves or pursues
          or desires to obtain pain of itself, because it is pain, but because
          occasionally circumstances occur in which toil and pain can procure
          him some great pleaser pleasure rationally encounter consequences that
          are extremely painful. Nor again is there anyone who loves or pursues
          or desires to obtain pain of itsel because it is pain, but because
          occasionally circumstances occur in which toil and pain can procure
          him some great pleaser
        </p>
        <p className=" text-customBlack text-base leading-[26px] font-liv font-normal">
          We are Optitech provide the best quality It solution neque porro
          quisquam est qui dolorem ipsum quia golor sit amet, conse ctetur,
          adipisci velit, sed eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat pleasure rationally encounter consequences that
          are extremely painful. Nor again is there anyone who loves or pursues
          or desires to obtain pain of itself, because it is pain, but because
          occasionally circumstances occur in which toil and pain can procure
        </p>
      </div>
      <div className=" w-full flex flex-col  h-full border-4 border-black  items-start justify-center min-[750px]:flex-row bg-white py-8 gap-8   min-[975px]:gap-14">
        <div className="flex-1 min-h-[300px]: md:min-h-[400px]: lg:min-h-[500px] rounded-[20px] overflow-hidden gap-6 w-full min-[750px]:w-1/2">
          <Image
            src={service5Image}
            alt="service image 3"
            className=" w-full h-full object-cover "
          />
        </div>
        <div className=" flex-col-x-start-only gap-6 w-full min-[750px]:w-1/2">
          <h2 className=" font-Raj w-full lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] font-bold text-mainColor ">
            Which area we cover
          </h2>
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            Benefit of IT Management is the provide the best quality It solution
            neque qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
            velit, sed eligen optio cumque nihil impedit quo minus id quod
            maxime placeat
          </p>
          <p className=" text-base leading-[26px] font-liv  text-customBlack">
            Benefit of IT Management is the provide the best quality more than
            neque qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
            velit, sed eligen optio cumque nihil impedit quo minus id quod
            maxime placeat
          </p>
          <div className=" flex-col-x-start-only w-full gap-4">
            <div className=" flex justify-start items-start gap-4 w-full">
              <span className=" whitespace-nowrap flex flex-shrink-0 text-mainColor">
                <IoIosCheckmarkCircle fontSize={25} />
              </span>
              <p className=" text-base leading-[26px] font-liv  text-customBlack">
                IT Management provide the most service neque porro quisquam est
                qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
                velit
              </p>
            </div>
            <div className=" flex justify-start items-start gap-4 w-full">
              <span className=" whitespace-nowrap flex flex-shrink-0 text-mainColor">
                <IoIosCheckmarkCircle fontSize={25} />
              </span>
              <p className=" text-base leading-[26px] font-liv  text-customBlack">
                IT Management provide the most service neque porro quisquam est
                qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
                velit
              </p>
            </div>
            <div className=" flex justify-start items-start gap-4 w-full">
              <span className=" whitespace-nowrap flex flex-shrink-0 text-mainColor">
                <IoIosCheckmarkCircle fontSize={25} />
              </span>
              <p className=" text-base leading-[26px] font-liv  text-customBlack">
                IT Management provide the most service neque porro quisquam est
                qui dolorem ipsum quia golor sit amet, conse ctetur, adipisci
                velit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
