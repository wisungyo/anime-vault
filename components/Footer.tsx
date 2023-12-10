import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 Anime Vault</p>
      <Link href="#top">
        <Image
          src="./logo.svg"
          alt="logo"
          width={47}
          height={44}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-6">
        <a href="https://www.tiktok.com/@wisungyo">
          <Image
            src="./tiktok.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
        <a href="https://www.instagram.com/wisungyo">
          <Image
            src="./instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
        <a href="https://www.twitter.com/wisungyo">
          <Image
            src="./twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
