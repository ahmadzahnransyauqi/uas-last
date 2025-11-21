import Header from "../../component/header.jsx";
import heroImage from "../../assets/pria-hitamberotot-ini.webp";
import PeopleIcon from "../../assets/person-svgrepo-com.svg?react";
import CoachIcon from "../../assets/coach-svgrepo-com.svg?react";
import DanceIcon from "../../assets/Group.svg";
import CardioIcon from "../../assets/XMLID_8_.svg";
import StrengthIcon from "../../assets/dumbbell-svgrepo-com1.svg";
import TestimonialList from "../../component/testimonial-card.jsx";
import Footer from "../../component/footer.jsx";
import BodyAssesment from "../../assets/BodyAssesment.webp";
import GroupClasses from "../../assets/GroupClasses.webp";
import NutritionGuidance from "../../assets/NutritionGuidance.webp";
import PersonalTrainer from "../../assets/PersonalTrainer.webp";
import BellyDance from "../../assets/BellyDanceClass.webp";
import Boxing from "../../assets/BoxingClass.webp";
import Piloxing from "../../assets/PiloxingClass.webp";
import Zumba from "../../assets/ZumbaClass.webp";
import { Link } from "react-router-dom";
import FacilitiesSlider from "../../component/box-can-scroll.jsx";
import MembershipLayout from "../../component/membership-layout.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="w-[1250px] h-[500px] mx-auto bg-[#303030] mt-2.5 rounded-lg bg-i px-8 py-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          boxShadow: "0px 30px 45.9px 15px rgba(255, 43, 43, 0.25)",
        }}
      >
        <h1
          className="text-[50px] font-bold bg-linear-to-r from-[#ff0000] to-[#ffffff] bg-clip-text text-transparent w-200"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "6px 4px 8px rgba(0,0,0,0.35)",
          }}
        >
          Teach And Upgrade Your Body To It's Maximum Potential
        </h1>
        <Link
          to="/login"
          className="inline-block mt-6 font-semibold hover:bg-[#ff6161] bg-[#ff1f1f] text-white text-[24px] rounded-lg px-8  py-4"
        >
          Let's Start
        </Link>
        <h3
          className="mt-30 text-[30px] font-semibold text-white w-150"
          style={{ textShadow: "3px -2px 8px rgba(0,0,0,0.5)" }}
        >
          Upgrade your body, Increase <br />
          your stamina, and reach your prime era
        </h3>
      </div>
      <div className="w-[1250px] h-[130px] mx-auto pr-8 bg-[#ff1f1f] rounded-lg mt-15 flex justify-center items-center gap-50">
        <div className="flex items-center gap-5 text-white">
          <PeopleIcon className="w-auto h-30 mb-2 fill-white stroke-white" />
          <h1 className="text-[50px] font-bold">600+ Members</h1>
        </div>
        <div className="flex items-center gap-10 text-white">
          <CoachIcon className="w-auto h-23.5 mb-2 fill-white stroke-white" />
          <h1 className="text-[50px] font-bold">50+ Coaches</h1>
        </div>
      </div>
      <div>
        <h2 className="text-white text-[30px] font-bold text-center mt-20">
          Our Services
        </h2>
        <h3 className="text-white text-[20px] font-normal text-center">
          Fit for your need
        </h3>
      </div>
      <div className="flex justify-evenly items-end gap-6 mt-10">
        <div className="flex flex-col  items-center ">
          <div
            className="w-[250px] h-90 bg-[#ff1f1f] rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${PersonalTrainer})`,
              backgroundSize: "cover",
              backgroundPosition: "80% 20%",
            }}
          ></div>
          <p className="text-white mt-3 text-shadow-[0px_8px_6.5px_#ebebeb] text-[26px] text-lg font-semibold">
            Personal Training
          </p>
          <p className="text-white text-[18px]">
            Train with our professional trainer
          </p>
        </div>

        <div className="flex flex-col items-center translate-y-14">
          <div
            className="w-[250px] h-90 bg-[#ff1f1f] rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${GroupClasses})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p className="text-white mt-3 text-shadow-[0px_8px_6.5px_#ebebeb] text-[26px] text-lg font-semibold">
            Group Classes
          </p>
          <p className="text-white w-[280px] text-center text-[18px]">
            Take fun group classes like Zumba, Yoga, and HIIT
          </p>
        </div>

        <div className="flex flex-col items-center translate-y-0">
          <p className="text-white text-shadow-[0px_8px_6.5px_#ebebeb] mb-3 text-[26px] text-lg font-semibold">
            Nutrition Guidance
          </p>
          <p className="text-white mb-3 w-[280px] text-center text-[18px]">
            Nutrition advice for better training results and a healthier
            lifestyle
          </p>
          <div
            className="w-[250px] h-90 bg-[#ff1f1f] rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${NutritionGuidance})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="flex flex-col items-center translate-y-10">
          <p className="text-white text-shadow-[0px_8px_6.5px_#ebebeb] mb-3 text-[26px] text-lg font-semibold">
            Body Assesment
          </p>
          <p className="text-white mb-3 w-[280px] text-center text-[18px]">
            Regular body evaluation to track your fitness progress.
          </p>
          <div
            className="w-[250px] h-90 bg-[#ff1f1f] rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${BodyAssesment})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className="mt-30 flex flex-col justify-center">
        <div>
          <h2 className="text-white text-center text-[30px] font-bold">
            Unlimited Access to 100+ Classes
          </h2>
          <p className="text-white text-center text-[20px]">
            Designed just for you
          </p>
        </div>
        <div className="flex justify-evenly gap-6 mt-10">
          <div className="flex flex-col items-center">
            <div
              className="relative w-[250px] h-80 flex flex-col justify-end bg-[#ff1f1f] rounded-lg shadow-[inset_0_-100px_51.2px_6px_rgba(0,0,0,0.4)]"
              style={{
                backgroundImage: `url(${Zumba})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute top-2.5 right-2.5 w-[90px] h-10 bg-[#444444] rounded-lg
                flex flex-row items-center justify-center gap-1"
              >
                <span className="text-[#FF6666] font-bold text-[13px]">
                  Dance
                </span>
                <img src={DanceIcon} />
              </div>
              <p className="ml-3 mb-3 text-white text-[15px] font-semibold">
                Beginner - 60 min
              </p>
              <h2 className="ml-3 mb-8 text-shadow-[0px_5px_6.5px_#ebebeb] text-white text-[30px] font-bold">
                Zumba
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="relative w-[250px] h-80 flex flex-col justify-end bg-[#ff1f1f] rounded-lg shadow-[inset_0_-100px_51.2px_6px_rgba(0,0,0,0.4)]"
              style={{
                backgroundImage: `url(${BellyDance})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute top-2.5 right-2.5 w-[90px] h-10 bg-[#444444] rounded-lg
                flex flex-row items-center justify-center gap-1"
              >
                <span className="text-[#FF6666] font-bold text-[13px]">
                  Dance
                </span>
                <img src={DanceIcon} />
              </div>
              <p className="ml-3 mb-3 text-white text-[15px] font-semibold">
                Intermediate - 60 min
              </p>
              <h2 className="ml-3 mb-8 text-shadow-[0px_5px_6.5px_#ebebeb] text-white text-[30px] font-bold">
                Belly Dance
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="relative w-[250px] h-80 flex flex-col justify-end bg-[#ff1f1f] rounded-lg shadow-[inset_0_-100px_51.2px_6px_rgba(0,0,0,0.4)]"
              style={{
                backgroundImage: `url(${Piloxing})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute top-2.5 right-2.5 w-[90px] h-10 bg-[#444444] rounded-lg
                flex flex-row items-center justify-center gap-1"
              >
                <span className="text-[#7D6EFF] font-bold text-[13px]">
                  Cardio
                </span>
                <img src={CardioIcon} />
              </div>
              <p className="ml-3 mb-3 text-white text-[15px] font-semibold">
                Beginner - 60 min
              </p>
              <h2 className="ml-3 mb-8 text-shadow-[0px_5px_6.5px_#ebebeb] text-white text-[30px] font-bold">
                Piloxing
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="relative w-[250px] h-80 flex flex-col justify-end bg-[#ff1f1f] rounded-lg shadow-[inset_0_-100px_51.2px_6px_rgba(0,0,0,0.4)]"
              style={{
                backgroundImage: `url(${Boxing})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute top-2.5 right-2.5 w-[90px] h-10 bg-[#444444] rounded-lg
                flex flex-row items-center justify-center pl-2"
              >
                <span className="text-[#4EFF69] font-bold text-[13px]">
                  Strength
                </span>
                <img src={StrengthIcon} />
              </div>
              <p className="ml-3 mb-3 text-white text-[15px] font-semibold">
                Advanced - 60 min
              </p>
              <h2 className="ml-3 mb-8 text-shadow-[0px_5px_6.5px_#ebebeb] text-white text-[30px] font-bold">
                Boxing
              </h2>
            </div>
          </div>
        </div>
        <div className="m-10 self-center">
          <Link
            to="/class"
            className="hover:bg-[#ff6161] text-[20px] font-bold text-white w-max h-auto bg-[#ff1f1f] px-4 py-2 rounded"
          >
            View More Classes
          </Link>
        </div>
      </div>

      <FacilitiesSlider />

      <MembershipLayout
        title="Membership Plans"
        plans={[
          {
            name: "Basic",
            price: "Rp 150.000/month",
            bg: "#444444",
            highlight: false,
            benefits: [
              "Regular gym access",
              "1x trainer consultation",
              "Access to public lockers",
            ],
          },
          {
            name: "Premium",
            price: "Rp 300.000/month",
            bg: "#ff1f1f",
            highlight: true,
            benefits: [
              "Full gym access",
              "4x personal trainer sessions",
              "Access to group classes",
              "Private locker",
            ],
          },
          {
            name: "Elite",
            price: "Rp 500.000/month",
            bg: "#444444",
            highlight: false,
            benefits: [
              "24-hour access",
              "8x personal trainer sessions",
              "Monthly body assessment",
              "Free merchandise",
            ],
          },
        ]}
      />

      <div className="mt-20">
        <h2 className="text-[30px] text-white font-bold text-center">
          Member Testimonial
        </h2>
        <h3 className="text-[20px] text-white text-center">
          This is what YOU said about us!
        </h3>
        <TestimonialList />
      </div>
      <Footer />
    </>
  );
}
