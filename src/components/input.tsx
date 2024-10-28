import cn from "@/utils/class-names";
import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

interface InputProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  label?: string;
  name: Path<T>;
  required?: boolean;
  className?: string;
  outerDivClassName?: string;
  register: UseFormRegister<T>;
  errors?: FieldError;
  hint?: string;
  setValue?: UseFormSetValue<T>;
}

export default function Input<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  required,
  outerDivClassName,
  className,
  hint,
  setValue,
  ...props
}: InputProps<T>) {
  return (
    <div className={cn(`flex flex-col gap-2 w-full`, outerDivClassName)}>
      {label && (
        <div className="w-full flex justify-between items-center">
          <label
            className={cn(
              "text-3xs font-medium text-gray-700",
              required && "after:content-['*'] after:text-red-500 after:pl-1"
            )}
            htmlFor={name}
          >
            {label}
          </label>
          {hint && <p className="text-4xs text-gray-400 italic">{hint}</p>}
        </div>
      )}
      <input
        id={name}
        {...props}
        {...register(name)}
        className={cn(
          `border text-2xs border-gray-700 rounded-md bg-transparent px-3 py-2 placeholder:text-gray-400 placeholder:text-[400]`,
          errors?.message ? "outline-red-500" : "outline-primary",
          className
        )}
      />
      {errors && errors?.message && (
        <p className="text-3xs text-red-500">{errors?.message}</p>
      )}
    </div>
  );
}
