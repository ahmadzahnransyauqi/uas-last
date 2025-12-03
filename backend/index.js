const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
const authRoutes = require('./routes/auth'); 
const scanRoutes = require('./routes/scan')

// --- GUNAKAN ROUTES ---
// Artinya: semua URL yang berawalan /api/auth akan diurus oleh authRoutes
app.use('/api/auth', authRoutes);

// Route Cek Server
app.get('/', (req, res) => {
  res.send("API Gym Aktif 😎🔥");
});

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});