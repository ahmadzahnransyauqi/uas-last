const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());

app.post('/api/users', async (req, res) => {
  const { nama, email } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (nama, email) VALUES ($1, $2) RETURNING *',
      [nama, email]
    );

    res.status(201).json({
      message: 'User berhasil dibuat',
      data: result.rows[0]
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
