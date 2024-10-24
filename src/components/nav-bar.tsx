import { LINK } from "@/constants";
import Link from "next/link";
import Logo from "@/assets/image/logo.svg";
import Image from "next/image";

export default function NavBar() {
  const nav_links = [
    {
      title: "ABOUT US",
      url: "/",
    },
    {
      title: "SERVICES",
      url: "/",
    },
    {
      title: "OUR CLIENTS",
      url: "/",
    },
    {
      title: "CAREERS",
      url: LINK.career,
    },
    {
      title: "CONTACT US",
      url: "/",
    },
  ];

  return (
    <div className="w-full flex items-center justify-between px-32 py-6">
      <Link href={LINK.home}>
        <Image src={Logo} width={130} height={130} alt="Logo" />
      </Link>
      <div className="flex items-center gap-10">
        {nav_links?.map((curr, indx) => (
          <Link
            href={curr.url}
            key={indx}
            className="text-white text-3xs font-medium hover:text-orange-500 ease-in-out duration-300"
          >
            {curr.title}
          </Link>
        ))}
        <Link
          href={LINK.becomeClient}
          className="px-7 tracking-[0.5px] rounded-3xl font-medium text-4xs text-white py-2 bg-orange-600 hover:bg-orange-700 duration-300 ease-in-out shadow-lg"
        >
          REGISTER NOW
        </Link>
      </div>
    </div>
  );
}
