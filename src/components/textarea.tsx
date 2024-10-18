import cn from "@/utils/class-names";
import { TextareaHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

interface TextareaProps<T extends FieldValues>
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name"> {
  label?: string;
  name: Path<T>;
  required?: boolean;
  className?: string;
  outerDivClassName?: string;
  register: UseFormRegister<T>;
  errors?: FieldError;
  hint?: string;
  setValue?: UseFormSetValue<T>;
  optional?: boolean;
}

export default function Textarea<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  required,
  outerDivClassName,
  className,
  hint,
  setValue,
  optional,
  ...props
}: TextareaProps<T>) {
  return (
    <div className={cn("flex flex-col gap-2 w-full", outerDivClassName)}>
      {label && (
        <div className="w-full flex justify-between items-center">
          <label
            className={cn("text-3xs font-semibold text-gray-700")}
            htmlFor={name}
          >
            {label} {optional && "(Optional)"}
          </label>
          {hint && <p className="text-4xs text-gray-400 italic">{hint}</p>}
        </div>
      )}
      <textarea
        id={name}
        {...props}
        {...register(name)}
        className={cn(
          `border text-2xs border-gray-700 rounded-md bg-transparent px-3 py-2 placeholder:text-gray-400 placeholder:text-[400] resize-none`,
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
