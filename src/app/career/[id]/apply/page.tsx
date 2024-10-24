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
import ApplyForm from "./component/apply-form";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
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
      <div className="flex flex-col gap-4 w-[60%] mx-auto py-12 bg-white items-start">
        <div className="w-full flex gap-4 items-center">
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
            <h4 className="text-4xs text-blue-700">{data.data.career?.role}</h4>
          </div>
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
                <h2 className="font-medium text-4xs text-gray-600">Location</h2>
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
                <h2 className="font-medium text-4xs text-gray-600">Openings</h2>
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
        <div className="w-full h-[1px] bg-gray-200"></div>
        <ApplyForm questions={data.data.career.question} id={id} />
      </div>
    </>
  );
}
