"use client";

import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {
  CreateOrganizationSchema,
  CreateOrganizationInterface,
} from "@/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import FindLocationMap from "./find-location-map";
import UploadImage from "@/components/upload-image";
import { IoAdd } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import { registerOrganization } from "@/feature/service";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const {
    register,
    formState: { errors },
    setValue,
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(CreateOrganizationSchema),
    defaultValues: {
      admin: [{ email: "", first_name: "", last_name: "" }],
    },
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "admin",
  });

  return (
    <form
      className="grid grid-cols-3 w-full gap-3"
      onSubmit={handleSubmit(async (data) => {
        try {
          await registerOrganization(data);
          toast.success("Organization Registered Successfully");
        } catch (e) {
          console.log(e);
          toast.error("Something went wrong");
        }
      })}
    >
      <>
        <UploadImage<CreateOrganizationInterface>
          className="col-span-3"
          setValue={setValue}
          //@ts-expect-error
          errors={errors?.logo}
          name="logo"
          required
          label="Organization Logo"
          placeholder="Upload Organization Logo"
        />
        <Input<CreateOrganizationInterface>
          name="name"
          register={register}
          errors={errors?.name}
          label="Organization Name"
          placeholder="Enter Organization Name"
          required={true}
        />
        <Input<CreateOrganizationInterface>
          name="contact_email"
          register={register}
          errors={errors?.contact_email}
          label="Organization Contact Email"
          placeholder="Enter Organization Contact Email"
          required={false}
          type="email"
        />
      </>
      <>
        <Input<CreateOrganizationInterface>
          name="contact_number"
          register={register}
          errors={errors?.contact_number}
          label="Organization Contact Number"
          placeholder="Enter Organization Contact Number"
          required={false}
          type="number"
        />
        <Input<CreateOrganizationInterface>
          name="pan_number"
          register={register}
          errors={errors?.pan_number}
          label="Organization Pan Number"
          placeholder="Enter Organization Pan Number"
          required={true}
          type="number"
        />
        <Input<CreateOrganizationInterface>
          name="reg_no"
          register={register}
          errors={errors?.reg_no}
          label="Organization Registration  Number"
          placeholder="Enter Organization Registration Number"
          required={true}
          type="number"
        />
      </>
      <Input<CreateOrganizationInterface>
        name="address"
        register={register}
        errors={errors?.address}
        label="Organization Address"
        placeholder="Enter Organization Address"
        required={true}
        type="text"
      />
      <div className="col-span-3 grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-3">
          <Textarea<CreateOrganizationInterface>
            name="description"
            register={register}
            errors={errors?.description}
            label="Organization Description"
            placeholder="Enter Organization Description"
            required={true}
            rows={15}
          />
        </div>
        <FindLocationMap setValue={setValue} />
      </div>
      <div className="col-span-3">
        <h4 className="text-xs font-medium text-blue-900">
          Organization Admin Account
        </h4>
      </div>
      {fields?.map((_, index) => (
        <div
          className="col-span-3 grid grid-cols-8 gap-3 items-center"
          key={index}
        >
          <Input<CreateOrganizationInterface>
            name={`admin.${index}.email`}
            register={register}
            errors={errors?.admin?.[index]?.email}
            label="Admin Email"
            placeholder="Enter Admin Email"
            required={true}
            type="email"
            outerDivClassName="col-span-2"
          />
          <Input<CreateOrganizationInterface>
            name={`admin.${index}.first_name`}
            register={register}
            errors={errors?.admin?.[index]?.first_name}
            label="Admin First Name"
            placeholder="Enter Admin First Name"
            outerDivClassName="col-span-2"
            required={true}
          />
          <Input<CreateOrganizationInterface>
            name={`admin.${index}.last_name`}
            register={register}
            errors={errors?.admin?.[index]?.last_name}
            label="Admin Last Name"
            placeholder="Enter Admin Last Name"
            outerDivClassName="col-span-2"
            required={true}
          />
          <button
            type="button"
            className="bg-slate-700 hover:bg-slate-800 duration-300 ease-in-out flex justify-center items-center text-gray-100 rounded-md py-2"
            onClick={() => {
              append({ email: "", first_name: "", last_name: "" });
            }}
          >
            <IoAdd className="text-lg" />
          </button>
          <button
            type="button"
            disabled={index === 0}
            className="bg-red-500 hover:bg-red-600 duration-300 ease-in-out  flex justify-center items-center text-gray-100  rounded-md py-2 disabled:cursor-not-allowed"
            onClick={() => {
              remove(index);
            }}
          >
            <CiTrash className="text-lg" />
          </button>
        </div>
      ))}
      <div className="col-span-3 flex justify-end items-end">
        <button className="bg-orange-500 hover:bg-orange-600 w-[150px] duration-300 ease-in-out cursor-pointer px-5 py-2 rounded-lg text-3xs font-medium text-white">
          Submit
        </button>
      </div>
    </form>
  );
}
