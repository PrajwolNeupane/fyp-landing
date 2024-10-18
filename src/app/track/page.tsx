import NavBar from "@/components/nav-bar";
import TrackingPage from "@/assets/image/arabsstock_P131298-transformed.jpeg";
import TrackFrom from "./component/track-form";

export default function Page() {
  return (
    <div
      className="w-full h-[75vh]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(27, 48, 125, 1),rgba(37, 59, 144, 0.8), rgba(27, 48, 125, 1)), url('${TrackingPage.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <NavBar />
      <div className="flex flex-col px-40 items-center pt-28 gap-3">
        <h2 className="text-white text-[50px] font-semibold">
          Track your order
        </h2>
        <p className="text-center text-gray-200 w-2/3">
          Enter your Order Tracking Number and Order Tracking Code below to
          check the current status of your delivery. Keep up-to-date with
          real-time information on your shipment's location and progress.
        </p>
        <TrackFrom />
        <p className="text-center text-white w-2/3 mt-5">
          You will receive the Tracking Number and Code via the email you
          provided during the order process.
        </p>
      </div>
    </div>
  );
}
