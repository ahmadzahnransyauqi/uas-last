import Footer from "../../component/footer";
import Header from "../../component/header";
import InputField from "../../component/input-slot";
import { Link } from "react-router-dom";
import BeratCok from "../../assets/Berat_cok.webp";

export default function Register() {
  return (
    <>
      <Header />

      {/* Main Content Wrapper (Container for Image and Form) */}
      <div
        className="
          mx-auto 
          max-w-7xl                  /* Limits overall width on huge screens */
          p-4 md:p-8                 /* Responsive Padding */
          mt-8 mb-10 
          flex 
          flex-col md:flex-row       /* Stacks vertically on mobile, switches to horizontal on medium screens */
          gap-8 md:gap-10 
          bg-[#444444] 
          rounded-xl 
          shadow-2xl
        "
      >
        {/* === 1. Image Column (Hidden on Small Screens) === */}
        <div
          className="
            hidden md:block 
            w-full md:w-1/2 
            h-96 lg:h-[600px]        /* Responsive height for visual impact */
            bg-cover bg-center 
            rounded-lg
            shadow-xl
          "
          style={{ backgroundImage: `url(${BeratCok})` }}
          aria-hidden="true"
        ></div>

        {/* === 2. Form Column === */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-3xl font-extrabold mb-1">Create Your Account</h2>
          <h3 className="text-sm mb-6 text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#ff1f1f] hover:text-[#ff6161] font-semibold transition-colors"
            >
              Log In
            </Link>
          </h3>

          <form className="space-y-4">
            {/* Input Fields */}
            <InputField
              label="Name"
              type="text"
              placeholder="Enter your name"
            />

            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            {/* NOTE: Changed "Name" label to "Confirm Password" as intended logic */}
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
            />

            {/* Terms and Conditions Checkbox */}
            <div className="pt-2">
              <input
                className="mr-2 h-4 w-4 text-[#ff1f1f] border-gray-300 rounded focus:ring-[#ff1f1f] cursor-pointer"
                type="checkbox"
                id="terms"
                required
              />
              <label className="text-sm text-gray-300" htmlFor="terms">
                I Accept the{" "}
                <Link
                  className="text-[#ff1f1f] hover:text-[#ff6161] hover:underline"
                  to="/termscondition"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="
                  w-full sm:w-auto                  /* Full width on small screens, auto on large */
                  text-lg 
                  font-bold 
                  text-white 
                  bg-[#ff1f1f] 
                  hover:bg-[#d41b1b] 
                  px-6 py-3 
                  rounded-lg 
                  shadow-md 
                  transition-colors 
                  block 
                  mx-auto sm:mx-0
                "
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
