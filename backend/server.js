const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// UltraMsg Configuration
const ULTRAMSG_INSTANCE_ID = 'instance135111';
const ULTRAMSG_TOKEN = 'gnww78b0rjwsf143';
const ULTRAMSG_URL = `https://api.ultramsg.com/${ULTRAMSG_INSTANCE_ID}/messages/chat`;

// Route untuk mengirim pesan WhatsApp dan Email
app.post('/api/contact', async (req, res) => {
  try {
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

    const whatsappResponse = await axios.post(ULTRAMSG_URL, whatsappData, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        token: ULTRAMSG_TOKEN
      }
    });

    console.log('WhatsApp sent successfully:', whatsappResponse.data);

    // Return success response
    res.json({
      success: true,
      message: 'Pesan berhasil dikirim ke WhatsApp dan Email!',
      data: {
        whatsapp: whatsappResponse.data,
        emailSent: true // EmailJS akan dihandle di frontend
      }
    });

  } catch (error) {
    console.error('Error sending message:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Gagal mengirim pesan',
      error: error.response?.data || error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});