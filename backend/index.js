const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ROUTE TEST
app.get("/", (req, res) => {
  res.json({ message: "Backend jalan cuy 🔥" });
});

// JALANKAN SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running di http://localhost:${PORT}`);
});
