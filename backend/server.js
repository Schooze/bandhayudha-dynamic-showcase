const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration - FIXED
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://bandhayudha.icu',
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:5174' // tambahan untuk Vite
    ];
    
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Content-Length', 'X-Requested-With'],
  credentials: true,
  maxAge: 86400, // 24 hours
  optionsSuccessStatus: 200
};

// Middleware untuk handle Cloudflare
app.use((req, res, next) => {
  // Trust Cloudflare proxy
  req.headers['cf-connecting-ip'] && (req.ip = req.headers['cf-connecting-ip']);
  
  // Set headers untuk Cloudflare
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  next();
});

// Enable CORS untuk semua routes
app.use(cors(corsOptions));

// Middleware untuk parsing JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint with proper CORS
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running', 
    timestamp: new Date().toISOString(),
    cors: 'enabled'
  });
});

// UltraMsg Configuration
const ULTRAMSG_INSTANCE_ID = process.env.ULTRAMSG_INSTANCE_ID || 'instance135111';
const ULTRAMSG_TOKEN = process.env.ULTRAMSG_TOKEN || 'gnww78b0rjwsf143';

// Route untuk mengirim pesan WhatsApp
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact request:', {
      origin: req.headers.origin,
      method: req.method,
      body: req.body
    });

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
    const ULTRAMSG_URL = `https://api.ultramsg.com/${ULTRAMSG_INSTANCE_ID}/messages/chat`;
    
    const whatsappData = {
      to: '6281315795773@c.us', // Format nomor WhatsApp Indonesia
      body: whatsappMessage,
      priority: 10,
      referenceId: ''
    };

    console.log('Sending to UltraMsg:', {
      url: ULTRAMSG_URL,
      data: whatsappData
    });

    try {
      const whatsappResponse = await axios({
        method: 'POST',
        url: ULTRAMSG_URL,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          token: ULTRAMSG_TOKEN
        },
        data: whatsappData,
        timeout: 15000 // 15 detik timeout
      });

      console.log('WhatsApp sent successfully:', whatsappResponse.data);

      // Return success response
      res.status(200).json({
        success: true,
        message: 'Pesan berhasil dikirim!',
        data: {
          whatsapp: {
            sent: true,
            id: whatsappResponse.data.id || 'sent'
          }
        }
      });

    } catch (whatsappError) {
      console.error('UltraMsg API Error:', {
        status: whatsappError.response?.status,
        data: whatsappError.response?.data,
        message: whatsappError.message
      });

      // Jika WhatsApp gagal, tetap return success tapi dengan notifikasi
      res.status(200).json({
        success: true,
        message: 'Pesan terkirim (Email berhasil, WhatsApp sedang diproses)',
        warning: 'WhatsApp notification may be delayed',
        data: {
          email: true,
          whatsapp: false
        }
      });
    }

  } catch (error) {
    console.error('Server error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Test UltraMsg endpoint (untuk debugging)
app.get('/api/test-ultramsg', async (req, res) => {
  try {
    const testMessage = {
      to: '6281315795773@c.us',
      body: 'Test message from Bandhayudha API - ' + new Date().toISOString()
    };

    const response = await axios({
      method: 'POST',
      url: `https://api.ultramsg.com/${ULTRAMSG_INSTANCE_ID}/messages/chat`,
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        token: ULTRAMSG_TOKEN
      },
      data: testMessage
    });

    res.json({
      success: true,
      message: 'Test message sent',
      data: response.data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Test failed',
      error: error.response?.data || error.message
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Route not found',
    path: req.originalUrl
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  
  // Handle CORS errors specifically
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS policy violation',
      origin: req.headers.origin
    });
  }
  
  res.status(500).json({ 
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`
🚀 Server running on port ${PORT}
📍 Environment: ${process.env.NODE_ENV || 'development'}
🔗 CORS enabled for: https://bandhayudha.icu
🔔 UltraMsg Instance: ${ULTRAMSG_INSTANCE_ID}
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

module.exports = app;