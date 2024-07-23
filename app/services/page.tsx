import React from "react";
import GlobalHero from "../Components/GlobalHero";
import AfterServicesHero from "../Components/AfterServicesHero";
import ServicesList from "../Components/ServicesList";
import { client } from "../lib/client";
import ClientReviewFragment from "../Components/ClientReviewFragment";
import { Metadata } from "next";

async function getContent() {
  const CONTENT_QUERY = `*[_type == 'servicesPage'][0] {
  servicesHero {
    image {
      asset -> {
        url
      }
    },
    briefDescrip,
  },
  exploreServices {
    image {
      asset -> {
        url
      }
    },
    subTitle,
    subject,
    para1,
    para2,
    wording,
  },
  serviceListSection {
      ...,
  }
}
`;

  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

export async function generateMetadata(): Promise<Metadata> {
  const servicesData: allServicesDataType = await getContent();

  return {
    title:
      "TechGigs Services | Explore TechGigs wide range of services for your Business ",
    description: servicesData.servicesHero.briefDescrip,
  };
}

export default async function page() {
  const servicesData: allServicesDataType = await getContent();

  return (
    <main className="flex min-h-screen flex-col  w-full items-center justify-start">
      <GlobalHero
        titleStart="Our"
        titleEnd="Services"
        parentLink="services"
        bannerImage={servicesData.servicesHero.image}
        description={servicesData.servicesHero.briefDescrip}
      />
      <AfterServicesHero heroData={servicesData.exploreServices} />
      <ServicesList listHeadData={servicesData.serviceListSection} />
      <ClientReviewFragment />
    </main>
  );
}

export const revalidate = 10;
