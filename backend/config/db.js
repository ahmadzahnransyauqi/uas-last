const { Pool } = require('pg');
const pool = new Pool({
 user: 'postgres',
 host: 'localhost',
 database: 'roger_sumatera',
 password: '123456789',
 port: 5432,
});
pool.connect((err) => {
  if (err) {
    console.error('❌ Koneksi DB Gagal:', err.stack);
  } else {
    console.log('✅ Terhubung ke Database PostgreSQL');
  }
});

module.exports = pool;