import NavBar from "@/components/nav-bar";
import { Career } from "@/types";
import JobCard from "./job-card";

export default function JobsContainer({
  careers,
  search,
}: {
  careers: Career[];
  search: string;
}) {
  return (
    <>
      <div
        className="w-full h-[110px]"
        style={{
          backgroundColor: "rgba(27, 48, 125, 1)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavBar />
      </div>
      <div className="flex flex-col gap-4 py-10 px-[8%] bg-gray-100 min-h-[calc(100vh-110px)]">
        <h3 className="font-medium text-rg">Jobs in {search}</h3>
        <div className="w-full grid grid-cols-3 gap-3">
          {careers?.map((curr, index) => (
            <JobCard career={curr} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
