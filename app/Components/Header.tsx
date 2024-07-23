"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/public/original_logo.png";
import { navLinks } from "../lib/helper";
import { CgMenuLeft } from "react-icons/cg";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  console.log(pathName);

  return (
    <header
      className={` ${
        pathName !== "/" && " "
      } px-3 md:px-11 mx-auto flex-col-center w-full items-center `}
    >
      {/* access section bar on header top */}
      {/* <div className=" w-full mx-auto flex font-liv justify-between py-3 border-b border-[#ade8f4] items-center "> */}
      {/* <div className="md:flex-row flex md:justify-start md:items-center flex-col items-start justify-center gap-2  md:gap-4 ">
          <a
            href="mailto:info@clispa.com"
            className="  text-[#48cae4] hover:text-[#0077b6] no-underline"
          >
            Info@clispa.com
          </a>
          <span className=" md:w-[1px] w-full h-[1px]  md:h-[12px] bg-[#48cae4]"></span>
          <a
            href="tel:+233 55 330 6360"
            className=" no-underline text-[#48cae4] hover:text-[#0077b6]"
          >
            +233 55 330 6360
          </a>
        </div>
        <div className="md:flex-row flex md:justify-end md:items-center flex-col items-end justify-center gap-2 md:gap-4 ">
          <Link
            href="/login"
            className="  text-[#48cae4] hover:text-[#0077b6]  no-underline"
          >
            Login
          </Link>
          <span className=" md:w-[1px] w-full h-[1px]  md:h-[12px] bg-[#48cae4]"></span>
          <Link
            href="/register"
            className=" no-underline text-[#48cae4] hover:text-[#0077b6] "
          >
            Register
          </Link>
        </div> */}
      {/* </div> */}
      <div className=" flex w-full items-center py-4 pt-8 justify-between">
        <div className=" block">
          <Link href="/" className=" no-underline">
            <Image src={Logo} alt="Clispa_logo" width={211} height={39} />
          </Link>
        </div>
        <nav role="navigation" className="flex-row-center font-Raj gap-6">
          <ul className="hidden min-[975px]:flex justify-center items-center  gap-8  list-none">
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className={`text-[20px] leading-[32px] w-full flex-1 font-semibold ${
                  pathName === item.link
                    ? "text-mainColor2"
                    : "text-mainColor hover:text-mainColor2"
                } `}
              >
                <Link href={item.link} className="block">
                  {item.linkName}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setOpen((prev) => !prev)}
            className=" rounded-full p-2 cursor-pointer block min-[975px]:hidden  transition-colors duration-150 hover:bg-gray-500/10"
          >
            <CgMenuLeft fontSize={39} />
          </div>

          <a
            href="/contact#getQuote"
            className=" bg-primary-gradient hidden min-[800px]:block text-white font-semibold py-[7px] px-[30px] text-[18px] leading-[24px] rounded-[20px] tracking-tight"
          >
            Get a quote
          </a>
        </nav>
        <div
          onClick={() => setOpen(false)}
          className={`fixed top-0 left-0 z-40 w-full h-full bg-black transition-opacity duration-200 ${
            open ? "bg-opacity-15" : "bg-opacity-0 pointer-events-none"
          }`}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            role="navigation"
            className={`absolute top-0 left-0 w-[75%]   flex flex-col items-start justify-start min-[974px]:hidden gap-5 p-4 px-7 h-full bg-lightColor transform transition-transform duration-300 ease-in-out ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className=" block">
              <Link href="/" className=" no-underline">
                <Image src={Logo} alt="Clispa_logo" width={211} height={39} />
              </Link>
            </div>
            <div className="flex min-[975px]:hidden flex-col font-Raj font-semibold  justify-start gap-2 items-start w-full  list-none">
              {navLinks.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => setOpen(false)}
                  className={`text-[23px] leading-[40px] text-left block w-full flex-1 font-semibold ${
                    pathName === item.link
                      ? "text-mainColor2 hover:text-mainColor2"
                      : "text-mainColor"
                  }  hover:text-mainColor`}
                >
                  <Link href={item.link}>{item.linkName}</Link>
                </li>
              ))}
              <li
                className={`text-[23px] leading-[40px] text-left block text-mainColor w-full flex-1 font-semibold`}
              >
                <Link onClick={() => setOpen(false)} href="/contact#getQuote">
                  Get a Quote
                </Link>
              </li>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
