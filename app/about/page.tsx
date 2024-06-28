import React from "react";
import GlobalHero from "../Components/GlobalHero";
import AfterAboutHero from "../Components/AfterAboutHero";
import CountUpStats from "../Components/CountUp";
import WhyChooseUs from "../Components/WhyChooseUs";
import ClientReview from "../Components/ClientReview";
import aboutBanner from "@/public/about_banner.jpg";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col  w-full items-center justify-start">
      <GlobalHero
        titleStart="About"
        titleEnd="Us"
        parentLink="about"
        bannerImage={aboutBanner}
        description="Neque porro quisquam est, qui quia lorem some   golor sit amet, are more consectetur sed"
      />
      <AfterAboutHero />
      <CountUpStats />
      <WhyChooseUs />
      <ClientReview />
    </main>
  );
}
