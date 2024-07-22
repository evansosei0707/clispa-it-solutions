// @ts-nocheck
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  await fetch(
    `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v2024-03-11/data/mutate/${process.env.NEXT_PUBLIC_DATASET}`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify({
        _type: "formSubmission",
        name,
        email,
        phone,
        message,
      }),
    }
  );

  return NextResponse.json({ message: "Added successful" });
}
