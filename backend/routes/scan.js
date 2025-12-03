const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Scan QR Token
// POST scan QR
router.post("/", async (req, res) => {
  const { user_id, status, notes } = req.body;

  if (!user_id) {
    return res.status(400).json({ error: "user_id wajib diisi" });
  }

  try {
    const result = await db.query(
      `INSERT INTO gym_access_logs (user_id, status, notes)
       VALUES ($1, $2, $3) RETURNING *`,
      [user_id, status || "success", notes || ""]
    );

    res.json({ message: "Scan berhasil ✅", data: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error ❌", detail: err });
  }
});

module.exports = router;