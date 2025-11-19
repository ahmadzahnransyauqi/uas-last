import Footer from "../../component/footer";
import Header from "../../component/header";
import InputField from "../../component/input-slot";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Header />
      <div className="p-8 w-screen h-150 mt-8 mb-10 flex gap-5 flex-row bg-[#444444]">
        <div className="w-[50%] h-full bg-[#ff1f1f] rounded-lg"></div>
        <div className="w-[45%]">
          <h2 className="text-white text-[30px] font-bold ">
            Create Your Account
          </h2>
          <h3 className="text-white mb-5">
            Already have an account?{" "}
            <span>
              <Link to="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </span>
          </h3>
          <InputField label="Name" type="text" placeholder="Enter your name" />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <InputField
            label="Name"
            type="password"
            placeholder="Confirm your password"
          />
          <InputField
            label="email"
            type="email"
            placeholder="Enter your email"
          />
          <div>
            <input
              className="mr-2 ml-2 scale-150 cursor-pointer"
              type="checkbox"
              id="dontforget"
            />
            <label className="text-white" htmlFor="dontforget">
              I Accept the{" "}
              <Link className="text-blue-500 hover:underline" to="/termscondition">
                Terms & Conditions
              </Link>
            </label>
          </div>
          <button
            type="button"
            className="cursor-pointer mx-auto block mt-5 text-[20px] font-bold text-white w-max h-auto bg-[#ff1f1f] px-4 py-2 rounded"
          >
            Create Account
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
