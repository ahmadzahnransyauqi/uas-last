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
// --- LOGIN DENGAN PENGECEKAN ROLE ---
router.post('/login', async (req, res) => {
    // 1. Terima parameter 'role' dari frontend
    const { username, password, role } = req.body; 

    try {
        // 2. Query Database: Cari user yang username DAN role-nya cocok
        // Kita pakai LOWER() agar tidak masalah huruf besar/kecil
        const userResult = await pool.query(
            "SELECT * FROM users WHERE LOWER(username) = LOWER($1) AND role = $2", 
            [username, role]
        );

        // 3. Jika tidak ditemukan, berarti Username salah ATAU Role salah pilih
        if (userResult.rows.length === 0) {
            return res.status(401).json({ 
                error: `Akun tidak ditemukan di akses ${role === 'admin' ? 'Admin' : 'Member'}!` 
            });
        }

        const user = userResult.rows[0];

        // 4. Cek Password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Password salah!" });
        }

        // 5. Buat Token
        const token = jwt.sign(
            { id: user.id, role: user.role }, 
            "rahasia_negara", 
            { expiresIn: "1h" }
        );

        res.json({ 
            message: "Login Berhasil",
            token, 
            user: { 
                username: user.username, 
                role: user.role 
            } 
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server Error saat Login" });
    }
});

module.exports = router;