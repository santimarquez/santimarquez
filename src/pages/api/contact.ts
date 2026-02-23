import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { escapeHtml } from '../../utils/escapeHtml';

export const prerender = false;

// Use process.env at runtime so production Docker/container env vars are used (import.meta.env is build-time only).
function getTransporter() {
  const host = process.env.MAIL_HOST;
  const port = Number(process.env.MAIL_PORT) || 587;
  const user = process.env.MAIL_USERNAME;
  const pass = process.env.MAIL_PASSWORD;
  const secure = process.env.MAIL_ENCRYPTION === 'ssl';

  if (!host || !user || !pass) {
    throw new Error('Missing MAIL_HOST, MAIL_USERNAME or MAIL_PASSWORD');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: true },
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('content-type') !== 'application/json') {
    return new Response(JSON.stringify({ error: 'Content-Type must be application/json' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = String(body?.name ?? '').trim();
  const email = String(body?.email ?? '').trim();
  const message = String(body?.message ?? '').trim();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Name, email and message are required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const fromAddress = process.env.MAIL_FROM_ADDRESS || 'noreply@santimarquez.es';
  const fromName = process.env.MAIL_FROM_NAME || 'Santi Márquez';

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: fromAddress,
      replyTo: email,
      subject: `[Contact] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    });
  } catch (err) {
    console.error('Contact form send error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

