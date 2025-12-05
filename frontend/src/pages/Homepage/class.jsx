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
  const classList = [
    // ...existing code...
    {
      name: "Dance",
      type: "Group Class",
      intensity: "Beginner",
      image: DanceClass,
    },
    {
      name: "Cardio Blast",
      type: "Cardio",
      intensity: "Intermediate",
      image: CardioClass,
    },
    {
      name: "Strength Power",
      type: "Strength Training",
      intensity: "Advanced",
      image: StrengthClass,
    },
    {
      name: "Mind & Body Flow",
      type: "Mind & Body",
      intensity: "Beginner",
      image: MindBodyClass,
    },
    {
      name: "Dance",
      type: "Group Class",
      intensity: "Beginner",
      image: DanceClass,
    },
    {
      name: "Cardio Blast",
      type: "Cardio",
      intensity: "Intermediate",
      image: CardioClass,
    },
    {
      name: "Strength Power",
      type: "Strength Training",
      intensity: "Advanced",
      image: StrengthClass,
    },
    {
      name: "Mind & Body Flow",
      type: "Mind & Body",
      intensity: "Beginner",
      image: MindBodyClass,
    },
    {
      name: "Dance",
      type: "Group Class",
      intensity: "Beginner",
      image: DanceClass,
    },
    {
      name: "Cardio Blast",
      type: "Cardio",
      intensity: "Intermediate",
      image: CardioClass,
    },
    {
      name: "Strength Power",
      type: "Strength Training",
      intensity: "Advanced",
      image: StrengthClass,
    },
    {
      name: "Mind & Body Flow",
      type: "Mind & Body",
      intensity: "Beginner",
      image: MindBodyClass,
    },
    {
      name: "Dance",
      type: "Group Class",
      intensity: "Beginner",
      image: DanceClass,
    },
    {
      name: "Cardio Blast",
      type: "Cardio",
      intensity: "Intermediate",
      image: CardioClass,
    },
    {
      name: "Strength Power",
      type: "Strength Training",
      intensity: "Advanced",
      image: StrengthClass,
    },
    {
      name: "Mind & Body Flow",
      type: "Mind & Body",
      intensity: "Beginner",
      image: MindBodyClass,
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <div
        className="max-w-7xl mx-auto w-full rounded-lg overflow-hidden mt-4"
        style={{
          backgroundImage: `url(${Boxing})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0px 30px 45.9px 15px rgba(255, 43, 43, 0.25)",
        }}
      >
        <div className="bg-black/40 w-full h-48 md:h-64 lg:h-96 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">
            Class
          </h1>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        <h2 className="font-bold text-white text-2xl md:text-3xl text-center mb-6">
          Enjoy Your Favorite Class
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="relative rounded-lg overflow-hidden h-40 md:h-56 flex items-end p-3"
            style={{
              backgroundImage: `url(${DanceClass})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-liniear-to-t from-black/60 to-transparent"></div>
            <p className="relative text-[#FF6666] font-bold text-xl md:text-2xl z-10">
              Dance
            </p>
            <img
              src={DanceIcon}
              alt="Dance icon"
              className="w-10 md:w-14 h-auto ml-auto z-10"
            />
          </div>

          <div
            className="relative rounded-lg overflow-hidden h-40 md:h-56 flex items-end p-3"
            style={{
              backgroundImage: `url(${CardioClass})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-liniear-to-t from-black/60 to-transparent"></div>
            <p className="relative text-[#7D6EFF] font-bold text-xl md:text-2xl z-10">
              Cardio
            </p>
            <img
              src={CardioIcon}
              alt="Cardio icon"
              className="w-10 md:w-14 h-auto ml-auto z-10"
            />
          </div>

          <div
            className="relative rounded-lg overflow-hidden h-40 md:h-56 flex items-end p-3"
            style={{
              backgroundImage: `url(${StrengthClass})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-liniear-to-t from-black/60 to-transparent"></div>
            <p className="relative text-[#4EFF69] font-bold text-xl md:text-2xl z-10">
              Strength
            </p>
            <img
              src={StrengthIcon}
              alt="Strength icon"
              className="w-10 md:w-14 h-auto ml-auto z-10"
            />
          </div>

          <div
            className="relative rounded-lg overflow-hidden h-40 md:h-56 flex items-end p-3"
            style={{
              backgroundImage: `url(${MindBodyClass})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-liniear-to-t from-black/60 to-transparent"></div>
            <p className="relative text-[#FFF04E] font-bold text-xl md:text-2xl z-10">
              Mind & Body
            </p>
            <img
              src={MindBodyIcon}
              alt="Mind and body icon"
              className="w-10 md:w-14 h-auto ml-auto z-10"
            />
          </div>
        </div>
      </div>

      {/* Explore All Classes */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        <h2 className="font-bold text-white text-2xl md:text-3xl text-center mt-8 mb-6">
          Explore All Classes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {classList.map((cls, index) => (
            <div
              key={index}
              className="
            relative 
            rounded-xl 
            overflow-hidden 
            h-64 sm:h-72 lg:h-80   /* Increased height for visual impact */
            flex 
            items-end 
            p-4 
            shadow-2xl 
            transform 
            transition 
            duration-300 
            hover:scale-[1.02] 
            hover:shadow-red-800/50 
            cursor-pointer
          "
              style={{
                backgroundImage: `url(${cls.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label={`View details for ${cls.name}`}
            >
              {/* === 1. Gradient Overlay for Readability === */}
              <div className="absolute inset-0 bg-liniear-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* === 2. Intensity Tag (Top Right) === */}
              <div className="absolute top-4 right-4 z-20">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider shadow-md ${
                    cls.intensity === "Beginner"
                      ? "bg-green-600"
                      : cls.intensity === "Intermediate"
                      ? "bg-yellow-500"
                      : "bg-red-600"
                  }`}
                >
                  {cls.intensity}
                </span>
              </div>

              {/* === 3. Class Content (Bottom) === */}
              <div className="relative z-10 w-full flex flex-col gap-1">
                <p className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                  {cls.name}
                </p>
                <p className="text-sm md:text-base text-gray-300 uppercase tracking-wide">
                  {cls.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
