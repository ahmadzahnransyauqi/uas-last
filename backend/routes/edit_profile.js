const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const middlewareAuth = require("../middleware/authMiddleWare");

// ========================
// UPDATE PROFILE
// ========================
router.put("/", middlewareAuth, async (req, res) => {
  console.log("REQUEST BODY:", req.body);
  console.log("USER FROM TOKEN:", req.user);

  const { username, email, phone, full_name, goal } = req.body; // ← added goals
  const userId = req.user.id;

  try {
    const updateQuery = await pool.query(
      `UPDATE users 
       SET username = $1, email = $2, full_name = $3, phone = $4, goal = $5 
       WHERE id = $6 
       RETURNING *`,
      [username, email, full_name, phone, goal, userId]
    );

    res.json({
      success: true,
      message: "Profile updated successfully!",
      user: updateQuery.rows[0],
    });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ========================
// GET LOGGED-IN USER DATA
// ========================
router.get("/", middlewareAuth, async (req, res) => {
  const userId = req.user.id;

  try {
    const userQuery = await pool.query(
      `SELECT id, username, email, full_name, phone, goal
       FROM users 
       WHERE id = $1`,
      [userId]
    );

    if (userQuery.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      success: true,
      user: userQuery.rows[0],
    });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
