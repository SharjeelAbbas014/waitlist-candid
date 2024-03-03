"use client";

import { useMemo } from "react";
import Image from "next/image";
// config
import config from "@/config/general";
// components
import Form from "./Form";

const Hero = () => {
  const title = useMemo(() => {
    const findIndex = config.contents.title.search(config.contents.markOfTitle);

    if (findIndex >= 0) {
      return {
        text: config.contents.title.slice(0, findIndex),
        mark: config.contents.title.slice(
          findIndex,
          findIndex + config.contents.markOfTitle.length
        ),
      };
    }
    return { text: config.contents.title, mark: null };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.contents]);

  return (
    <section className="xl:flex-row flex-col flex items-center justify-center gap-7 sm:gap-14">
      <div className="xl:w-5/12 w-11/12 xl:my-20 mt-10 flex flex-col gap-6">
        <h1 className="min-w-[73%] sm:min-w-[300px] xl:min-w-[490px] xl:w-10/12 w-8/12 font-normal text-xl sm:text-3xl text-black relative z-40">
          {title.text}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-600">
            {title.mark}
          </span>{" "}
        </h1>
        <span className="font-light text-base sm:text-xl text-black">
          {config.contents.description}
        </span>
        <Form />
      </div>
      <Image
        src="/hero.png"
        alt="hero"
        width={1152}
        priority
        quality={80}
        height={1536}
        className="rounded-sm xl:w-6/12 xl:max-w-[370px] w-11/12 h-max"
      />
    </section>
  );
};

export default Hero;
