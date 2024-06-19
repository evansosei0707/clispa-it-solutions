import Image from "next/image";
import HomeHero from "./Components/HomeHero";
import AfterHero from "./Components/AfterHero";
import WhyChooseUs from "./Components/WhyChooseUs";
import HomeServices from "./Components/HomeServices";
import HomeStatistics from "./Components/HomeStatistics";
import LatestProjects from "./Components/LatestProjects";
import ClientReview from "./Components/ClientReview";
import BlogSection from "./Components/BlogSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 w-full items-center justify-center">
      <HomeHero />
      <AfterHero />
      <WhyChooseUs />
      <HomeServices />
      <HomeStatistics />
      <LatestProjects />
      <ClientReview />
      <BlogSection />
    </main>
  );
}
