"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TrackOrderInterface, TrackOrderSchema } from "@/schema";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { LINK } from "@/constants";

export default function TrackFrom() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(TrackOrderSchema),
  });

  const route = useRouter();

  useEffect(() => {
    if (errors.code || errors?.number) {
      toast.error("Track Number and Code is required");
    }
  }, [errors]);

  const onSubmit = (data: TrackOrderInterface) => {
    route.push(LINK.track + `/${data.number}`);
  };

  return (
    <div className="w-[80%] flex rounded-xl p-1.5 gap-2 bg-white shadow-lg mt-5 ">
      <input
        placeholder="Tracking Number"
        className="py-2 px-4 w-full focus:outline-none rounded-md bg-gray-200"
        {...register("number")}
      />
      <input
        placeholder="Tracking Code"
        className="py-2 px-4 w-1/2 rounded-md  focus:outline-none bg-gray-200"
        {...register("code")}
        type="number"
      />
      <button
        className="px-10 bg-orange-500 hover:bg-orange-600 ease-in-out duration-300 rounded-md"
        onClick={handleSubmit(onSubmit)}
      >
        Track
      </button>
    </div>
  );
}
