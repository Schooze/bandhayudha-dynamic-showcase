const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration - FIXED
const corsOptions = {
  origin: ['https://bandhayudha.icu', 'http://localhost:3000', 'http://localhost:5173'], // tambahkan localhost untuk development
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200 // untuk browser lama
};

// Enable CORS SEBELUM middleware lain
app.use(cors(corsOptions));

// Middleware untuk parsing JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Tambahan: Handle preflight requests secara eksplisit
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.status(200).send();
});

// UltraMsg Configuration
const ULTRAMSG_INSTANCE_ID = process.env.ULTRAMSG_INSTANCE_ID || 'instance135111';
const ULTRAMSG_TOKEN       = process.env.ULTRAMSG_TOKEN       || 'gnww78b0rjwsf143';
const ULTRAMSG_URL         = `https://api.ultramsg.com/${ULTRAMSG_INSTANCE_ID}/messages/chat`;

// Route untuk mengirim pesan WhatsApp dan Email
app.post('/api/contact', async (req, res) => {
  try {
    // Set CORS headers secara manual juga (backup)
    res.header('Access-Control-Allow-Origin', req.headers.origin || 'https://bandhayudha.icu');
    res.header('Access-Control-Allow-Credentials', 'true');

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      country,
      message
    } = req.body;

    // Validasi required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Required fields are missing'
      });
    }

    // Format pesan untuk WhatsApp
    const whatsappMessage = `🔔 *SPONSOR MASUK*

📝 *Detail Sponsor:*
• Nama: ${firstName} ${lastName}
• Email: ${email}
• Telepon: ${phone || 'Tidak diisi'}
• Perusahaan: ${company || 'Tidak diisi'}
• Jabatan: ${jobTitle || 'Tidak diisi'}
• Negara: ${country || 'Tidak diisi'}

💬 *Pesan:*
${message}

---
Pesan otomatis dari website Bandhayudha UNDIP`;

    // Kirim ke WhatsApp menggunakan UltraMsg
    const whatsappData = {
      to: '6281315795773@c.us', // Ganti dengan nomor WhatsApp tujuan
      body: whatsappMessage
    };

    const whatsappResponse = await axios.post(
      ULTRAMSG_URL,
      whatsappData,
      {
        headers: { 'Content-Type': 'application/json' },
        params:  { token: ULTRAMSG_TOKEN },
        timeout: 10000 // 10 detik timeout
      }
    );

    console.log('WhatsApp sent successfully:', whatsappResponse.data);

    // Return success response
    res.json({
      success: true,
      message: 'Pesan berhasil dikirim ke WhatsApp dan Email!',
      data: {
        whatsapp: whatsappResponse.data,
        emailSent: true // EmailJS akan di-handle di frontend
      }
    });

  } catch (error) {
    console.error('Error sending message:', error.response?.data || error.message);
    
    // Set CORS headers bahkan untuk error response
    res.header('Access-Control-Allow-Origin', req.headers.origin || 'https://bandhayudha.icu');
    res.header('Access-Control-Allow-Credentials', 'true');
    
    res.status(500).json({
      success: false,
      message: 'Gagal mengirim pesan',
      error: error.response?.data || error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || 'https://bandhayudha.icu');
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// 404 handler
app.use('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || 'https://bandhayudha.icu');
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.header('Access-Control-Allow-Origin', req.headers.origin || 'https://bandhayudha.icu');
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS enabled for: https://bandhayudha.icu`);
});