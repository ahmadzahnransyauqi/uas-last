import Footer from "../../component/footer";
import Header from "../../component/header";
import InputField from "../../component/input-slot";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Header />
      <div className="justify-self-center mt-8 flex flex-col pt-2 px-5 w-120 h=auto bg-[#444444] text-white rounded-lg">
        <h2 className="text-[30px] font-bold text-center">Login</h2>
        <h3 className="text-center">
          Don't have an account?{" "}
          <span>
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </span>
        </h3>
        <div className="mt-5">
          <InputField label="Name" type="text" placeholder="Enter your name" />
        </div>
        <div className="mt-5">
          <InputField
            label="Password"
            type="Password"
            placeholder="Enter your Password"
          />
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <input
              className="mr-2 ml-2 scale-150"
              type="checkbox"
              id="dontforget"
            />
            <label htmlFor="dontforget">Don't Forget Me</label>
          </div>
          <a href="#" className="hover:underline text-blue-500">
            Forgot Password
          </a>
        </div>
        <div className="m-10 self-center">
          <a
            href="#"
            className="text-[20px] font-bold text-white w-max h-auto bg-[#ff1f1f] px-4 py-2 rounded"
          >
            Login
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
