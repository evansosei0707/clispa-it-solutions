import React, { Fragment } from "react";

import { client } from "../lib/client";
import CountUpStats from "./CountUp";

// Fetch content with GROQ
async function getContent() {
  const CONTENT_QUERY = `*[_type == 'homePage'][0]{
  
  homeStats,
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

export default async function CountUpFragment() {
  const data: homePageTypes = await getContent();

  return (
    <Fragment>
      <CountUpStats countUpData={data.homeStats} />
    </Fragment>
  );
}
