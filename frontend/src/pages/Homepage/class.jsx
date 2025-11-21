import Footer from "../../component/footer";
import Header from "../../component/header";
import Boxing from "../../assets/BoxingClass.webp";
import DanceIcon from "../../assets/Group.svg";
import CardioIcon from "../../assets/XMLID_8_.svg";
import StrengthIcon from "../../assets/dumbbell-svgrepo-com1.svg";
import MindBodyIcon from "../../assets/brain-8-svgrepo-com 1.svg";
import DanceClass from "../../assets/DanceClass.webp";
import CardioClass from "../../assets/CardioClass.webp";
import StrengthClass from "../../assets/StrengthClass.webp";
import MindBodyClass from "../../assets/MindBodyClass.webp";
import Loading from "../../component/loading";

export default function Class() {
  return (
    <>
      <Header />
      <div
        className="w-[1250px] h-[400px] mx-auto bg-[#303030] mt-2.5 rounded-lg bg-i px-8 py-5"
        style={{
          backgroundImage: `url(${Boxing})`,
          backgroundSize: "cover",
          boxShadow: "0px 30px 45.9px 15px rgba(255, 43, 43, 0.25)",
        }}
      >
        <h1 className="text-[50px] text-white font-bold text-center">Class</h1>
      </div>
      <div className="mt-12 mx-8">
        <h2 className="font-bold text-white text-[30px] text-center mb-8">
          Enjoy Your Favorite Class
        </h2>
        <div className="flex flex-row justify-evenly gap-3">
          <div
            className="shadow-[inset_0_-100px_51.2px_6px_rgba(0,0,0,0.4)] flex items-end pl-3 pb-3 pr-5 w-70 h-60 bg-[#ff1f1f] rounded-lg justify-between"
            style={{
              backgroundImage: `url(${DanceClass})`,
              backgroundSize: "cover",
            }}
          >
            <p className="text-[#FF6666] font-bold text-[35px]">Dance</p>
            <img src={DanceIcon} alt="" className="w-[60px] h-auto" />
          </div>
          <div
            className="flex items-end pl-3 pb-3 pr-5 w-70 h-60 bg-[#ff1f1f] rounded-lg justify-between shadow-[inset_0_-100px_51.2px_6px_rgba(0,0,0,0.4)]"
            style={{
              backgroundImage: `url(${CardioClass})`,
              backgroundSize: "cover",
            }}
          >
            <p className="text-[#7D6EFF] font-bold text-[35px]">Cardio</p>
            <img src={CardioIcon} alt="" className="w-[60px] h-auto" />
          </div>
          <div
            className="flex items-end pl-3 pb-3 pr-5 w-70 h-60 bg-[#ff1f1f] rounded-lg justify-between shadow-[inset_0_-100px_51.2px_6px_rgba(0,0,0,0.4)]"
            style={{
              backgroundImage: `url(${StrengthClass})`,
              backgroundSize: "cover",
            }}
          >
            <p className="text-[#4EFF69] font-bold text-[35px]">Strength</p>
            <img src={StrengthIcon} alt="" className="w-[60px] h-auto" />
          </div>
          <div
            className="flex items-end pl-3 pb-3 pr-5 w-70 h-60 bg-[#ff1f1f] rounded-lg justify-between shadow-[inset_0_-100px_51.2px_6px_rgba(0,0,0,0.4)]"
            style={{
              backgroundImage: `url(${MindBodyClass})`,
              backgroundSize: "cover",
            }}
          >
            <p className="text-[#FFF04E] font-bold text-[35px]">Mind & Body</p>
            <img src={MindBodyIcon} alt="" className="w-[60px] h-auto" />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-white text-[30px] text-center mt-12 mb-6">Explorer All Classes</h2>

      <Loading />
      <div>
        <p className="text-white text-center mt-30 mb-100">No Class Yet, Developer Don't Know whether to pull it from database or just hardcode it here</p>
      </div>
      <Footer />
    </>
  );
}
