"use client";
import React from "react";
import CountUp from "react-countup";

export default function CountUpStats() {
  return (
    <div className=" flex-row-center w-full mx-auto flex-wrap gap-4">
      <div className=" flex-col-center gap-1 min-[422px]:border-r border-dashed border-secondaryColor flex-1">
        <span className="md:text-[50px] text-[36px] leading-[36px] md:leading-[50px] text-mainColor font-bold font-Raj">
          <CountUp
            end={95}
            suffix="k"
            delay={0}
            duration={3.75}
            start={0}
            enableScrollSpy
          />
        </span>
        <p className=" md:text-[20px] text-lg font-normal md:leading-[32px] whitespace-nowrap font-liv text-customBlack">
          Happy Clients
        </p>
      </div>
      <div className=" flex-col-center gap-1 min-[422px]:border-r border-dashed border-secondaryColor flex-1">
        <span className="md:text-[50px] text-[36px] leading-[36px] md:leading-[50px] text-mainColor font-bold font-Raj">
          <CountUp
            end={65}
            suffix="+"
            delay={0}
            duration={3.75}
            start={0}
            enableScrollSpy
          />
        </span>
        <p className=" md:text-[20px] text-lg font-normal whitespace-nowrap md:leading-[32px] font-liv text-customBlack">
          Companies
        </p>
      </div>
      <div className=" flex-col-center gap-1 flex-1">
        <span className="md:text-[50px] text-[36px] leading-[36px] md:leading-[50px] text-mainColor font-bold font-Raj">
          <CountUp
            end={362}
            delay={0}
            duration={3.75}
            start={0}
            enableScrollSpy
          />
        </span>
        <p className=" md:text-[20px] text-lg whitespace-nowrap font-normal md:leading-[32px] font-liv text-customBlack">
          Projects Done
        </p>
      </div>
    </div>
  );
}
