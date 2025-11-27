const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

// --- REGISTER ---
router.post('/register', async (req, res) => {
    // 👇 POSISI YANG BENAR ADA DI SINI (Di dalam fungsi)
    console.log("BODY REQUEST:", req.body); 

    const { username, password, role } = req.body;
    try {
        // Cek duplikat
        const userCheck = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ error: "Username sudah dipakai!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query(
            "INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *",
            [username, hashedPassword, role || 'member']
        );

        res.json({ message: "Register Berhasil", user: newUser.rows[0] });
    } catch (err) {
        console.error("ERROR DATABASE:", err.message); // Log error database biar jelas
        res.status(500).json({ error: "Server Error saat Register" });
    }
});

// --- LOGIN ---
// --- LOGIN ---
router.post('/login', async (req, res) => {
    // 👇 TAMBAHKAN INI UNTUK DEBUGGING
    console.log("LOGIN REQUEST:", req.body); 

    const { username, password } = req.body;

    try {
        const userResult = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        if (userResult.rows.length === 0) {
            return res.status(400).json({ error: "Username tidak ditemukan" });
        }

        const user = userResult.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Password salah!" });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, "rahasia_negara", { expiresIn: "1h" });

        res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server Error saat Login" });
    }
});

module.exports = router;