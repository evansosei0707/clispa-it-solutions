import React from "react";
import GlobalHero from "../Components/GlobalHero";
import AfterAboutHero from "../Components/AfterAboutHero";
import CountUpStats from "../Components/CountUp";
import WhyChooseUs from "../Components/WhyChooseUs";
import ClientReview from "../Components/ClientReview";
import aboutBanner from "@/public/about_banner.jpg";
import { client } from "../lib/client";
import CountUpFragment from "../Components/CountUpFragment";
import ClientReviewFragment from "../Components/ClientReviewFragment";
import { Metadata } from "next";

async function getContent() {
  const CONTENT_QUERY = `*[_type == "aboutUs" ][0] {
  aboutHero {
    image {
      asset -> {
        url
      }
    },
    briefDescrip,
  },
  aboutBlock {
      ...,
      image {
        asset -> {
          url
        }
      }
  }
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

export const metadata: Metadata = {
  title: "About TechGigs | Innovative Software Solutions & Expert Team",
  description:
    "Learn more about TechGigs leadership driving innovation in Software development ERP, payroll, and management systems. Learn about our expertise, customization, and commitment to your business success.",
};

export default async function page() {
  const aboutUsData: aboutUsType = await getContent();
  return (
    <main className="flex min-h-screen flex-col  w-full items-center justify-start">
      <GlobalHero
        titleStart="About"
        titleEnd="Us"
        parentLink="about"
        bannerImage={aboutUsData.aboutHero.image}
        description={aboutUsData.aboutHero.briefDescrip}
      />
      <AfterAboutHero afterAboutData={aboutUsData.aboutBlock} />
      <section className=" px-6 md:px-12 lg:px-20 gap-14 lg:gap-20 my-10 w-full flex-col-center">
        <CountUpFragment />
      </section>
      <WhyChooseUs />
      <ClientReviewFragment />
    </main>
  );
}

export const revalidate = 10;
