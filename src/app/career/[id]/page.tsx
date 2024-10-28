import NavBar from "@/components/nav-bar";
import { LINK } from "@/constants";
import { getCareerDetail } from "@/feature/service";
import { getWorkType } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { BsSuitcaseLg } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { TbCurrencyDollar } from "react-icons/tb";
import JobCard from "../component/job-card";
import MdPreview from "../component/md-preview";

export default async function ({ params: { id } }: { params: { id: string } }) {
  const data = await getCareerDetail(id);

  return (
    <>
      <div
        className="w-full h-[110px]"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(27, 48, 125, 1)",
        }}
      >
        <NavBar />
      </div>
      <div className="flex w-full py-10 px-[8%] bg-gray-100 min-h-[calc(100vh-110px)] gap-5">
        {/*===================== Career Detail ====================*/}
        <div className="flex flex-col gap-4 w-[72%] p-8 bg-white rounded-lg items-start">
          <div className="w-full flex gap-4 items-center relative">
            <Image
              src={data.data.career.organization.logo}
              width={150}
              height={150}
              alt="Organization Logo"
              className="object-contain"
            />
            <div>
              <h2 className="text-xs font-semibold tracking-[0.5px] mt-2 text-gray-900">
                {data.data.career.title}
              </h2>
              <h4 className="text-4xs text-blue-700">
                {data.data.career?.role}
              </h4>
            </div>
            <Link
              href={LINK.career + `/${id}/apply`}
              className="bg-orange-500 absolute right-0 hover:bg-orange-600 duration-300 ease-in-out cursor-pointer px-5 py-2 rounded-lg text-3xs font-medium text-white"
            >
              Apply Now
            </Link>
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="w-full grid grid-cols-4 gap-4">
            {/* Salary */}
            {data.data.career.salary && (
              <div className="flex gap-2 items-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <TbCurrencyDollar className="text-orange-600" />
                </div>
                <div className="">
                  <h2 className="font-medium text-4xs text-gray-600">Salary</h2>
                  <h4 className="font-medium text-2xs text-gray-800">
                    Rs {data.data.career.salary}
                  </h4>
                </div>
              </div>
            )}
            {/* Location */}
            {data.data.career.address && (
              <div className="flex gap-2 items-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <FiMapPin className="text-orange-600" />
                </div>
                <div className="">
                  <h2 className="font-medium text-4xs text-gray-600">
                    Location
                  </h2>
                  <h4 className="font-medium text-2xs text-gray-800">
                    {data.data.career.address}
                  </h4>
                </div>
              </div>
            )}
            {/* Type */}
            {data.data.career.type && (
              <div className="flex gap-2 items-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <BsSuitcaseLg className="text-orange-600" />
                </div>
                <div className="">
                  <h2 className="font-medium text-4xs text-gray-600">Type</h2>
                  <h4 className="font-medium text-2xs text-gray-800">
                    {getWorkType(data.data.career.type)}
                  </h4>
                </div>
              </div>
            )}
            {/* Openings */}
            {data.data.career.openings && (
              <div className="flex gap-2 items-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <CiUser className="text-orange-600" />
                </div>
                <div className="">
                  <h2 className="font-medium text-4xs text-gray-600">
                    Openings
                  </h2>
                  <h4 className="font-medium text-2xs text-gray-800">
                    {data.data.career.openings}
                  </h4>
                </div>
              </div>
            )}
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="flex flex-col gap-1">
            <h4 className="text-2xs font-semibold text-gray-800">
              Job Description:
            </h4>
            <p className="text-3xs text-gray-600">
              {data.data.career.short_description}
            </p>
          </div>
          {data.data.career.description && (
            <MdPreview content={data.data.career.description} />
          )}
        </div>
        {/*===================== Side Bar ====================*/}
        <div className="flex flex-col w-[28%] h-full gap-3">
          <h3 className="font-medium text-sm text-gray-900">Similar Careers</h3>
          <div className="flex flex-col gap-2 overflow-y-auto">
            {data.data.similarCareer?.map((curr, index) => (
              <JobCard career={curr} key={index} alignment="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
