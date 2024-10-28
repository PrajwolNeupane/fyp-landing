"use client";

import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {
  CreateOrganizationSchema,
  CreateOrganizationInterface,
} from "@/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FindLocationMap from "./find-location-map";
import UploadImage from "@/components/upload-image";

export default function RegisterForm() {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(CreateOrganizationSchema),
  });

  return (
    <form className="grid grid-cols-3 w-full gap-3">
      <>
        <UploadImage<CreateOrganizationInterface>
          className="col-span-3"
          setValue={setValue}
          errors={errors?.image}
          name="image"
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
          name="logo"
          register={register}
          errors={errors?.logo}
          label="System account email"
          placeholder="Enter System account Email"
          required={true}
          type="email"
        />
        <Input<CreateOrganizationInterface>
          name="contact_email"
          register={register}
          errors={errors?.logo}
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
          errors={errors?.logo}
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
      <div className="col-span-3 grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-3">
          <Input<CreateOrganizationInterface>
            name="address"
            register={register}
            errors={errors?.address}
            label="Organization Address"
            placeholder="Enter Organization Address"
            required={true}
            type="text"
          />
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
    </form>
  );
}
