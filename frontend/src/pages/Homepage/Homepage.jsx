import Header from "../../component/header.jsx";
import heroImage from "../../assets/pria-hitamberotot-ini.webp";
import PeopleIcon from "../../assets/person-svgrepo-com.svg?react";
import CoachIcon from "../../assets/coach-svgrepo-com.svg?react";
import DanceIcon from "../../assets/Group.svg";
import CardioIcon from "../../assets/XMLID_8_.svg";
import StrengthIcon from "../../assets/dumbbell-svgrepo-com1.svg";
import TestimonialCard from "../../component/testimonial-card.jsx";
import Footer from "../../component/footer.jsx";

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
        <a
          href="#"
          className="inline-block mt-6 font-semibold bg-[#ff1f1f] text-white text-[24px] rounded-lg px-8  py-4"
        >
          Let's Start
        </a>
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
          <div className="w-[250px] h-90 bg-[#ff1f1f] rounded-lg shadow-lg"></div>
          <p className="text-white mt-3 text-shadow-[0px_8px_6.5px_#ebebeb] text-[26px] text-lg font-semibold">
            Personal Training
          </p>
          <p className="text-white text-[18px]">
            Train with our professional trainer
          </p>
        </div>

        <div className="flex flex-col items-center translate-y-14">
          <div className="w-[250px] h-90 bg-[#ff1f1f] rounded-lg shadow-lg"></div>
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
          <div className="w-[250px] h-90  bg-[#ff1f1f] rounded-lg shadow-lg"></div>
        </div>

        <div className="flex flex-col items-center translate-y-10">
          <p className="text-white text-shadow-[0px_8px_6.5px_#ebebeb] mb-3 text-[26px] text-lg font-semibold">
            Body Assesment
          </p>
          <p className="text-white mb-3 w-[280px] text-center text-[18px]">
            Regular body evaluation to track your fitness progress.
          </p>
          <div className="w-[250px] h-90 bg-[#ff1f1f] rounded-lg shadow-lg"></div>
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
            <div className="relative w-[250px] h-80 flex flex-col justify-end bg-[#ff1f1f] rounded-lg shadow-lg">
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
            <div className="relative w-[250px] h-80 flex flex-col justify-end bg-[#ff1f1f] rounded-lg shadow-lg">
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
            <div className="relative w-[250px] h-80 flex flex-col justify-end bg-[#ff1f1f] rounded-lg shadow-lg">
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
                Zumba
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-[250px] h-80 flex flex-col justify-end bg-[#ff1f1f] rounded-lg shadow-lg">
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
                Beginner - 60 min
              </p>
              <h2 className="ml-3 mb-8 text-shadow-[0px_5px_6.5px_#ebebeb] text-white text-[30px] font-bold">
                Zumba
              </h2>
            </div>
          </div>
        </div>
        <div className="m-10 self-center">
          <a
            href="#"
            className="text-[20px] font-bold text-white w-max h-auto bg-[#ff1f1f] px-4 py-2 rounded"
          >
            View More Classes
          </a>
        </div>
      </div>

      <div>
        <h2 className="mt-8 text-white text-center text-[30px] font-bold z-5">
          Enjoy Our Top Facilities
        </h2>
        <div
          className=" relative m-0 mb-20 mt-5 w-screen h-[528px] ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] bg-[#444444] pt-8"
          style={{ boxShadow: "0px -10px 80.9px 35px rgba(255, 43, 43, 0.25)" }}
        >
          <h2 className="text-white text-[50px] text-shadow-[6px_4px_4px_#000000] font-bold ml-10">
            Gym Room
          </h2>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-50 h-4 mb-2 rounded-lg">
            <div className="bg-[#FF6161] w-10 h-full rounded-lg"></div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mt-8 text-white text-center text-[30px] font-bold z-5">
          Membership Plans
        </h2>
        <div className="flex text-white justify-center gap-20 mt-8">
          <div
            className="p-8 w-[280px] h-[450px] bg-[#444444] rounded-lg 
                  translate-y-8 hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <h2 className="text-center font-bold text-2xl">Basic</h2>
            <h3 className="text-center text-[20px] mb-5">Rp 150.000/month</h3>

            <div className="space-y-3">
              <p className="flex items-center text-[18px]">
                <span className="text-red-500 font-black text-xl mr-2">
                  &#10003;
                </span>
                Regular gym access
              </p>

              <p className="flex items-center text-[18px]">
                <span className="text-red-500 font-black text-xl mr-2">
                  &#10003;
                </span>
                1x trainer consultation
              </p>

              <p className="flex items-center text-[18px]">
                <span className="text-red-500 font-black text-xl mr-2">
                  &#10003;
                </span>
                Access to public lockers
              </p>
            </div>
          </div>

          <div
            className="p-8 w-[280px] h-[450px] bg-[#ff1f1f] rounded-lg shadow-xl 
                  hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <h3 className="text-yellow-400 text-[25px] font-black text-center">
              BEST DEAL!
            </h3>
            <h2 className="text-center font-bold text-2xl">Premium</h2>
            <h3 className="text-center text-[20px] mb-5">Rp 300.000/month</h3>

            <div className="space-y-3">
              <p className="flex items-center text-[18px]">
                <span className="text-[#444444] font-black text-xl mr-2">
                  &#10003;
                </span>
                Full gym access
              </p>

              <p className="flex items-center text-[18px]">
                <span className="text-[#444444] font-black text-xl mr-2">
                  &#10003;
                </span>
                4x personal trainer sessions
              </p>

              <p className="flex items-center text-[18px]">
                <span className="text-[#444444] font-black text-xl mr-2">
                  &#10003;
                </span>
                Access to group classes
              </p>

              <p className="flex items-center text-[18px]">
                <span className="text-[#444444] font-black text-xl mr-2">
                  &#10003;
                </span>
                Private locker
              </p>
            </div>
          </div>
          <div
            className="p-8 w-[280px] h-[450px] bg-[#444444] rounded-lg 
                  translate-y-8 hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <h2 className="text-center font-bold text-2xl">Elite</h2>
            <h3 className="text-center text-[20px] mb-5">Rp 500.000/month</h3>

            <div className="space-y-3">
              <p className="flex items-center text-[18px]">
                <span className="text-red-500 font-black text-xl mr-2">
                  &#10003;
                </span>
                24-hour access
              </p>

              <p className="flex items-center text-[18px]">
                <span className="text-red-500 font-black text-xl mr-2">
                  &#10003;
                </span>
                8x personal trainer sessions
              </p>

              <p className="flex items-center text-[18px]">
                <span className="text-red-500 font-black text-xl mr-2">
                  &#10003;
                </span>
                Monthly body assessment
              </p>

              <p className="flex items-center text-[18px]">
                <span className="text-red-500 font-black text-xl mr-2">
                  &#10003;
                </span>
                Free merchandise
              </p>
            </div>
          </div>
        </div>
        <div className="mt-18 justify-self-center">
          <a
            href="#"
            className="text-[20px] font-bold text-white w-max h-auto bg-[#ff1f1f] px-4 py-2 rounded"
          >
            View More Prices
          </a>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-[30px] text-white font-bold text-center">
          Member Testimonial
        </h2>
        <h3 className="text-[20px] text-white text-center">
          This is what YOU said about us!
        </h3>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 p-5 scrollbar-hide">
          <TestimonialCard
            nama="Alya Putri"
            kerja="Graphic Designer"
            bintang={4}
            komentar="Tempatnya bersih dan nyaman. Kelas grupnya seru, recommended!"
            link="https://i.pravatar.cc/150?img=12"
          />
          <TestimonialCard
            nama="Dimas Rinaldi"
            kerja="Atlet Fitness"
            bintang={5}
            komentar="Fasilitas premium dan trainernya profesional. Gym terbaik!"
            link="https://i.pravatar.cc/150?img=45"
          />
          <TestimonialCard
            nama="Clara A."
            kerja="Content Creator"
            bintang={5}
            komentar="Staff ramah dan suasananya cozy banget!"
            link="https://i.pravatar.cc/150?img=22"
          />
          <TestimonialCard
            nama="Rudi Hartono"
            kerja="Karyawan Swasta"
            bintang={4}
            komentar="Suka banget sama kelas Zumba-nya. Seru abis!"
            link="https://i.pravatar.cc/150?img=17"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
