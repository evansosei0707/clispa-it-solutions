import GlobalHero from "@/app/Components/GlobalHero";
import React from "react";
import serviceDetailBanner from "@/public/clispa_service_detail_banner.png";
import ServiceBlockOne from "@/app/Components/ServiceBlockOne";
import ServiceBlockTwo from "@/app/Components/ServiceBlockTwo";
import ServiceBlockThree from "@/app/Components/ServiceBlockThree";
import ServiceBlockFour from "@/app/Components/ServiceBlockFour";
import { client } from "@/app/lib/client";
import { Metadata } from "next";

async function getContent(serviceDetail: string) {
  const CONTENT_QUERY = `*[_type == 'service' && slug.current == '${serviceDetail}'][0] {
  'serviceSlug': slug.current,
    title,
  serviceHero {
    ...,
    image {
      asset -> {
        url
      }
    },
  },
  serviceBlock1 {
      ...,
      firstPara,
      image1 {
        asset -> {
          url
        }
      },
      image2 {
        asset -> {
          url
        }
      },
  },
  serviceBlock2 {
      ...,
      image {
        asset -> {
          url
        }
      },
      listings[],
  },
  serviceBlock3 {
      ...,
      image {
        asset -> {
          url
        }
      },
      
  },
  serviceBlock4 {
    ...,
    listings[],
    image {
      asset -> {
        url
      }
    },
  },
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

async function getData() {
  const CONTENT_QUERY = `*[_type == 'service'] {
    'serviceSlug': slug.current,
    title,
  }
  `;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

type Params = {
  params: {
    serviceDetail: string;
  };
};

export async function generateMetadata({
  params: { serviceDetail },
}: Params): Promise<Metadata> {
  const getSingleServiceData: singleServicePageDataTypes = await getContent(
    serviceDetail
  );

  return {
    title: getSingleServiceData.title,
    description: getSingleServiceData.serviceHero.briefDescrip,
  };
}

export default async function page({ params: { serviceDetail } }: Params) {
  const getSingleServiceData: singleServicePageDataTypes = await getContent(
    serviceDetail
  );

  return (
    <main className="flex min-h-screen flex-col  w-full items-center justify-start">
      <GlobalHero
        titleStart="Service"
        titleEnd="Detail"
        parentLink="Services"
        bannerImage={getSingleServiceData.serviceHero.image}
        childLink={getSingleServiceData.title}
        description={getSingleServiceData.serviceHero.briefDescrip}
      />
      <ServiceBlockOne
        title={getSingleServiceData.title}
        slug={getSingleServiceData.serviceSlug}
        blockOneData={getSingleServiceData.serviceBlock1}
      />
      <ServiceBlockTwo blockTwoData={getSingleServiceData.serviceBlock2} />
      <ServiceBlockThree blockThreeData={getSingleServiceData.serviceBlock3} />
      <ServiceBlockFour blockFourData={getSingleServiceData.serviceBlock4} />
    </main>
  );
}

export async function generateStaticParams() {
  const allServiceData: singleServicePageDataTypes[] = await getData();

  return allServiceData.map((item) => ({
    params: {
      serviceDetail: item.serviceSlug,
    },
  }));
}
