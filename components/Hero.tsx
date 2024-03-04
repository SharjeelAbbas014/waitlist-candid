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
        src="/hero.webp"
        alt="hero"
        width={576}
        priority
        quality={75}
        height={768}
        placeholder="blur"
        blurDataURL="data:image/octet-stream;base64,UklGRugBAABXRUJQVlA4WAoAAAAQAAAAJwAANAAAQUxQSBQAAAABD3Dl/4iIIBZM8peeQmdE/7MFAFZQOCCuAQAAsAoAnQEqKAA1AD6FNpdHpSMlITK0nmCgEIlsALUbtIsfsfIMcvEUsIBuFt6A3m0KmKlY5RxdwieJV1yXxRQSXz219jMPJGlRiE+wKSkw+CLXOyr+QSp2GPNpG1xKAAD+7gJ5grmtf/Zy4h//v/0Yf539klyyMoCP8SPsPzh+wvXnC4CBcmJITfLTLZE/rNradfee/DdDaJr2ZeK4lhI1W/VAi/IP6fnf5Wf+OoErtHF/XZqm0W3md3AXeLWK9S4e3rIQKiXoKtQqLTvBaCpGSNamZc56KtRXc9tqSTxNDt7D82hwqVrrr6dR9h0MHfrgY//N4Q9pYbSP9I0GkYc2dA/UoQZw9B9kzuUN/+vDaLtOS4CjgTGbx2ok0ZUqFgPrcH988vhmw7t/HHkOzSbKtoP23hCuh+GB/GhdH7PH/sncOBBNFCtCIwj5AsNdmzerlpiBK+bEube/mfBpCwT8Qk5PHmwpRs0ojLdb51VUBrdCYePGrYs9ZWwTMGePpftmGzNOZERHkZdJpLb9Jg0THV7m9QUN8mQxFP/FNNfdnzvgzJ/zPW8m/ZrZQtIAAA=="
        className="rounded-sm xl:w-6/12 xl:max-w-[370px] w-11/12 h-max"
      />
    </section>
  );
};

export default Hero;
