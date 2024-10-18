import NavBar from "@/components/nav-bar";
import HomeHeader from "@/assets/image/home-header.png";

export default function Home() {
  return (
    <>
      <div
        className="w-full h-[600px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27, 48, 125, 1),rgba(37, 59, 144, 0.8), rgba(27, 48, 125, 1)), url(${HomeHeader.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Nav Bar */}
        <NavBar />
        <div className="flex flex-col px-60 pt-[5%] gap-6">
          <h1 className="text-white font-bold text-[70px] leading-[100%]">
            Your Complete
            <br /> HR Solution
          </h1>
          <p className="w-2/3 text-gray-300 text-xs">
            <span className="text-orange-500 font-medium">
              Talent Plus HRMS{" "}
            </span>
            is a powerful, cloud-based platform designed to simplify and
            automate HR processes across multiple organizations. From
            recruitment to performance tracking, it offers intuitive tools for
            managing employee records, attendance, and workflows. With
            location-based authentication and customizable settings, HRMS
            enhances efficiency and ensures seamless HR management.
          </p>
        </div>
      </div>
      {/* Client Section */}
      <div></div>
    </>
  );
}
