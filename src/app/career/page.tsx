import { GetAllCareerResponse } from "@/types";
import axios, { AxiosResponse } from "axios";
import HomeContainer from "./component/home-container";
import JobsContainer from "./component/jobs-container";

export default async function Page({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
  try {
    const response: AxiosResponse<GetAllCareerResponse> = await axios.get(
      `http://localhost:5000/career/all?limit=50?&search=${search}`
    );
    if (search) {
      return <JobsContainer careers={response?.data?.data?.careers} search={search}/>;
    } else {
      return <HomeContainer careers={response?.data?.data?.careers} />;
    }
  } catch (e) {
    return <div>A</div>;
  }
}
