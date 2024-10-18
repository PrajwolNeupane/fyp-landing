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
      </div>
      <div className="flex items-center gap-3">
        <Link
          href={LINK.becomeClient}
          className="border-orange-500 border-[1.5px] px-7  rounded-3xl font-medium text-4xs text-white py-2 hover:bg-orange-600 duration-300 ease-in-out shadow-lg"
        >
          REGISTER NOW
        </Link>
        <Link
          href={LINK.track}
          className="px-7  rounded-3xl font-medium text-4xs text-white py-2 bg-orange-500 hover:bg-orange-600 duration-300 ease-in-out shadow-lg"
        >
          TRACK ORDER
        </Link>
      </div>
    </div>
  );
}
