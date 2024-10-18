import * as y from "yup";

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
