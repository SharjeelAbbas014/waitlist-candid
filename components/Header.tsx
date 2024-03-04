import Image from "next/image";
import config from "@/config/general";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex-col sm:flex-row flex justify-between items-start">
      <Link href="/" prefetch={false}>
        <Image
          src={"/logo.webp"}
          width={180}
          height={60}
          alt={config.title}
          placeholder="blur"
          priority
          blurDataURL="data:image/octet-stream;base64,UklGRnwAAABXRUJQVlA4IHAAAAAQBACdASoYABgAPpE8mEelo6KhMAgAsBIJaQAD4foN/AGXdEbRPbMMAAD++6J8+lC+FG0356vw9Q/86pJeEavk0a2Eh7ytXWWqYVbe62SAhm+hYwmVpPvdt6nKdI3vLaJtlb830VG8M4bQ0t0WAAAA"
        />
      </Link>
    </header>
  );
};

export default Header;
