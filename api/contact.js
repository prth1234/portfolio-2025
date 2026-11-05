import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    let email = '';
    let message = '';

    // Handle different request body formats (JSON, URLSearchParams, FormData string)
    if (typeof req.body === 'string') {
      try {
        const parsed = JSON.parse(req.body);
        email = parsed.email || parsed['fields[email]'];
        message = parsed.message || parsed['fields[message]'];
      } catch {
        const params = new URLSearchParams(req.body);
        email = params.get('email') || params.get('fields[email]');
        message = params.get('message') || params.get('fields[message]');
      }
    } else if (req.body && typeof req.body === 'object') {
      email = req.body.email || req.body['fields[email]'];
      message = req.body.message || req.body['fields[message]'];
    }

    // Trim values
    email = email ? String(email).trim() : '';
    message = message ? String(message).trim() : '';

    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = port === 465;
    const user = process.env.EMAIL_USER || process.env.SMTP_USER;
    const pass = process.env.EMAIL_PASS || process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_TO || user || 'dearparthsingh@gmail.com';

    if (user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
      });

      const escapedMessage = message
        ? message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
        : '<em>(No message provided)</em>';

      const mailOptions = {
        from: `"Portfolio Contact Form" <${user}>`,
        replyTo: email,
        to: recipient,
        subject: `New Message from ${email} (Portfolio 2025)`,
        text: `You have received a new message from your portfolio contact form:\n\nEmail: ${email}\nMessage: ${message || '(No message provided)'}\n\nTimestamp: ${new Date().toISOString()}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #ffffff;">
            <div style="border-bottom: 3px solid #ffe32e; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 20px; color: #111;">New Portfolio Inquiry</h2>
              <span style="font-size: 13px; color: #888;">Submitted via portfolio-2025</span>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 6px 0; font-size: 14px; color: #666; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">From:</p>
              <p style="margin: 0; font-size: 16px; font-weight: 500;"><a href="mailto:${email}" style="color: #000; text-decoration: underline;">${email}</a></p>
            </div>
            <div style="margin-bottom: 24px; padding: 16px; background-color: #f9f4eb; border-radius: 6px; border: 1px solid rgba(0,0,0,0.06);">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #555; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Message:</p>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #1a1a1a; white-space: pre-wrap;">${escapedMessage}</p>
            </div>
            <div style="font-size: 12px; color: #999; border-top: 1px solid #f0f0f0; padding-top: 14px;">
              Sent on ${new Date().toLocaleString('en-US', { timeZoneName: 'short' })}
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.log('--- Mock Contact Form Submission ---');
      console.log('Email:', email);
      console.log('Message:', message);
      console.log('Receiver:', recipient);
      console.log('Note: To send actual emails, add EMAIL_USER and EMAIL_PASS environment variables in your Vercel Project Settings.');
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! I will get in touch with you shortly.',
    });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again or reach out directly.',
    });
  }
}
