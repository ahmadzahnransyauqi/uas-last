import { Users, Clock, Calendar, Search } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

const categories = ["All", "Cardio", "Strength", "Dance", "Mind & Body"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

export default function GroupClasses() {
  const [classes, setClasses] = useState([]);
  const [joinedClasses, setJoinedClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    classAction: null, // "join" or "leave"
    classData: null,
  });

  // Fetch classes from backend
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axios.get("/api/admin/classes");
        const mapped = res.data.map((cls) => ({
          id: cls.id,
          name: cls.class_name,
          instructor: cls.trainer_name,
          time: `${cls.start_time} - ${cls.end_time}`,
          day: cls.day_of_week,
          spots: cls.spots,
          totalSpots: cls.total_spots,
          difficulty: cls.difficulty,
          category: cls.categories,
        }));
        setClasses(mapped);
      } catch (err) {
        console.error("Failed to fetch classes:", err);
      }
    };
    fetchClasses();
  }, []);

  // Handle Confirm action (join or leave)
  const handleConfirmAction = async () => {
    const { classAction, classData } = confirmModal;
    if (!classData) return;

    try {
      if (classAction === "join") {
        if (joinedClasses.includes(classData.id)) {
          alert("You already joined this class!");
          setConfirmModal({ isOpen: false, classAction: null, classData: null });
          return;
        }
        await axios.patch(`/api/admin/classes/${classData.id}/join`);
        setJoinedClasses([...joinedClasses, classData.id]);
        setClasses(
          classes.map((c) =>
            c.id === classData.id ? { ...c, spots: c.spots + 1 } : c
          )
        );
      } else if (classAction === "leave") {
        await axios.patch(`/api/admin/classes/${classData.id}/leave`);
        setJoinedClasses(joinedClasses.filter((id) => id !== classData.id));
        setClasses(
          classes.map((c) =>
            c.id === classData.id ? { ...c, spots: c.spots - 1 } : c
          )
        );
      }
      setConfirmModal({ isOpen: false, classAction: null, classData: null });
    } catch (err) {
      console.error("Action failed:", err);
      alert(err.response?.data?.error || "Action failed");
      setConfirmModal({ isOpen: false, classAction: null, classData: null });
    }
  };

  const filterAndSearchClasses = () => {
    return classes.filter((gymClass) => {
      const matchesSearch =
        gymClass.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gymClass.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || gymClass.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "All" || gymClass.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  };

  const filteredClasses = filterAndSearchClasses();

  const getCategoryColor = (category) => {
    switch (category) {
      case "Cardio":
        return { background: "#ff1f1f20", text: "#ff1f1f" };
      case "Strength":
        return { background: "#1f9dff20", text: "#1f9dff" };
      case "Dance":
        return { background: "#ff9d1f20", text: "#ff9d1f" };
      case "Mind & Body":
        return { background: "#1fff9d20", text: "#1fff9d" };
      default:
        return { background: "#1a1a1a", text: "#9CA3AF" };
    }
  };

  return (
    <div style={{ padding: "20px", minHeight: "100vh", backgroundColor: "#121212" }}>
      {/* Header */}
      <div className="mb-6">
        <h2 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "8px" }}>Group Classes</h2>
        <p style={{ color: "#9CA3AF", fontSize: "1.1rem" }}>Find your perfect workout and join a community class.</p>
      </div>

      {/* Search & Filter */}
      <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: "#1e1e1e" }}>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search by class name or instructor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg"
            style={{ backgroundColor: "#252525", color: "#ffffff", border: "none" }}
          />
          <Search size={18} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#ffffff" }}>Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 rounded-lg appearance-none"
              style={{ backgroundColor: "#252525", color: "#ffffff", border: "1px solid #333333" }}
            >
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#ffffff" }}>Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full p-3 rounded-lg appearance-none"
              style={{ backgroundColor: "#252525", color: "#ffffff", border: "1px solid #333333" }}
            >
              {difficulties.map((diff) => <option key={diff} value={diff}>{diff}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Classes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.length > 0 ? filteredClasses.map((gymClass) => {
          const categoryColors = getCategoryColor(gymClass.category);
          const joined = joinedClasses.includes(gymClass.id);
          return (
            <div key={gymClass.id} className="rounded-lg overflow-hidden flex flex-col shadow-lg transition-transform duration-300 hover:scale-[1.02]" style={{ backgroundColor: "#252525" }}>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "bold" }}>{gymClass.name}</h3>
                  <div className="flex flex-col items-end gap-1 ml-2">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "#1a1a1a", color: "#ff1f1f" }}>{gymClass.difficulty}</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: categoryColors.background, color: categoryColors.text }}>{gymClass.category}</span>
                  </div>
                </div>

                <p className="mb-3" style={{ color: "#9CA3AF" }}>with {gymClass.instructor}</p>

                <div className="space-y-2 mb-4 flex-1" style={{ color: "#9CA3AF" }}>
                  <div className="flex items-center gap-2">
                    <Clock size={16} style={{ color: "#ff1f1f" }} />
                    <span>{gymClass.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} style={{ color: "#ff1f1f" }} />
                    <span>{gymClass.day}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} style={{ color: "#ff1f1f" }} />
                    <span>{gymClass.spots} spots available of {gymClass.totalSpots}</span>
                  </div>
                </div>

                <button
                  onClick={() => setConfirmModal({ isOpen: true, classAction: joined ? "leave" : "join", classData: gymClass })}
                  className="w-full py-3 rounded-lg font-bold text-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: joined ? "#1a1a1a" : "#ff1f1f",
                    color: "#ffffff",
                    border: joined ? "1px solid #ff1f1f" : "none",
                    cursor: gymClass.spots >= gymClass.totalSpots && !joined ? "not-allowed" : "pointer",
                  }}
                  disabled={gymClass.spots >= gymClass.totalSpots && !joined}
                >
                  {joined ? "Leave Class" : "Join Class"}
                </button>
              </div>
            </div>
          );
        }) : (
          <div className="md:col-span-3 text-center p-8 rounded-lg" style={{ backgroundColor: "#1e1e1e", color: "#9CA3AF" }}>
            <p className="text-xl">No classes match your current search and filter criteria.</p>
            <p className="mt-2">Try adjusting your filters or clearing the search term.</p>
          </div>
        )}
      </div>

      {/* Custom Confirmation Modal */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1a1a1a71] bg-opacity-60 z-50">
          <div className="bg-[#252525] p-6 rounded-lg shadow-lg max-w-sm w-full" style={{ color: "#fff" }}>
            <h3 className="text-xl font-bold mb-4">{confirmModal.classAction === "join" ? "Confirm Join" : "Confirm Leave"}</h3>
            <p className="mb-6">
              Do you want to {confirmModal.classAction} <strong>{confirmModal.classData?.name}</strong>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmModal({ isOpen: false, classAction: null, classData: null })}
                className="px-4 py-2 rounded-lg border border-gray-500 hover:bg-gray-700 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
