const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
const authRoutes = require('./routes/auth'); 
const scanRoutes = require('./routes/scan');
const editProfileRoutes = require('./routes/edit_profile');

// --- GUNAKAN ROUTES ---
// Artinya: semua URL yang berawalan /api/auth akan diurus oleh authRoutes
app.use('/api/auth', authRoutes);
app.use('/api/scan', scanRoutes);
app.use('/api/admin/stats', require('./routes/admin/stats'));
app.use('/api/admin/users', require('./routes/admin/users'));
app.use('/api/admin/plans', require('./routes/admin/plans'));
app.use('/api/admin/classes', require('./routes/admin/classes'));
app.use('/api/admin/promos', require('./routes/admin/promos'));
app.use('/api/edit_profile', editProfileRoutes);

// Route Cek Server
app.get('/', (req, res) => {
  res.send("API Gym Aktif 😎🔥");
});

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});