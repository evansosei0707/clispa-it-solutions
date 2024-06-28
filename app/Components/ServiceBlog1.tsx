import React from "react";
import Image from "next/image";
import Link from "next/link";
import service1Image from "@/public/service1.jpg";
import service2Image from "@/public/service2.jpg";
import service3Image from "@/public/service3.jpg";
import service4Image from "@/public/service4.jpg";
import service5Image from "@/public/service5.jpg";
import { services } from "../lib/helper";

export default function ServiceBlog1() {
  return (
    <div className=" w-full flex-row-center px-4 md:px-10 lg:px-12">
      <div className=" overflow-hidden hidden min-[975px]:flex flex-1 "></div>
      <div className="min-[975px]:flex-[4] w-full flex-col-x-start-only gap-5">
        <div className=" flex flex-col justify-center items-center gap-8 w-full">
          <div className=" w-full h-full overflow-hidden">
            <Image
              src={service1Image}
              alt="service blog 1"
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" bg-lightColor rounded-[20px] overflow-hidden">
            {services.map((item, idx) => (
              <Link
                key={idx}
                href={`/${item.href}`}
                className=" border-b border-lightColor  "
              ></Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
