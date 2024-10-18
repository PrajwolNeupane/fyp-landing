import NavBar from "@/components/nav-bar";
import RegistrationImage from "@/assets/image/registration_image.jpeg";
import RegisterForm from "./component/register-form";

export default function Page() {
  return (
    <>
      <div
        className="w-full h-[75vh]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(27, 48, 125, 1),rgba(37, 59, 144, 0.8), rgba(27, 48, 125, 1)), url(${RegistrationImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavBar />
        <div className="flex flex-col px-40 items-center pt-28 gap-3">
          <h2 className="text-white text-[50px] font-semibold">
            Register Your Organization
          </h2>
          <p className="text-center text-gray-200 w-2/3">
            Register your organization today and streamline your HR operations
            with Talent Plus HRMS. Experience efficient, tailored solutions for
            managing recruitment, employee attendance, and performance
            tracking—all in one platform. Whether you're handling employee
            records or automating workflows, our comprehensive HR system ensures
            your processes run smoothly. Enjoy real-time insights, role-based
            access, and simplified administration. Sign up now to unlock full
            access to our intuitive platform, where you can manage all HR
            functions seamlessly and focus on growing your organization.
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 px-32 py-10 gap-2">
        <h2 className="font-semibold text-2xl text-secondary">
          Registration Form
        </h2>
        <h4 className="text-xs text-gray-600">
          Join Talent Plus HRMS today for seamless HR management across your
          organization. Register your account to get started!
        </h4>
        <RegisterForm />
      </div>
    </>
  );
}
