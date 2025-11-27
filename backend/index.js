const express = require('express');
const cors = require('cors');

// Import Route yang tadi dipisah
const authRoutes = require('./routes/auth'); 
// Nanti kalau scan sudah dibuat: const scanRoutes = require('./routes/scan');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

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