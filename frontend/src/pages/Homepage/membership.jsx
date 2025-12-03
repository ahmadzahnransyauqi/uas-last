import Footer from "../../component/homepage/footer";
import Header from "../../component/homepage/header";
import MembershipLayout from "../../component/homepage/membership-layout";

export default function Membership() {
  // Define plan data outside of the return for cleaner rendering
  const weeklyPlans = [
    {
      name: "Basic",
      price: "Rp 50.000/week",
      bg: "#444444",
      highlight: false,
      benefits: [
        "Gym access (regular hours)",
        "Free water refill",
        "Locker room access",
      ],
    },
    {
      name: "Premium",
      price: "Rp 90.000/week",
      bg: "#ff1f1f",
      highlight: true,
      benefits: [
        "Full gym access (all equipment)",
        "1x trainer guidance",
        "Access to group classes",
        "Free towel service",
      ],
    },
    {
      name: "Elite",
      price: "Rp 130.000/week",
      bg: "#444444",
      highlight: false,
      benefits: [
        "Full 24-hour access",
        "2x personal trainer sessions",
        "Unlimited group classes",
        "VIP changing room",
        "Free protein drink (1x)",
      ],
    },
  ];

  const monthlyPlans = [
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
  ];

  const yearlyPlans = [
    {
      name: "Basic",
      price: "Rp 1.200.000/year",
      bg: "#444444",
      highlight: false,
      benefits: [
        "12-month gym access",
        "2x trainer consultations",
        "Access to lockers",
        "Free gym T-shirt",
      ],
    },
    {
      name: "Premium",
      price: "Rp 2.400.000/year",
      bg: "#ff1f1f",
      highlight: true,
      benefits: [
        "Full gym access for 12 months",
        "12x personal trainer sessions",
        "Unlimited group classes",
        "Private locker",
        "1x body composition check",
      ],
    },
    {
      name: "Elite",
      price: "Rp 3.500.000/year",
      bg: "#444444",
      highlight: false,
      benefits: [
        "24-hour unlimited access",
        "24x personal trainer sessions",
        "Free body composition check every month",
        "Priority booking for classes",
      ],
    },
  ];

  return (
    <>
      <Header />
      <h2 className="text-white font-bold text-4xl md:text-[50px] text-center mt-12 mb-8">
        Membership
      </h2>

      {/* Weekly Plans */}
      <MembershipLayout title="Weekly Plans" plans={weeklyPlans} />

      {/* Separator height increased for mobile and desktop consistency */}
      <div className="w-full h-16 md:h-20"></div>

      {/* Monthly Plans */}
      <MembershipLayout title="Monthly Plans" plans={monthlyPlans} />

      {/* Separator height increased for mobile and desktop consistency */}
      <div className="w-full h-16 md:h-20"></div>

      {/* Yearly Plans */}
      <MembershipLayout title="Yearly Plans" plans={yearlyPlans} />

      <div className="w-full h-12"></div>
      <Footer />
    </>
  );
}
