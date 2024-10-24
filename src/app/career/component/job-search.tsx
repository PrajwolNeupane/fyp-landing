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
      <div className="flex items-center gap-2 bg-white py-1 px-2 rounded-3xl w-[70%] justify-between">
        <input
          placeholder="Enter the title, keywords or phrase"
          className="w-full text-2xs ml-4 focus:outline-none"
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
          className="rounded-full bg-orange-600 p-3 cursor-pointer hover:bg-orange-700 duration-300 ease-in-out"
          onClick={() => {
            router.push(`/career?search=${search}`);
          }}
        >
          <IoSearchOutline className="text-white text-[20px]" />
        </div>
      </div>
      <div className="flex gap-3">
        <h3 className="text-gray-100 font-semibold text-xs">
          Popular Searches:
        </h3>
        {popular_searches?.map((curr, index) => (
          <Link
            href={`/career?search=${curr}`}
            key={index}
            className="underline text-gray-50 text-2xs cursor-pointer hover:text-orange-500 duration-300 ease-in-out"
          >
            {curr}
          </Link>
        ))}
      </div>
    </>
  );
}
