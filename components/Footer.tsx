"use client";
import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-15">
      <div className="bg-grayBackground rounded-md">
        <div className="w-11/12 xl:w-[1050px] mx-auto flex md:flex-row flex-col justify-center md:gap-0 gap-12 items-center py-16">
          <div className="flex flex-col gap-2 items-center">
            <Image
              src={"/logo.svg"}
              width={180}
              height={60}
              alt={config.title}
            />
            <p className="w-11/12 text-center text-activeButton">
              {config.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
