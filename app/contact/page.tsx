import React from "react";
import GlobalHero from "../Components/GlobalHero";
import contactBanner from "@/public/contact-us-banner.jpg";
import ContactBlock from "../Components/ContactBlock";
import FormSubmission from "../Components/FormSubmission";
import { client } from "../lib/client";
import { Metadata } from "next";

async function getData() {
  const CONTENT_QUERY = `*[_type == 'contactUs'][0] {
    contactHero {
      image {
        asset -> {
          url
        }
      },
      briefDescrip
    },
  contactInfo {
    subject,
    phones,
    emails,
    website,
    address,
    para,
  }
}
  `;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

export const metadata: Metadata = {
  title:
    "Contact TechGigs | Contact us for your Custom IT,Software Solutions Today",
  description:
    "Ready to transform your business? Contact TechGigs at our Legon Bypass, Haatso location. Let's discuss your custom software needs and build the future together.",
};

export default async function page() {
  const contactUsData: ContactPageTypes = await getData();

  return (
    <main className="flex min-h-screen flex-col gap-14  w-full items-center bg-white justify-start">
      <GlobalHero
        titleStart="Contact"
        titleEnd="Us"
        parentLink="contact"
        bannerImage={contactUsData.contactHero.image}
        description={contactUsData.contactHero.briefDescrip}
      />
      <ContactBlock blockData={contactUsData.contactInfo} />
      <FormSubmission />
    </main>
  );
}

export const revalidate = 10;
