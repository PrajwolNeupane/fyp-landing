"use client";

import Input from "@/components/input";
import Textarea from "@/components/textarea";
import { createApplySchema } from "@/schema"; // Assuming createApplySchema is like createDynamicSchema
import { CareerQuestion } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as y from "yup";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { applyCareer } from "@/feature/service";

export default function ApplyForm({
  questions,
  id,
}: {
  questions: any;
  id: string;
}) {
  // Parse the questions from props
  const parsedQuestions: Array<CareerQuestion> | null = JSON.parse(questions);

  // Create the dynamic schema based on parsed questions
  const ApplyCareerSchema = createApplySchema(parsedQuestions!);
  type ApplyCareerInterface = y.InferType<typeof ApplyCareerSchema>;

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<ApplyCareerInterface>({
    resolver: yupResolver(ApplyCareerSchema),
  });

  const onSubmit = async (data: ApplyCareerInterface) => {
    alert("H");
    try {
      const response = await applyCareer({ id, body: data });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className="w-full grid grid-cols-2 gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Static Fields */}
      <Input<ApplyCareerInterface>
        register={register}
        errors={errors?.name}
        name="name"
        label="Name"
        required
        placeholder="eg. Jhon Doe"
        type="text"
      />
      <Input<ApplyCareerInterface>
        register={register}
        errors={errors?.email}
        name="email"
        label="Email"
        required
        placeholder="eg. jhondoe@gmail.com"
        type="email"
      />
      <Input<ApplyCareerInterface>
        register={register}
        errors={errors?.number}
        name="number"
        label="Phone Number"
        required
        placeholder="1234567890"
        type="number"
      />
      <Input<ApplyCareerInterface>
        register={register}
        errors={errors?.linked_in_url}
        name="linked_in_url"
        label="Linkedin URL"
        required
        placeholder="https://linkedin.com/in/jhondoe"
        type="url"
      />
      <Textarea<ApplyCareerInterface>
        register={register}
        errors={errors?.description}
        name="description"
        outerDivClassName="col-span-2 w-full"
        rows={3}
        label="Description"
        placeholder="Description about yourself"
      />

      {/* Dynamic Questions */}
      {parsedQuestions?.map((curr, indx) => (
        <Textarea<ApplyCareerInterface>
          outerDivClassName="col-span-2"
          key={indx}
          register={register}
          //@ts-expect-error
          errors={errors?.[`answer_${indx + 1}`]} // Dynamic error handling for each answer
          //@ts-expect-error
          name={`answer_${indx + 1}`} // Unique field name for each question
          label={curr?.question}
          required={curr?.is_required}
          rows={2}
        />
      ))}
      <div className="flex flex-col items-start gap-2">
        <button
          type="button"
          className="col-span-1 bg-gray-100 hover:bg-gray-200 duration-300 eas border-[1px] py-3 px-12 rounded-md flex flex-col items-center"
          onClick={() => {
            document.getElementById("cv-input")?.click();
          }}
        >
          <AiOutlineCloudUpload className="text-[30px]" />
          <h4 className="text-4xs text-gray-800">Upload CV</h4>
        </button>
        <p className="text-3xs text-red-500">{errors?.cv?.message}</p>
        <input
          type="file"
          accept="application/pdf"
          id="cv-input"
          className="hidden"
          onChange={(e) => {
            const file = e?.target?.files?.[0];
            if (file) {
              setValue("cv", file, {
                shouldValidate: true,
              }); // Set the CV file to the form data
            }
          }}
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 col-span-2 hover:bg-orange-600 duration-300 ease-in-out cursor-pointer px-5 py-2 rounded-lg text-3xs font-medium text-white"
      >
        Apply Now
      </button>
    </form>
  );
}
