import { CareerQuestion } from "@/types";
import * as y from "yup";

//================== Create Organization Schema ===============
export const CreateOrganizationSchema = y.object().shape({
  logo: y.string().required("Logo is required"),
  name: y.string().required("Name is required"),
  address: y.string().required("Address is required"),
  reg_no: y.string().required("Reg No Required"),
  pan_number: y.string().required("Pan Number is required"),
  description: y.string().optional(),
  contact_number: y.string().optional(),
  contact_email: y.string().email().optional(),
  lat: y.number().optional(),
  lon: y.number().optional(),
  admin: y
    .array(
      y
        .object({
          email: y.string().email().required(),
          first_name: y.string().required(),
          last_name: y.string().required(),
        })
        .required("At least one admin is required")
    )
    .min(1, "At least one admin is required")
    .required("At least one admin is required"),
});

export type CreateOrganizationInterface = y.InferType<
  typeof CreateOrganizationSchema
>;

//================== Apply Career Schema ===============
// Dynamic function to create a Yup schema
export const createApplySchema = (questions: CareerQuestion[]) => {
  // Start with the fixed fields
  const shape = {
    name: y.string().required(),
    email: y.string().email("Invalid email format").required(),
    number: y.string().required(),
    linked_in_url: y.string().url("Must be a valid URL").required(),
    description: y.string().optional(),
    cv: y
      .mixed()
      .test("fileType", "Only PDF files are allowed", (value) => {
        //@ts-expect-error
        return value && value?.type === "application/pdf";
      })
      .test("fileSize", "File size must be less than 3 MB", (value) => {
        //@ts-expect-error
        return value && value?.size <= 3 * 1024 * 1024; // 3 MB size limit
      })
      .required("CV is required"),
  };

  // Dynamically add question answers based on backend-provided questions
  questions.forEach((item, index) => {
    const key = `answer_${index + 1}`; // Create unique keys for each question
    //@ts-expect-error
    shape[key] = item.is_required
      ? y.string().required(`Required`)
      : y.string().optional();
  });

  // Return the final schema
  return y.object().shape(shape);
};

// export type ApplyCareerInterface = y.InferType<typeof ApplyCareerSchema>;
