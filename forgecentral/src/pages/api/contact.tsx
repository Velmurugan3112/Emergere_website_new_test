import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Configure your SMTP transport here
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'your@email.com',
      pass: process.env.SMTP_PASS || 'yourpassword',
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER || 'your@email.com',
      subject: 'New Contact Us Message',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\nMessage: ${message}`,
    });
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send email.' });
  }
}
