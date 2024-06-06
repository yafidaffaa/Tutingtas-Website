const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const bosyParser = require('body-parser');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Buat koneksi ke database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'username', // Ganti dengan username database Anda
//   password: 'password', // Ganti dengan password database Anda
//   database: 'nama_database' // Ganti dengan nama database Anda
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//     return;
//   }
//   console.log('Connected to database');
// });

// // Middleware untuk membaca body pada request
// app.use(express.json());

// // Route untuk proses login
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Query untuk mencari pengguna dengan username dan password yang sesuai
//   const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

//   // Eksekusi query
//   connection.query(query, [username, password], (error, results) => {
//     if (error) {
//       console.error('Error querying database:', error);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }

//     // Jika hasil query tidak ditemukan
//     if (results.length === 0) {
//       res.status(401).json({ error: 'Invalid username or password' });
//     } else {
//       // Jika berhasil, kirimkan respons sukses
//       res.status(200).json({ message: 'Login successful' });
//     }
//   });
// });

app.get('/', (req, res) => {
    res.send('Hello world lalalalal!')
})

// Jalankan server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
