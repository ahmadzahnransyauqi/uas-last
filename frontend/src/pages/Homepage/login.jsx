import Footer from "../../component/footer";
import Header from "../../component/header";
import InputField from "../../component/input-slot";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Header />
      
      {/* Form Container */}
      <div 
        className="
          mx-auto 
          mt-16 md:mt-24         /* Increased margin top for better vertical centering */
          max-w-xs sm:max-w-md   /* Set maximum width for large screens */
          w-full                 /* Takes full width on mobile */
          p-6 md:p-10            /* Responsive padding */
          bg-[#444444] 
          text-white 
          rounded-xl 
          shadow-2xl 
          mb-20                  /* Margin bottom to push footer down */
        "
      >
        
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center mb-1">Login</h2>
        <h3 className="text-sm text-center mb-6 text-gray-300">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#ff1f1f] hover:text-[#ff6161] font-semibold transition-colors">
            Sign Up
          </Link>
        </h3>
        
        {/* Input Fields */}
        <form className="space-y-6">
          <InputField label="Name" type="text" placeholder="Enter your name" />
          
          <InputField
            label="Password"
            type="password" /* Corrected typo: "Password" to "password" */
            placeholder="Enter your Password"
          />
          
          {/* Options: Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <input
                className="mr-2 h-4 w-4 text-[#ff1f1f] border-gray-300 rounded focus:ring-[#ff1f1f] cursor-pointer"
                type="checkbox"
                id="dontforget"
              />
              <label htmlFor="dontforget">Remember Me</label>
            </div>
            
            <Link to="/forgotpassword" className="hover:text-[#ff6161] text-[#ff1f1f] transition-colors font-medium text-xs sm:text-sm">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="
                w-full 
                text-lg 
                font-bold 
                text-white 
                bg-[#ff1f1f] 
                hover:bg-[#d41b1b] 
                py-3 
                rounded-lg 
                shadow-md 
                transition-colors
              "
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      
      <Footer />
    </>
  );
}