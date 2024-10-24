import NavBar from "@/components/nav-bar";
import HomeHeader from "@/assets/image/home-header.png";
import Link from "next/link";
import { LINK } from "@/constants";

export default function Home() {
  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27, 48, 125, 1),rgba(37, 59, 144, 0.8), rgba(27, 48, 125, 1)), url(${HomeHeader.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Nav Bar */}
        <NavBar />
        <div className="flex flex-col items-center my-20 justify-between gap-10">
          <h1 className="text-white font-bold text-[100px] leading-[100%]">
            Talent Plus <span className="text-orange-500">HRMS</span>
          </h1>
          <h5 className="text-center text-gray-100 text-4xl leading-[110%]">
            Simplifying HR processes <br /> across organizations
          </h5>
          <p className="w-1/2 text-center text-gray-200 text-xs">
            A cloud-based platform that streamlines HR processes, from
            recruitment to performance tracking. It offers tools for managing
            employee records, attendance, and workflows, with features like
            location-based authentication and customizable settings for
            efficient HR management.
          </p>
          <Link
            href={LINK.becomeClient}
            className="px-7 rounded-3xl font-semibold text-3xs tracking-[1px]  text-white py-2 bg-orange-600 hover:bg-orange-700 duration-300 ease-in-out shadow-lg"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
      {/* Client Section */}
      <div></div>
    </>
  );
}
