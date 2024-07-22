import HomeHero from "./Components/HomeHero";
import AfterHero from "./Components/AfterHero";
import WhyChooseUs from "./Components/WhyChooseUs";
import HomeServices from "./Components/HomeServices";
import HomeStatistics from "./Components/HomeStatistics";
import LatestProjects from "./Components/LatestProjects";
import ClientReview from "./Components/ClientReview";

import { client } from "./lib/client";

// Fetch content with GROQ
async function getContent() {
  const CONTENT_QUERY = `*[_type == 'homePage'][0]{
  homeHero {
    ...,
    heroImage {
      asset -> {
        url
      }
    }
  },
  afterHero {
    ...,
    heroImage {
      asset -> {
        url
      }
    }
  },
  whyChoose {
    para,
    image {
      asset -> {
        url
      }
    },
    listings[] {
      ...,
      Image {
        asset -> {
          url
        }
      },
    },
  },
  homeServices {
    image {
      asset -> {
        url
      }
    },
    ...,
  },
  homeStats,
  howWeWork {
    ...,
    process[] {
      ...,
      Image {
         asset -> {
           url
         }
      },
    }
  },
  latestProjects,
  clientTalk,
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

export default async function Home() {
  const homePageData: homePageTypes = await getContent();

  return (
    <main className="flex min-h-screen flex-col gap-12 w-full items-center justify-start">
      <HomeHero homeHeroData={homePageData.homeHero} />
      <AfterHero afterHeroData={homePageData.afterHero} />
      <WhyChooseUs />
      <HomeServices homeServicesData={homePageData.homeServices} />
      <HomeStatistics homeStatsData={homePageData} />
      <LatestProjects latestProjectsData={homePageData.latestProjects} />
      <ClientReview clientTalkData={homePageData.clientTalk} />
      {/* <BlogSection /> */}
    </main>
  );
}
