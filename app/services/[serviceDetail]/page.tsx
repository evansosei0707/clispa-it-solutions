import GlobalHero from "@/app/Components/GlobalHero";
import React from "react";
import serviceDetailBanner from "@/public/clispa_service_detail_banner.png";
import ServiceBlockOne from "@/app/Components/ServiceBlockOne";
import ServiceBlockTwo from "@/app/Components/ServiceBlockTwo";
import ServiceBlockThree from "@/app/Components/ServiceBlockThree";
import ServiceBlockFour from "@/app/Components/ServiceBlockFour";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col  w-full items-center justify-start">
      <GlobalHero
        titleStart="Service"
        titleEnd="Detail"
        parentLink="Services"
        bannerImage={serviceDetailBanner}
        childLink="Database Security"
        description="Neque porro quisquam est, qui quia lorem some   golor sit amet, are more consectetur sed"
      />
      <ServiceBlockOne />
      <ServiceBlockTwo />
      <ServiceBlockThree />
      <ServiceBlockFour />
    </main>
  );
}
