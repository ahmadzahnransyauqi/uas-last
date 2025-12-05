import { useState, useEffect } from "react";
import { Calendar, Users, CheckCircle2 } from "lucide-react";
import axios from "axios";

export default function Dashboard() {
  const [joinedClasses, setJoinedClasses] = useState([]);
  const [loadingClasses, setLoadingClasses] = useState(true);

  const [membership, setMembership] = useState(null);
  const [loadingMembership, setLoadingMembership] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.username || "User";

  const attendanceHistory = [
    { id: 1, date: "Dec 5, 2025", type: "Group Class", activity: "HIIT Blast", checkIn: "6:00 AM" },
    { id: 2, date: "Dec 4, 2025", type: "Personal Training", activity: "Strength Training", checkIn: "5:00 PM" },
    { id: 3, date: "Dec 3, 2025", type: "Group Class", activity: "Yoga Flow", checkIn: "8:00 AM" },
  ];

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  // --- Fetch joined classes ---
  const fetchJoinedClasses = async () => {
    if (!token) return;
    setLoadingClasses(true);

    try {
      const res = await axios.get(
        "http://localhost:3000/api/admin/classes/joined-classes",
        { headers }
      );
      setJoinedClasses(res.data || []);
    } catch (err) {
      console.error("Failed to fetch classes:", err.response?.data || err);
      setJoinedClasses([]);
    } finally {
      setLoadingClasses(false);
    }
  };

  // --- Fetch user membership ---
  const fetchMembership = async () => {
    if (!token) return;
    setLoadingMembership(true);

    try {
      const res = await axios.get(
        "http://localhost:3000/api/memberships/me",
        { headers }
      );
      setMembership(res.data?.membership || null);
    } catch (err) {
      console.log("Membership fetch failed:", err.response?.data || err);
      setMembership(null);
    } finally {
      setLoadingMembership(false);
    }
  };

  useEffect(() => {
    fetchJoinedClasses();
    fetchMembership();
  }, [token]);

  if (!token) return <p style={{ color: "#fff" }}>You are not logged in.</p>;

  return (
    <div style={{ padding: "20px", minHeight: "100vh", backgroundColor: "#121212" }}>
      {/* HEADER */}
      <h2 className="text-white font-bold text-3xl mb-5">
        Welcome back, {username}! 👋
      </h2>

      {/* ROW: MEMBERSHIP + CLASSES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* MEMBERSHIP CARD */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: "#252525" }}>
          <div className="flex items-center gap-2 mb-4">
            <Users size={24} style={{ color: "#ff1f1f" }} />
            <h3 style={{ color: "#ffffff" }}>Membership Details</h3>
          </div>

          {loadingMembership ? (
            <p style={{ color: "#9CA3AF" }}>Loading membership...</p>
          ) : !membership ? (
            <p style={{ color: "#9CA3AF" }}>You have not selected a membership yet.</p>
          ) : (
            <div className="p-5 rounded-lg" style={{ backgroundColor: "#1a1a1a" }}>
              <h3 style={{ color: "#ffffff", fontSize: "1.2rem" }}>
                {membership.name || "No Plan"}
              </h3>

              <p style={{ color: "#9CA3AF", marginTop: "4px" }}>
                Duration: {membership.duration_days || 0} days
              </p>

              <p style={{ color: "#ff1f1f", fontWeight: "bold", marginTop: "4px" }}>
                Rp {Number(membership.price || 0).toLocaleString("id-ID")}
              </p>

              <p style={{ color: "#9CA3AF", marginTop: "4px" }}>
                Start: {membership.start_date ? new Date(membership.start_date).toLocaleDateString("id-ID") : "-"}
              </p>

              <p style={{ color: "#9CA3AF" }}>
                End: {membership.end_date ? new Date(membership.end_date).toLocaleDateString("id-ID") : "-"}
              </p>

              <p
                style={{
                  color: membership.status === "active" ? "#10b981" : "#f87171",
                  fontWeight: "bold",
                  marginTop: "4px",
                }}
              >
                Status: {membership.status || "-"}
              </p>

              <h4 className="mt-4 mb-2" style={{ color: "#ffffff" }}>Benefits:</h4>
              <ul className="list-disc pl-6 space-y-1">
                {(membership.benefits || []).map((b, i) => (
                  <li key={i} style={{ color: "#9CA3AF" }}>{b}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* MY CLASSES */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: "#252525" }}>
          <div className="flex items-center gap-2 mb-6">
            <Users size={24} style={{ color: "#ff1f1f" }} />
            <h3 style={{ color: "#ffffff" }}>My Classes</h3>
          </div>

          {loadingClasses ? (
            <p style={{ color: "#9CA3AF" }}>Loading classes...</p>
          ) : joinedClasses.length === 0 ? (
            <p style={{ color: "#9CA3AF" }}>You haven't joined any classes yet.</p>
          ) : (
            <div className="space-y-4">
              {joinedClasses.map((cls) => {
                const categoriesSafe = Array.isArray(cls.categories)
                  ? cls.categories
                  : cls.categories
                  ? [cls.categories]
                  : [];

                return (
                  <div key={cls.class_schedule_id} className="p-6 rounded-lg" style={{ backgroundColor: "#1a1a1a" }}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 style={{ color: "#ffffff", fontSize: "1.2rem" }}>
                        {cls.class_name || "Unnamed Class"}
                      </h3>
                      <CheckCircle2 size={20} style={{ color: "#10b981" }} />
                    </div>

                    <p style={{ color: "#9CA3AF" }}>
                      Trainer: {cls.trainer_name || "-"} | Difficulty: {cls.difficulty || "-"}
                    </p>

                    <p style={{ color: "#9CA3AF" }}>
                      Days: {cls.day_of_week || "-"} | Time: {cls.start_time || "-"} - {cls.end_time || "-"}
                    </p>

                    <div className="flex flex-wrap gap-2 my-2">
                      {categoriesSafe.map((cat, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: "#ff1f1f", color: "#fff" }}>
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ATTENDANCE */}
      <div className="p-6 rounded-lg mt-8" style={{ backgroundColor: "#252525" }}>
        <div className="flex items-center gap-2 mb-6">
          <Calendar size={24} style={{ color: "#ff1f1f" }} />
          <h3 style={{ color: "#ffffff" }}>Attendance History</h3>
        </div>

        <div className="space-y-3">
          {attendanceHistory.map((record) => (
            <div key={record.id} className="p-4 rounded-lg flex justify-between" style={{ backgroundColor: "#1a1a1a" }}>
              <div className="flex-1">
                <span className="px-3 py-1 text-xs rounded" style={{ backgroundColor: "#252525", color: "#ff1f1f" }}>
                  {record.type}
                </span>
                <p style={{ color: "#ffffff" }}>{record.activity}</p>
                <p style={{ color: "#9CA3AF" }}>{record.date}</p>
              </div>

              <p style={{ color: "#9CA3AF" }}>{record.checkIn}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}