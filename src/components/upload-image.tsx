"use client";
import { IoCloudUploadOutline } from "react-icons/io5";
import cn from "@/utils/class-names";
import { InputHTMLAttributes, useState } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
} from "react-hook-form";
import Image from "next/image";

interface Props<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  label?: string;
  name: Path<T>;
  required?: boolean;
  className?: string;
  errors?: FieldError;
  setValue: UseFormSetValue<T>;
}

export default function UploadImage<T extends FieldValues>({
  className,
  label,
  required,
  name,
  setValue,
  placeholder,
}: Props<T>) {
  const [previewUrl, setPreviewUrl] = useState<null | string>(null);

  return (
    <div className={cn(className, "flex flex-col gap-2")}>
      <label
        className={cn(
          "text-3xs font-medium text-gray-700",
          required && "after:content-['*'] after:text-red-500 after:pl-1"
        )}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="image-input"
        onChange={(e) => {
          const files = e.target.files;
          if (files?.length && files?.length > 0) {
            const url = URL.createObjectURL(files[0]);
            setPreviewUrl(url);
            setValue(name, files[0] as PathValue<T, Path<T>>);
          }
        }}
      />
      <div
        className="cursor-pointer w-48 h-48 bg-gray-200 rounded-md"
        onClick={() => {
          const doc = document.getElementById("image-input");
          if (doc) {
            doc.click();
          }
        }}
      >
        {previewUrl == null ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <IoCloudUploadOutline className="w-[40px] h-[40px]" />
            <p className="text-4xs text-gray-600">{placeholder}</p>
          </div>
        ) : (
          <Image
            src={previewUrl}
            width={192}
            height={192}
            alt="Organization Logo"
            className="object-contain w-full h-full"
          />
        )}
      </div>
    </div>
  );
}
