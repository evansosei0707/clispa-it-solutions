import React from "react";
import Link from "next/link";

export default function ContactBlock() {
  return (
    <div className="flex-col flex justify-start py-24 min-[800px]:justify-center min-[800px]:items-start items-center min-[800px]:flex-row gap-16 w-full px-4 md:px-10 lg:px-12">
      <div className="min-h-[490px] w-full min-[800px]:w-1/2 rounded-[20px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3468076242584!2d-0.20359312627558573!3d5.662884432568254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d67ed3ed271%3A0x90293b3666f97f3f!2sRamjack%20Technology%20Solutions%20-%20Ghana!5e0!3m2!1sen!2sgh!4v1719599232775!5m2!1sen!2sgh"
          width="100%"
          height="490"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" flex-col flex justify-start items-start gap-6 w-full min-[800px]:w-1/2">
        <h2 className=" md:text-[42px] text-[30px] font-Raj leading-[32px] md:leading-[45px] text-mainColor font-bold">
          Get in touch
        </h2>
        <p className=" text-base leading-[26px] font-liv  text-customBlack">
          I am expert on Optitech provide the best quality It solution neque
          porro quisqu qui dolorem ipsum quia golor sit amet, conse ctetur,
          adipisci velit, sed eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat most of the a people want to lear IT related
          solution is very great reason
        </p>
        <div className=" flex-col-x-start-only gap-4 w-full">
          <h3 className=" text-[24px] leading-[38px] font-bold font-Raj text-mainColor">
            Contact Info
          </h3>
          <div className=" font-liv text-base leading-[26px] text-mainColor2 flex-col-x-start-only">
            <h4>Address</h4>
            <p className=" text-customBlack">
              254, North City, Bulex Center, New York
            </p>
          </div>
          <div className=" font-liv text-base leading-[26px] text-mainColor2 flex-col-x-start-only ">
            <h4>Phone</h4>
            <p className=" text-customBlack">
              09 (354) 587 874 or 10 (698) 852 741
            </p>
          </div>
          <div className=" font-liv text-base leading-[26px] text-mainColor2 flex-col-x-start-only ">
            <h4>Email</h4>
            <p className=" text-customBlack">
              info@example.com or info@example.com
            </p>
          </div>
          <Link
            href="/"
            className=" tracking-widest text-[20px] leading-[32px] font-liv text-mainColor2 hover:text-mainColor transition-colors duration-100"
          >
            https://techgigs.com
          </Link>
        </div>
      </div>
    </div>
  );
}
