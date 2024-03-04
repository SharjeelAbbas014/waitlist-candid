import Image from "next/image";
import Link from "next/link";

export const Blog = ({
  content,
  heading,
  lastLine,
}: {
  content: { title: string; img?: string; content: string }[];
  heading: string;
  lastLine: string;
}) => {
  return (
    <div className="max-w-5xl m-auto flex items-center flex-col">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-16">
        {heading}
      </h1>
      {content.map((para, i) => {
        return (
          <div key={i}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {para.title}:
            </h2>
            <p className="text-lg text-gray-700 mb-8">{para.content}</p>
            {para.img && (
              <Image
                className="m-auto"
                src={para.img}
                alt={para.title}
                width={540}
                height={540}
              />
            )}
          </div>
        );
      })}
      <Image
        src="/hero.webp"
        alt="hero"
        width={576}
        priority
        quality={75}
        height={768}
        placeholder="blur"
        blurDataURL="data:image/octet-stream;base64,UklGRugBAABXRUJQVlA4WAoAAAAQAAAAJwAANAAAQUxQSBQAAAABD3Dl/4iIIBZM8peeQmdE/7MFAFZQOCCuAQAAsAoAnQEqKAA1AD6FNpdHpSMlITK0nmCgEIlsALUbtIsfsfIMcvEUsIBuFt6A3m0KmKlY5RxdwieJV1yXxRQSXz219jMPJGlRiE+wKSkw+CLXOyr+QSp2GPNpG1xKAAD+7gJ5grmtf/Zy4h//v/0Yf539klyyMoCP8SPsPzh+wvXnC4CBcmJITfLTLZE/rNradfee/DdDaJr2ZeK4lhI1W/VAi/IP6fnf5Wf+OoErtHF/XZqm0W3md3AXeLWK9S4e3rIQKiXoKtQqLTvBaCpGSNamZc56KtRXc9tqSTxNDt7D82hwqVrrr6dR9h0MHfrgY//N4Q9pYbSP9I0GkYc2dA/UoQZw9B9kzuUN/+vDaLtOS4CjgTGbx2ok0ZUqFgPrcH988vhmw7t/HHkOzSbKtoP23hCuh+GB/GhdH7PH/sncOBBNFCtCIwj5AsNdmzerlpiBK+bEube/mfBpCwT8Qk5PHmwpRs0ojLdb51VUBrdCYePGrYs9ZWwTMGePpftmGzNOZERHkZdJpLb9Jg0THV7m9QUN8mQxFP/FNNfdnzvgzJ/zPW8m/ZrZQtIAAA=="
        className="rounded-sm xl:w-6/12 xl:max-w-[370px] w-11/12 h-max m-auto mb-12"
      />
      <p className="text-lg text-gray-700 mb-8">{lastLine}</p>

      <Link
        href="/"
        className="relative items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#51c3a8] transition-all duration-150 ease-in-out rounded-sm hover:pl-10 hover:pr-6 bg-gray-50 group bg-gray m-auto mb-20 w-max block"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#51c3a8] group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            className="w-5 h-5 text-[#51c3a8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          Learn More About Candid
        </span>
      </Link>
    </div>
  );
};
