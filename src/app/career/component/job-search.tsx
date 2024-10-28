"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function JobSearch() {
  const popular_searches = [
    "Front Developer",
    "UI UX Designer",
    "Graphic Designer",
    "Backend Developer",
  ];

  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="flex items-center gap-2 bg-white py-1 px-2 rounded-3xl md:w-[70%] xsm:w-[80%] w-[90%]  justify-between">
        <input
          placeholder="Enter the title, keywords or phrase"
          className="w-full sm:text-2xs text-4xs sm:ml-4 ml-2 focus:outline-none"
          value={search}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              router.push(`/career?search=${search}`);
            }
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div
          className="rounded-full bg-orange-600 sm:p-3 p-2 cursor-pointer hover:bg-orange-700 duration-300 ease-in-out"
          onClick={() => {
            router.push(`/career?search=${search}`);
          }}
        >
          <IoSearchOutline className="text-white sm:text-[20px] text-[16px]" />
        </div>
      </div>
      <div className="flex gap-3 flex-wrap">
        <h3 className="text-gray-100 font-semibold sm:text-xs text-3xs">
          Popular Searches:
        </h3>
        {popular_searches?.map((curr, index) => (
          <Link
            href={`/career?search=${curr}`}
            key={index}
            className="underline text-gray-50 sm:text-2xs text-[11px] cursor-pointer hover:text-orange-500 duration-300 ease-in-out"
          >
            {curr}
          </Link>
        ))}
      </div>
    </>
  );
}
