import { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle2 } from "lucide-react";

export default function Billing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [buying, setBuying] = useState(false);

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  // --- Fetch & Normalize Plans ---
  const fetchMembershipPlans = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/admin/plans", {
        headers,
      });

      // FIX: Normalize benefits (string → array)
      const normalized = res.data.map((plan) => ({
        ...plan,
        benefits: Array.isArray(plan.benefits)
          ? plan.benefits
          : typeof plan.benefits === "string"
          ? plan.benefits.split(",").map((b) => b.trim())
          : [],
      }));

      setPlans(normalized);
    } catch (err) {
      console.error("Failed to load plans:", err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  // --- Buy Membership ---
  const handleBuy = async () => {
    if (!selectedPlan) return;

    setBuying(true);
    try {
      await axios.post(
        "http://localhost:3000/api/memberships/buy",
        { plan_id: selectedPlan.id },
        { headers }
      );

      alert("Membership purchased successfully!");
    } catch (err) {
      console.error("Purchase failed:", err.response?.data || err);
      alert("Failed to purchase membership.");
    } finally {
      setBuying(false);
    }
  };

  useEffect(() => {
    fetchMembershipPlans();
  }, []);

  if (!token) return <p style={{ color: "#fff" }}>You are not logged in.</p>;

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#121212",
      }}
    >
      <h2 className="text-white font-bold text-3xl mb-6">Billing</h2>

      <p className="text-gray-400 mb-8">
        Choose from the available membership plans below.
      </p>

      {loading ? (
        <p style={{ color: "#9CA3AF" }}>Loading membership plans...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="p-6 rounded-lg cursor-pointer"
              onClick={() => setSelectedPlan(plan)}
              style={{
                backgroundColor:
                  selectedPlan?.id === plan.id ? "#1f262a" : "#1a1a1a",
                border:
                  selectedPlan?.id === plan.id
                    ? "2px solid #ff1f1f"
                    : "2px solid transparent",
                transition: "0.2s",
              }}
            >
              <h3 style={{ color: "#fff", fontSize: "1.25rem" }}>
                {plan.name}
              </h3>

              <p style={{ color: "#ff1f1f", marginTop: 4, fontWeight: "bold" }}>
                Rp {parseInt(plan.price).toLocaleString("id-ID")}
              </p>

              <p style={{ color: "#9CA3AF", marginTop: 4 }}>
                Duration: {plan.duration_days} days
              </p>

              <h4 className="mt-4 mb-2" style={{ color: "#fff" }}>
                Benefits:
              </h4>

              <ul className="list-disc pl-5 space-y-1">
                {plan.benefits.map((b, i) => (
                  <li key={i} style={{ color: "#9CA3AF" }}>
                    {b}
                  </li>
                ))}
              </ul>

              {selectedPlan?.id === plan.id && (
                <div className="flex items-center gap-2 mt-3">
                  <CheckCircle2 size={18} color="#10b981" />
                  <span className="text-green-400 text-sm">Selected</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* BUY BUTTON */}
      <div className="mt-10">
        <button
          disabled={!selectedPlan || buying}
          onClick={handleBuy}
          className={`px-6 py-3 rounded-lg font-bold text-white ${
            !selectedPlan || buying
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-[#ff1f1f] hover:bg-red-600"
          }`}
        >
          {buying
            ? "Processing..."
            : selectedPlan
            ? "Buy Membership"
            : "Select a Plan"}
        </button>
      </div>
    </div>
  );
}
