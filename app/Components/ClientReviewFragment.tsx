import React, { Fragment } from "react";

import { client } from "../lib/client";
import ClientReview from "./ClientReview";
// Fetch content with GROQ
async function getContent() {
  const CONTENT_QUERY = `*[_type == 'homePage'][0]{
  
  clientTalk,
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

export default async function ClientReviewFragment() {
  const data: homePageTypes = await getContent();

  return (
    <Fragment>
      <ClientReview clientTalkData={data.clientTalk} />
    </Fragment>
  );
}
