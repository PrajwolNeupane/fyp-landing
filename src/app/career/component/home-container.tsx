import NavBar from "@/components/nav-bar";
import JobSearch from "./job-search";
import { Career } from "@/types";
import JobCard from "./job-card";
import CareerImage from "@/assets/image/career-header.jpg";

export default function HomeContainer({ careers }: { careers: Career[] }) {
  return (
    <>
      <div
        className="w-full lg:h-[75vh] sm:h-[55vh] h-[400px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27, 48, 125, 1),rgba(37, 59, 144, 0.8), rgba(27, 48, 125, 1)), url(${CareerImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavBar />
        <div className="flex flex-col md:px-40 xsm:px-20 px-5 items-center lg:pt-20 md:pt-10 sm:pt-5 pt-0 gap-6">
          <h2 className="text-white lg:text-[50px] md:text-4xl xsm:text-3xl sm:text-2xl text-xl font-semibold lg:w-2/3 w-full text-center leading-[100%]">
            Join the most popular internship and companies.
          </h2>
          <p className="sm:text-base text-3xs text-center text-gray-200 md:w-2/3 xsm:w-[80%] w-[90%]">
            We've helped over 2,500 freshers to get into the most popular
            internships and jobs.
          </p>
          <JobSearch />
        </div>
      </div>
      <div className="bg-gray-100 w-full py-12 px-[10%]">
        <h3 className="lg:text-2xl md:text-xl text-md font-semibold text-gray-900">
          Get your dream job now
        </h3>
        <p className="text-gray-600 lg:text-base md:text-sm text-xs">
          Search your career opportunity through the available positions.
        </p>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
          {careers?.map((curr, indx) => (
            <JobCard career={curr} key={indx} />
          ))}
        </div>
      </div>
    </>
  );
}
