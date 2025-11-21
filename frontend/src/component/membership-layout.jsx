import { Link } from "react-router-dom";

export default function MembershipLayout({ title, plans }) {
  return (
    <Link to="/login">
    <div>
      <h2 className="mt-8 text-white text-center text-[30px] font-bold z-5">
        {title}
      </h2>

      <div className="flex text-white justify-center gap-20 mt-8 flex-wrap">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`
              p-8 w-[280px] h-[450px] rounded-lg transition-all duration-300 ease-out
              ${plan.highlight ? "shadow-xl hover:-translate-y-1" : "translate-y-8 hover:-translate-y-1"}
            `}
            style={{ backgroundColor: plan.bg }}
          >
            {plan.highlight && (
              <h3 className="text-yellow-400 text-[25px] font-black text-center">
                BEST DEAL!
              </h3>
            )}

            <h2 className="text-center font-bold text-2xl">{plan.name}</h2>
            <h3 className="text-center text-[20px] mb-5">{plan.price}</h3>

            <div className="space-y-3">
              {plan.benefits.map((benefit, bIndex) => (
                <p key={bIndex} className="flex items-center text-[18px]">
                  <span
                    className={`font-black text-xl mr-2 ${
                      plan.highlight ? "text-[#444444]" : "text-red-500"
                    }`}
                  >
                    ✓
                  </span>
                  {benefit}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </Link>
  );
}
