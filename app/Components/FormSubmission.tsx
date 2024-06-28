"use client";

import React, { useState } from "react";

export default function FormSubmission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div
      id="getQuote"
      className=" flex flex-col mb-14 items-center justify-center px-5 md:px-10 lg:px-14 gap-10 mx-auto w-full"
    >
      <h3 className=" text-[26px] leading-[42px] text-mainColor2 font-bold font-Raj">
        Leave a Reply
      </h3>

      <div className=" w-full md:max-w-[95%] lg:max-w-[70%] flex flex-col gap-4 items-start justify-center">
        <div className=" w-full flex-col flex items-start gap-5 justify-center min-[872px]:flex-row min-[872px]:items-center ">
          <input
            type="text"
            placeholder="Full name*"
            className=" border-mainColor2 outline-mainColor border rounded-lg p-4 w-full flex-1"
          />
          <input
            type="email"
            placeholder="Email*"
            className=" border-mainColor2 outline-mainColor border rounded-lg p-4 w-full flex-1"
          />
          <input
            type="number"
            placeholder="Phone*"
            className=" border-mainColor2 outline-mainColor border rounded-lg p-4 w-full flex-1"
          />
        </div>
        <div className=" w-full">
          <textarea
            className=" border-mainColor2 outline-mainColor min-h-[300px] border rounded-lg p-4 w-full "
            placeholder="Your Message"
            name="message"
          />
        </div>
      </div>
      <button className="bg-primary-gradient mx-auto text-white font-semibold py-[10px] px-[27px] text-[20px] leading-[26px] rounded-[25px] tracking-tight">
        Send now
      </button>
    </div>
  );
}
