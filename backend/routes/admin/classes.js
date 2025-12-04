const express = require("express");
const router = express.Router();
const pool = require("../../config/db");

const logActivity = async (msg) => {
  try {
    await pool.query("INSERT INTO system_logs (activity) VALUES ($1)", [msg]);
  } catch (e) {
    console.error(e);
  }
};

// GET all classes
router.get("/", async (req, res) => {
  const { rows } = await pool.query(
    "SELECT * FROM class_schedules ORDER BY id ASC"
  );
  res.json(rows);
});

// POST add a new class
router.post("/", async (req, res) => {
  const {
    name,
    trainer,
    day,
    start,
    end,
    spots,
    total_spots,
    difficulty,
    categories,
  } = req.body;

  await pool.query(
    `INSERT INTO class_schedules 
      (class_name, trainer_name, day_of_week, start_time, end_time, spots, total_spots, difficulty, categories) 
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
    [name, trainer, day, start, end, spots, total_spots, difficulty, categories]
  );

  logActivity(`Added Class: ${name}`);
  res.json({ msg: "Added" });
});

// PUT update a class
router.put("/:id", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM class_schedules WHERE id=$1",
      [req.params.id]
    );

    if (!rows[0]) return res.status(404).json({ error: "Class not found" });

    const existing = rows[0];

    const {
      class_name,
      trainer_name,
      day_of_week,
      start_time,
      end_time,
      spots,
      total_spots,
      difficulty,
      categories,
    } = req.body;

    await pool.query(
      `UPDATE class_schedules
   SET class_name=$1,
       trainer_name=$2,
       day_of_week=$3,
       start_time=$4,
       end_time=$5,
       spots=$6,
       total_spots=$7,
       difficulty=$8,
       categories=$9
   WHERE id=$10`,
      [
        class_name ?? existing.class_name,
        trainer_name ?? existing.trainer_name,
        day_of_week ?? existing.day_of_week,
        start_time ?? existing.start_time,
        end_time ?? existing.end_time,
        spots ?? existing.spots,
        total_spots ?? existing.total_spots,
        difficulty ?? existing.difficulty,
        categories ?? existing.categories,
        req.params.id,
      ]
    );

    logActivity(`Updated Class: ${class_name ?? existing.class_name}`);
    res.json({ msg: "Updated successfully" });
  } catch (err) {
    console.error("PUT /classes/:id error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// DELETE a class
router.delete("/:id", async (req, res) => {
  await pool.query("DELETE FROM class_schedules WHERE id=$1", [req.params.id]);
  res.json({ msg: "Deleted" });
});

// PATCH /api/admin/classes/:id/join
router.patch("/:id/join", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT spots, total_spots FROM class_schedules WHERE id=$1",
      [req.params.id]
    );
    if (!rows[0]) return res.status(404).json({ error: "Class not found" });

    const { spots, total_spots } = rows[0];

    if (spots >= total_spots)
      return res.status(400).json({ error: "Class is full" });

    // Increment spots by 1 (user joins)
    await pool.query(
      "UPDATE class_schedules SET spots = spots + 1 WHERE id=$1",
      [req.params.id]
    );

    res.json({ msg: "Joined successfully" });
  } catch (err) {
    console.error("PATCH /classes/:id/join error:", err);
    res.status(500).json({ error: err.message });
  }
});

// PATCH /classes/:id/leave
router.patch("/:id/leave", async (req, res) => {
  try {
    const { id } = req.params;

    // Get current spots
    const { rows } = await pool.query(
      "SELECT spots FROM class_schedules WHERE id=$1",
      [id]
    );
    if (!rows[0]) return res.status(404).json({ error: "Class not found" });

    if (rows[0].spots <= 0) {
      return res.status(400).json({ error: "No spots to leave" });
    }

    await pool.query(
      "UPDATE class_schedules SET spots = spots - 1 WHERE id=$1",
      [id]
    );
    res.json({ msg: "Left class" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to leave class" });
  }
});

module.exports = router;
