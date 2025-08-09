import nodemailer from 'nodemailer';
import https from 'https';
import crypto from 'crypto';

const httpsAgent = new https.Agent({
  secureOptions:
    crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT |
    crypto.constants.SSL_OP_NO_TLSv1_3,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: parseInt(process.env.EMAIL_PORT || '443', 10), // use 465 by default for SSL
  secure: process.env.EMAIL_SECURE === 'true',         // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 10000,
  agent: httpsAgent,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, requirement } = body;

    console.log("📬 New email submission received");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@eviez.com.tr',  // update if you want another recipient for GlobalGreenCarbon
      subject: `GCC Inquiry: ${subject}`,
      text: `
New Inquiry from GCC Website:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${requirement}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
