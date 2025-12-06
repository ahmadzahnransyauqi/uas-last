--12/1/2025
-- 1. AKTIFKAN EKSTENSI UUID (Wajib untuk ID unik acak)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. HAPUS SEMUA TABEL LAMA (Jika ada, biar bersih, CASCADE untuk hapus relasi anak)
DROP TABLE IF EXISTS user_schedules CASCADE;
DROP TABLE IF EXISTS membership_schedules CASCADE;
DROP TABLE IF EXISTS user_qr_codes CASCADE;
DROP TABLE IF EXISTS gym_access_logs CASCADE;
DROP TABLE IF EXISTS system_logs CASCADE;
DROP TABLE IF EXISTS promotions CASCADE;
DROP TABLE IF EXISTS attendance_logs CASCADE;
DROP TABLE IF EXISTS member_progress CASCADE;
DROP TABLE IF EXISTS class_schedules CASCADE;
DROP TABLE IF EXISTS user_memberships CASCADE;
DROP TABLE IF EXISTS membership_plans CASCADE;
DROP TABLE IF EXISTS users CASCADE;

---
-- =============================================
-- A. TABEL UTAMA (PARENT TABLES)
-- =============================================

-- USERS
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100),
    password VARCHAR(255) NOT NULL, -- Password ter-hash
    full_name VARCHAR(100),
    role VARCHAR(20) DEFAULT 'member', -- 'admin' atau 'member'
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW()
);

-- PAKET MEMBERSHIP
CREATE TABLE membership_plans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL, -- Contoh: 'Basic', 'Premium'
    price DECIMAL(10, 2) NOT NULL,
    duration_days INT DEFAULT 30, -- 30 hari
    benefits TEXT -- Deskripsi singkat fasilitas
);

---
-- =============================================
-- B. TABEL ANAK (CHILD TABLES)
-- =============================================

-- TRANSAKSI / STATUS MEMBER (References USERS dan MEMBERSHIP_PLANS)
CREATE TABLE user_memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    plan_id INT REFERENCES membership_plans(id),
    start_date DATE DEFAULT CURRENT_DATE,
    end_date DATE,
    status VARCHAR(20) DEFAULT 'active', -- 'active', 'expired', 'pending'
    created_at TIMESTAMP DEFAULT NOW()
);

-- PROGRESS MEMBER (References USERS)
CREATE TABLE member_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    date_recorded DATE DEFAULT CURRENT_DATE,
    weight_kg DECIMAL(5, 2),
    height_cm DECIMAL(5, 2),
    notes TEXT
);

-- ABSENSI / ATTENDANCE LOGS (Menggantikan attendance_logs dan gym_access_logs)
CREATE TABLE attendance_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    scanned_at TIMESTAMP DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'success', -- 'success' atau 'denied'
    notes TEXT -- Dari gym_access_logs
);
CREATE INDEX idx_access_user ON attendance_logs(user_id);


-- QR CODE USER (References USERS)
CREATE TABLE user_qr_codes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    qr_token TEXT NOT NULL UNIQUE, 
    created_at TIMESTAMP DEFAULT NOW()
);

---
-- =============================================
-- C. TABEL JADWAL & LOGISTIK (INDEPENDENT/SUPPORT)
-- =============================================

-- JADWAL PAKET (References MEMBERSHIP_PLANS)
CREATE TABLE membership_schedules (
    id SERIAL PRIMARY KEY,
    -- FIX: Menggunakan membership_plans(id) yang sudah didefinisikan
    plan_id INT REFERENCES membership_plans(id) ON DELETE CASCADE, 
    day_of_week VARCHAR(10) NOT NULL, 
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- JADWAL PERSONAL USER (References USER_MEMBERSHIPS)
CREATE TABLE user_schedules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_membership_id UUID REFERENCES user_memberships(id) ON DELETE CASCADE,
    day_of_week VARCHAR(10) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- JADWAL KELAS (Dibuat Manual di Dashboard)
CREATE TABLE class_schedules (
    id SERIAL PRIMARY KEY,
    class_name VARCHAR(50) NOT NULL, -- Yoga, Muay Thai, dll
    day_of_week VARCHAR(15) NOT NULL, 
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    trainer_name VARCHAR(50)
);

-- PROMOSI
CREATE TABLE promotions (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    discount_percentage INT, 
    valid_until DATE,
    status VARCHAR(20) DEFAULT 'active' 
);

-- LOG SISTEM
CREATE TABLE system_logs (
    id SERIAL PRIMARY KEY,
    activity VARCHAR(255), 
    timestamp TIMESTAMP DEFAULT NOW()
);

---
-- =============================================
-- D. FUNGSI DAN TRIGGER (LOGIC)
-- =============================================

-- FUNGSI: Otomatis mengisi jadwal user saat mereka membeli paket
CREATE OR REPLACE FUNCTION generate_user_schedule()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO user_schedules (user_membership_id, day_of_week, start_time, end_time)
    SELECT NEW.id, ms.day_of_week, ms.start_time, ms.end_time
    FROM membership_schedules ms
    -- FIX: Mengambil plan_id dari record user_memberships yang baru di-INSERT
    WHERE ms.plan_id = NEW.plan_id; 

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- TRIGGER: Jalankan fungsi di atas setelah INSERT ke user_memberships
CREATE TRIGGER trg_generate_user_schedule
AFTER INSERT ON user_memberships
FOR EACH ROW
EXECUTE FUNCTION generate_user_schedule();

---
-- =============================================
-- E. DATA AWAL (SEEDING)
-- =============================================

-- 1. Pilihan Paket
INSERT INTO membership_plans (name, price, duration_days, benefits) VALUES 
('Basic', 150000, 30, 'Akses gym reguler, 1x konsultasi pelatih'),
('Premium', 300000, 30, 'Akses gym penuh, 4x sesi PT, Kelas Group'),
('Elite', 500000, 30, 'Akses 24 jam, 8x sesi PT, Free Merchandise');

-- 2. Jadwal Kelas
INSERT INTO class_schedules (class_name, day_of_week, start_time, end_time, trainer_name) VALUES
('Personal Training', 'Senin - Jumat', '13:00', '20:00', 'Coach Budi'),
('Group Classes (Zumba/Yoga)', 'Senin - Kamis', '15:00', '21:00', 'Coach Siti'),
('Martial Arts', 'Selasa - Jumat', '17:00', '21:00', 'Master Ken');

-- 3. Data Dummy PROMO
INSERT INTO promotions (title, description, discount_percentage, valid_until) VALUES
('New Year Sale', 'Get 20% off for all plans', 20, '2025-01-01'),
('Student Discount', 'Special price for students', 15, '2025-12-31');

-- 4. User Admin Default (Harap di-hash manual atau lewat proses registrasi)
-- INSERT INTO users (username, email, password, full_name, role) VALUES 
-- ('admin', 'admin@gym.com', 'PASTE_HASHED_PASSWORD_HERE', 'Admin Utama', 'admin');