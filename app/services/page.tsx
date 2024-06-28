import React from "react";
import GlobalHero from "../Components/GlobalHero";
import servicesBannerImage from "@/public/clispa_services_banner.jpg";
import AfterServicesHero from "../Components/AfterServicesHero";
import ServicesList from "../Components/ServicesList";
import ClientReview from "../Components/ClientReview";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col  w-full items-center justify-start">
      <GlobalHero
        titleStart="Our"
        titleEnd="Services"
        parentLink="services"
        bannerImage={servicesBannerImage}
        description="Neque porro quisquam est, qui quia lorem some   golor sit amet, are more consectetur sed"
      />
      <AfterServicesHero />
      <ServicesList />
      <ClientReview />
    </main>
  );
}
