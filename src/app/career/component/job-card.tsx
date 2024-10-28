import { Career } from "@/types";
import Image from "next/image";
import { CiUser, CiClock2, CiLaptop } from "react-icons/ci";

import { FaArrowRight } from "react-icons/fa6";
import Badge from "./badge";
import { getWorkType } from "@/utils";
import moment from "moment";
import Link from "next/link";
import { LINK } from "@/constants";

export default function JobCard({
  career,
  alignment = "vertical",
}: {
  career: Career;
  alignment?: "horizontal" | "vertical";
}) {
  if (alignment == "vertical") {
    return (
      <Link
        href={LINK.career + `/${career.id}`}
        className="flex flex-col gap-3 bg-white px-4 py-6 rounded-xl border-2 border-gray-200 cursor-pointer hover:shadow-lg duration-300 ease-in-out group"
      >
        <Image
          src={career?.organization?.logo}
          width={100}
          height={100}
          alt="Organization Logo"
          className="object-contain"
        />
        <div>
          <h2 className="text-xs font-semibold tracking-[0.5px] mt-2 text-gray-900">
            {career.title}
          </h2>
          <h4 className="text-4xs text-blue-700">{career?.role}</h4>
        </div>
        <p className="line-clamp-2 text-3xs text-gray-600">
          {career?.short_description}
        </p>
        <div className="flex flex-wrap w-full gap-2">
          <Badge
            content={
              "Expire " + moment(career?.expired_at, "YYYYMMDD").fromNow()
            }
            icon={<CiClock2 />}
          />
          <Badge content={getWorkType(career.type)} icon={<CiLaptop />} />
          <Badge content={career.openings + " Opening"} icon={<CiUser />} />
        </div>
        <div className="flex text-blue-500 items-center gap-2 group-hover:gap-3 duration-300 ease-in-out">
          <h4 className="text-4xs font-semibold">Apply Now</h4>
          <FaArrowRight />
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        href={LINK.career + `/${career.id}`}
        className="flex flex-col gap-3 bg-white px-4 mr-1 py-6 rounded-xl border-2 border-gray-200 cursor-pointer hover:shadow-sm duration-300 ease-in-out group"
      >
        <div className="w-full flex justify-between items-center">
          <Image
            src={career?.organization?.logo}
            width={80}
            height={80}
            alt="Organization Logo"
            className="object-contain"
          />
          <div>
            <h2 className="text-xs font-semibold tracking-[0.5px] mt-2 text-gray-900 text-right">
              {career.title}
            </h2>
            <h4 className="text-4xs text-blue-700 text-right">
              {career?.role}
            </h4>
          </div>
        </div>
        <div className="flex w-full gap-2">
          <Badge content={getWorkType(career.type)} icon={<CiLaptop />} />
          <Badge content={career.openings + " Opening"} icon={<CiUser />} />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CiClock2 />
            <p className="text-[11px]">
              {"Expire " + moment(career?.expired_at, "YYYYMMDD").fromNow()}
            </p>
          </div>
          <div className="flex text-blue-500 items-center gap-2 group-hover:gap-3 duration-300 ease-in-out">
            <h4 className="text-4xs font-semibold">Apply Now</h4>
            <FaArrowRight />
          </div>
        </div>
      </Link>
    );
  }
}
