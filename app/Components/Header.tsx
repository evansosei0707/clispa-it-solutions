import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/clispa-logo.png";
import { navLinks } from "../lib/helper";
import { CgMenuLeft } from "react-icons/cg";

export default function Header() {
  return (
    <header className="w-[95%] md:w-[90%] mx-auto flex-col-center items-center ">
      {/* access section bar on header top */}
      <div className=" w-full mx-auto flex font-liv justify-between py-3 border-b border-[#ade8f4] items-center ">
        <div className="md:flex-row flex md:justify-start md:items-center flex-col items-start justify-center gap-2  md:gap-4 ">
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
        </div>
      </div>
      <nav className=" flex w-full items-center py-4 pt-8 justify-between">
        <div className=" block">
          <Link href="/" className=" no-underline">
            <Image src={Logo} alt="Clispa_logo" width={211} height={39} />
          </Link>
        </div>
        <div className="flex-row-center font-Raj gap-6">
          <ul className="hidden min-[975px]:flex justify-center items-center  gap-8  list-none">
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className=" text-[20px] leading-[32px] w-full flex-1 font-semibold text-[#023e8a] hover:text-[#0077b6]"
              >
                <Link href={item.link} className="block">
                  {item.linkName}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" rounded-full p-2 block min-[975px]:hidden cursor-pointer transition-colors duration-150 hover:bg-gray-500/10">
            <CgMenuLeft fontSize={39} />
          </div>

          <a
            href="/quote"
            className=" bg-primary-gradient hidden min-[800px]:block text-white font-semibold py-[7px] px-[30px] text-[18px] leading-[24px] rounded-[20px] tracking-tight"
          >
            Get a quote
          </a>
        </div>
      </nav>
    </header>
  );
}
