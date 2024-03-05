"use client";
import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-15">
      <div className="bg-grayBackground rounded-md">
        <div className="w-11/12 xl:w-[1120px] mx-auto flex md:flex-row flex-col justify-center md:gap-0 gap-12 items-center py-16">
          <div className="flex gap-32 md:flex-row flex-col-reverse">
            <div className="w-full">
              <Image
                src={"/logo.webp"}
                width={180}
                height={60}
                placeholder="blur"
                alt={config.title}
                className="mb-4"
                blurDataURL="data:image/octet-stream;base64,UklGRnwAAABXRUJQVlA4IHAAAAAQBACdASoYABgAPpE8mEelo6KhMAgAsBIJaQAD4foN/AGXdEbRPbMMAAD++6J8+lC+FG0356vw9Q/86pJeEavk0a2Eh7ytXWWqYVbe62SAhm+hYwmVpPvdt6nKdI3vLaJtlb830VG8M4bQ0t0WAAAA"
              />
              <p className="w-full text-left text-activeButton">
                {config.description}
              </p>
            </div>

            <div className="w-full flex flex-col">
              <h3 className="text-xl font-bold  mb-4">Learn More:</h3>
              <Link
                href="/sls-free-toothpaste-pakistan-why-candid-is-your-goto"
                prefetch={false}
                className="text-[#787878] mb-4"
              >
                Discover the Best SLS-Free Toothpaste in Pakistan: Why Candid is
                Your Go-To Choice
              </Link>
              <Link
                href="/the-ultimate-guide-to-sls-free-toothpaste-in-pakistan-why-candid-is-the-healthier-choice"
                prefetch={false}
                className="text-[#787878]"
              >
                The Ultimate Guide to SLS-Free Toothpaste in Pakistan: Why
                Candid is the Healthier Choice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
