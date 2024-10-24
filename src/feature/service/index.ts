import { GetAllCareerResponse, GetCareerResponse } from "@/types";
import axios, { AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllCareer = async (params?: {
  limit?: number;
  search?: string;
}) => {
  const response: AxiosResponse<GetAllCareerResponse> = await axios.get(
    `${baseURL}/career/all?limit=${params?.limit}&search=${params?.search}`
  );
  return response.data;
};

export const getCareerDetail = async (id: string) => {
  const response: AxiosResponse<GetCareerResponse> = await axios.get(
    `${baseURL}/career/detail/${id}`
  );
  return response.data;
};

//============== Upload Document ==================
export const uploadDocument = async (files: File[]) => {
  const formData = new FormData();
  files?.map((curr, index) => {
    formData.append(`document[${index}]`, curr);
  });
  const response: AxiosResponse<{
    success: boolean;
    urls: string[];
  }> = await axios.post(`${baseURL}/upload/documents`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

//============== Career Apply ================
export const applyCareer = async ({ id, body }: { id: string; body: any }) => {
  const cv_response = await uploadDocument([body.cv]);
  const response = await axios.post(`${baseURL}/career/apply/${id}`, {
    ...body,
    cv_url: cv_response.urls[0],
  });
  return response.data;
};
