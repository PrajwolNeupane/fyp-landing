import { getAllCareer } from "@/feature/service";
import HomeContainer from "./component/home-container";
import JobsContainer from "./component/jobs-container";

export default async function Page({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
  try {
    const data = await getAllCareer({ search: search });
    if (search) {
      return <JobsContainer careers={data?.data?.careers} search={search} />;
    } else {
      return <HomeContainer careers={data?.data?.careers} />;
    }
  } catch (e) {
    return <div>A</div>;
  }
}
