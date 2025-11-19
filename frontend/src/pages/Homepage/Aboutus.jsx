import Footer from "../../component/footer";
import Header from "../../component/header";
import GymImage from "../../assets/ruanganGym.webp";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div
        className="w-[1250px] h-[400px] mx-auto bg-[#303030] mt-2.5 rounded-lg bg-i px-8 py-5"
        style={{
          backgroundImage: `url(${GymImage})`,
          backgroundSize: "cover",
          boxShadow: "0px 30px 45.9px 15px rgba(255, 43, 43, 0.25)",
        }}
      >
        <h1 className="text-[50px] text-white font-bold text-center">
          About Us
        </h1>
      </div>
      <div className="flex flex-row bg-[#ff1f1f] mt-20 h-150 w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] text-white">
        <div className="bg-[#444444] w-[40%] h-auto m-8"></div>
        <div className="p-8 w-[60%]">
          <h2 className="font-bold text-[30px]">Know Our Story</h2>
          <h3 className="mr-5 mt-8 text-[20px]">
            Roger Sumatera Gym was inspired by the iconic{" "}
            <strong>Roger Sumatera meme</strong> — a strong werewolf sitting
            calmly beneath a tree, <strong>powerful yet peaceful</strong>. That
            image became more than just a joke; it represented a balance of
            <strong>strength</strong>, <strong>discipline</strong>, and{" "}
            <strong>composure</strong>. Our leader saw something meaningful in
            that symbolism and decided to honor its character through a gym that
            carries the same spirit. He envisioned a place where anyone could
            build their own version of that
            <strong>strength</strong> — not just physically, but mentally and
            emotionally. A gym where people <strong>train hard</strong>, stay
            grounded, and grow at their own pace. Roger Sumatera Gym exists to
            embody that philosophy: <strong>strong yet calm</strong>,
            <strong>focused yet relaxed</strong>, and always dedicated to
            <strong>becoming better every day</strong>.
          </h3>
        </div>
      </div>
      <div className="text-white text-center mt-15">
        <q className="text-[30px] font-bold">
          Over 100+ Reach Their Dream Body Every Year
        </q>
        <h3 className="text-[20px] italic">
          With our help, you can do it too!
        </h3>
      </div>
      <div className="p-8 mt-8 flex flex-col gap-5">
        <div className="flex flex-row gap-10">
          <div className="bg-[#ff1f1f] w-48 h-70 rounded-lg"></div>
          <div className="w-200">
            <h2 className="text-[25px] text-white font-bold">Our Vision</h2>
            <h3 className="text-[20px] text-white">
              To become the leading fitness community in Sumatra that represents
              true balanced strength — powerful in body, calm in mind —
              inspiring people to grow, stay disciplined, and become the
              strongest version of themselves.
            </h3>
          </div>
        </div>
        <div className="flex justify-end flex-row gap-10 m-0">
          <div className="w-200 text-right flex-col">
            <h2 className="text-[25px] text-white font-bold">Our Mission</h2>
            <h3 className="text-[20px] text-right text-white">
              To become the leading fitness community in Sumatra that represents
              true balanced strength — powerful in body, calm in mind —
              inspiring people to grow, stay disciplined, and become the
              strongest version of themselves.
            </h3>
          </div>
          <div className="bg-[#ff1f1f] w-48 h-70 rounded-lg"></div>
        </div>
      </div>
      <div className="mb-50">
        <h2 className="font-bold text-white text-[30px] text-center mt-12">
          Know Our Founder
        </h2>
        <div className="flex flex-row p-10 mt-8 justify-between">
          <div>
            <div className="bg-[#ff1f1f] w-48 h-70 rounded-lg mb-5 justify-self-center"></div>
            <p className="text-white text-[20px] font-bold text-center">Achmad Caesar Ramadhan</p>
            <p className="text-white text-center">Front-End Dev & Founder</p>
          </div>
          <div className="translate-y-20">
            <div className="bg-[rgb(255,31,31)] w-48 h-70 rounded-lg mb-5 justify-self-center"></div>
            <p className="text-white text-[20px] font-bold text-center">MHD. Hafiz</p>
            <p className="text-white text-center">Back-End Dev & CFO</p>
          </div>
          <div>
            <div className="bg-[#ff1f1f] w-48 h-70 rounded-lg mb-5 justify-self-center"></div>
            <p className="text-white text-[20px] font-bold text-center">Ahmad Zahran Syauqi</p>
            <p className="text-white text-center">Database Dev & Founder</p>
          </div>
          <div className="translate-y-20">
            <div className="bg-[#ff1f1f] w-48 h-70 rounded-lg mb-5 justify-self-center"></div>
            <p className="text-white text-[20px] font-bold text-center">Muaz Alfattah Fadhani</p>
            <p className="text-white text-center">Front-End Dev & CTO</p>
          </div>
          <div>
            <div className="bg-[#ff1f1f] w-48 h-70 rounded-lg mb-5 justify-self-center"></div>
            <p className="text-white text-[20px] font-bold text-center">Muhammad Aryadefa</p>
            <p className="text-white text-center">Back-End Dev & Founder</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
