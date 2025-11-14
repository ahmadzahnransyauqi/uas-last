const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/api/sapa', (req, res) => {
  res.json({ message: 'tes' });
});

app.post('/api/users', (req, res) => {
  const dataPengguna = req.body; 

  console.log('Data yang diterima:', dataPengguna);

  res.status(201).json({
    message: 'User berhasil dibuat',
    data: dataPengguna
  });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
