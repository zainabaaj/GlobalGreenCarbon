// app/api/contact/route.js

import nodemailer from 'nodemailer';
import https from 'https';
import crypto from 'crypto';
// import dotenv from 'dotenv';


// dotenv.config();

// No dotenv.config() in app directory routes – use `.env.local` and ensure variables are loaded at build time

const httpsAgent = new https.Agent({
  secureOptions:
    crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT |
    crypto.constants.SSL_OP_NO_TLSv1_3,
});

const transporter = nodemailer.createTransport({
  
  service: 'gmail',
  port: parseInt(process.env.EMAIL_PORT || '443', 10),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass:  process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 10000,
  agent: httpsAgent,
});

// ✅ Route Handler (used instead of req/res in /app)
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log("📬 New email submission received");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'daniel@globalgreencarbon.com.au',
      subject: `GCC Inquiry: ${subject}`,
      text: `
New Inquiry from GCC Website:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
console.log(process.env.EMAIL_USER)

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}