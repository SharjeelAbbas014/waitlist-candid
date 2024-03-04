"use client";

import Image from "next/image";
import { Title } from "./Atoms";
import config from "@/config/general";
import { useState } from "react";

const HowWorks = () => {
  const [activeTitle, setActiveTitle] = useState(0);

  return (
    <div className="mb-24">
      <Title label="Frequently Asked Questions" />
      <div className="flex xl:flex-row flex-col gap-8 justify-center">
        <Image
          src="/howWorks.webp"
          alt="hero"
          quality={75}
          width={460}
          height={330}
          className="xl:w-[360px] w-full xl:order-1 order-2 rounded-sm h-max"
          blurDataURL="data:image/octet-stream;base64,UklGRkwBAABXRUJQVlA4IEABAAAQBwCdASooADUAPpFAnEklpCMhKrgKALASCUAZxVTQhPixtjBCMr1VNp+P6VhF22GYc+f8lZYKIKFLkBmWpAV8IAD+8tlqP/zsH8uvt57Jf7bSPa7LTBx+D65LjM2BV2Rgl/hDXqYh9I3QumQMOHnK1wKlr9f2gDSjkLCar1Lcpz+o3Uk+211B0KOsDU2cVzR7tjRHmhRI417fyHqi++03XvXWMzcG6LiWPuKwd9YXqpEXjcoMfVLnR6/bLnIBzRWEa4/0aU6JFuNsZ5uHkpXgP+3kWiyT7vLN666mwipKoed6Hw50J8OTqnZmRoq2780uXhS6+vtFRZy779wSbrPjLuLa+vqCJeFXlHFsZAty9TRqtv5A0WQ3VPsAfit9KdWXcXBN/Y+PICxhijva+h3MSOP+TN+cs3aHFLSIfsAAAA=="
          placeholder="blur"
        />
        <div className="xl:order-2 order-1 flex flex-col gap-5">
          {config.contents.howWorks.map((item, index) => {
            return (
              <div key={index} onClick={() => setActiveTitle(index)}>
                <div className="flex items-center gap-2 cursor-pointer">
                  <h4 className="flex-1 font-semibold text-lg text-black">
                    {index + 1}. {item.title}
                  </h4>
                  <Image alt="" src={"/down.svg"} width={12} height={6} />
                </div>
                {activeTitle === index && (
                  <p className="text-base text-activeButton w-full md:w-[550px] pt-4 mb-2">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
