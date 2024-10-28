import { LINK } from "@/constants";
import Link from "next/link";
import Logo from "@/assets/image/logo.svg";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";

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
    <div className="w-full flex items-center justify-between xl:px-32 lg:px-20 md:px-14 px-8 py-6">
      <Link href={LINK.home}>
        <Image src={Logo} width={130} height={130} alt="Logo" />
      </Link>
      <div className="mr:flex hidden items-center lg:gap-10 gap-4">
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
      <button className="mr:hidden block p-2 bg-orange-500 hover:bg-orange-600 duration-300 ease-in-out text-white rounded-lg">
        <LuMenu className="text-[25px]" />
      </button>
    </div>
  );
}
