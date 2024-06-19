import React from "react";
import ClientReviewSlider from "./ClientReviewSlider";

export default function ClientReview() {
  return (
    <section className=" flex-col-center w-full px-5 md:px-8 pt-[100px]  lg:px-24 mx-auto gap-6">
      <div className=" flex-col-center gap-4 md:gap-5 lg:gap-6">
        <h2 className="  lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold font-Raj max-w-[250px] mb-[10px]">
          Client&apos;s <span className=" text-mainColor2">Talk</span>
        </h2>
        <p className=" font-liv text-base sm:w-2/3 md:w-1/2 text-center w-full leading-[24px] text-customBlack font-normal">
          Neque porro quisquam est, qui dolorem ipsum quia golor sit ametctetur,
          adipisci velit, sed eligendi optio cumque nihil impedit
        </p>
      </div>
      <ClientReviewSlider />
    </section>
  );
}
