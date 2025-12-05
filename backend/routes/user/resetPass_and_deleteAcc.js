const express = require("express");
const router = express.Router();
const pool = require("../../config/db");

router.post('/reset-password', async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body;
    console.log('Request body:', req.body); // 🔹 check what is sent

    if (!userId || !currentPassword || !newPassword) {
      console.error('Missing required fields');
      return res.status(400).json({ error: 'User ID and passwords are required' });
    }

    const { rows } = await pool.query(
      'SELECT user_hash_password FROM users WHERE id=$1',
      [userId]
    );

    if (!rows[0]) {
      console.error('User not found in DB:', userId);
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(currentPassword, rows[0].user_hash_password);
    if (!isMatch) {
      console.error('Current password incorrect for user:', userId);
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    const hashed = await bcrypt.hash(newPassword, 10);

    await pool.query(
      'UPDATE users SET user_hash_password=$1 WHERE id=$2',
      [hashed, userId]
    );

    res.json({ success: true, msg: 'Password updated successfully' });

  } catch (err) {
    console.error('Server error in /reset-password:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
