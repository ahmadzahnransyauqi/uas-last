const express = require('express');
const cors = require('cors');

// Routes
const authRoutes = require('./routes/auth'); 
const scanRoutes = require('./routes/scan');
const editProfileRoutes = require('./routes/edit_profile');
const qrRoutes = require('./routes/scan');

const adminStatsRoutes = require('./routes/admin/stats');
const adminUsersRoutes = require('./routes/admin/users');
const adminPlansRoutes = require('./routes/admin/plans');
const adminClassesRoutes = require('./routes/admin/classes');
const adminPromosRoutes = require('./routes/admin/promos');
const resetDeleteRoutes = require('./routes/user/resetPass_and_deleteAcc');

const app = express();
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// JSON Middleware
app.use(express.json());

// Routes
app.use("/api/qr", qrRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/scan', scanRoutes);
app.use('/api/edit_profile', editProfileRoutes);

app.use('/api/admin/stats', adminStatsRoutes);
app.use('/api/admin/users', adminUsersRoutes);
app.use('/api/admin/plans', adminPlansRoutes);
app.use('/api/admin/classes', adminClassesRoutes);
app.use('/api/admin/promos', adminPromosRoutes);

app.use('/api/user/reset&delete', resetDeleteRoutes);

// Test route
app.get('/', (req, res) => {
  res.send("API Gym Aktif 😎🔥");
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
