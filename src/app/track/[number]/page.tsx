import NavBar from "@/components/nav-bar";

export default function Page({
  params: { number },
}: {
  params: { number: string };
}) {
  return (
    <>
      <div className="bg-secondary">
        <NavBar />
      </div>
      <div className="flex flex-col gap-4 px-32 py-10">
        <h3 className="text-orange-500 text-3xl font-semibold">Track</h3>
        <div className="w-1/2 grid grid-cols-2">
          <p>Tracking ID :</p>
          <p>{number}</p>
          <p>Sender :</p>
          <p>{number}</p>
        </div>
        <div></div>
      </div>
    </>
  );
}
