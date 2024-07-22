import React from "react";
import ClientReviewSlider from "./ClientReviewSlider";
import { client } from "../lib/client";

async function getContent() {
  const CONTENT_QUERY = `*[_type == 'clientReviews'] {
    ...,
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

interface ClientReviewProps {
  clientTalkData: clientTalkType;
}

export default async function ClientReview({
  clientTalkData,
}: ClientReviewProps) {
  const clientReviewData: clientReviewType[] = await getContent();

  return (
    <section className=" flex-col-center w-full px-5 md:px-8 pt-[100px]  lg:px-24 mx-auto gap-6">
      <div className=" flex-col-center gap-4 md:gap-5 lg:gap-6">
        <h2 className="  lg:text-[42px] text-[30px] leading-[32px] sm:text-[34px] sm:leading-[37px] md:text-[38px] md:leading-[41px]  lg:leading-[45px] text-mainColor font-bold font-Raj max-w-[250px] mb-[10px]">
          Client&apos;s <span className=" text-mainColor2">Talk</span>
        </h2>
        <p className=" font-liv text-base sm:w-2/3 md:w-1/2 text-center w-full leading-[24px] text-customBlack font-normal">
          {clientTalkData.para}
        </p>
      </div>
      <ClientReviewSlider reviewData={clientReviewData} />
    </section>
  );
}
