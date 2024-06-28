import React from "react";
import GlobalHero from "../Components/GlobalHero";
import contactBanner from "@/public/contact-us-banner.jpg";
import ContactBlock from "../Components/ContactBlock";
import FormSubmission from "../Components/FormSubmission";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col gap-14  w-full items-center bg-white justify-start">
      <GlobalHero
        titleStart="Contact"
        titleEnd="Us"
        parentLink="contact"
        bannerImage={contactBanner}
        description="Neque porro quisquam est, qui quia lorem some   golor sit amet, are more consectetur sed"
      />
      <ContactBlock />
      <FormSubmission />
    </main>
  );
}
