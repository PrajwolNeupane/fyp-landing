import NavBar from "@/components/nav-bar";
import JobSearch from "./job-search";
import { Career } from "@/types";
import JobCard from "./job-card";
import CareerImage from "@/assets/image/career-header.jpg";

export default function HomeContainer({ careers }: { careers: Career[] }) {
  return (
    <>
      <div
        className="w-full h-[75vh]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27, 48, 125, 1),rgba(37, 59, 144, 0.8), rgba(27, 48, 125, 1)), url(${CareerImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavBar />
        <div className="flex flex-col px-40 items-center pt-20 gap-6">
          <h2 className="text-white text-[50px] font-semibold w-2/3 text-center leading-[100%]">
            Join the most popular internship and companies.
          </h2>
          <p className="text-center text-gray-200 w-2/3">
            We've helped over 2,500 freshers to get into the most popular
            internships and jobs.
          </p>
          <JobSearch />
        </div>
      </div>
      <div className="bg-gray-100 w-full py-12 px-[10%]">
        <h3 className="text-2xl font-semibold text-gray-900">
          Get your dream job now
        </h3>
        <p className="text-gray-600">
          Search your career opportunity through the available positions.
        </p>
        <div className="w-full grid grid-cols-3 gap-5 my-10">
          {careers?.map((curr, indx) => (
            <JobCard career={curr} key={indx} />
          ))}
        </div>
      </div>
    </>
  );
}
