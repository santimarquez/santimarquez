import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from './contact';

const sendMailMock = vi.fn().mockResolvedValue(undefined);

vi.mock('nodemailer', () => ({
  default: {
    createTransport: () => ({
      sendMail: sendMailMock,
    }),
  },
}));

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    vi.stubEnv('MAIL_HOST', 'smtp.example.com');
    vi.stubEnv('MAIL_USERNAME', 'user');
    vi.stubEnv('MAIL_PASSWORD', 'pass');
    sendMailMock.mockClear();
  });

  it('returns 400 when Content-Type is not application/json', async () => {
    const req = new Request('https://x/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: '{}',
    });
    const res = await POST({ request: req } as any);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toContain('Content-Type');
  });

  it('returns 400 for invalid JSON body', async () => {
    const req = new Request('https://x/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'not json',
    });
    const res = await POST({ request: req } as any);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Invalid JSON');
  });

  it('returns 400 when name is missing', async () => {
    const req = new Request('https://x/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'a@b.com', message: 'Hi' }),
    });
    const res = await POST({ request: req } as any);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toContain('required');
  });

  it('returns 400 when email is missing', async () => {
    const req = new Request('https://x/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Jane', message: 'Hi' }),
    });
    const res = await POST({ request: req } as any);
    expect(res.status).toBe(400);
  });

  it('returns 400 when message is missing', async () => {
    const req = new Request('https://x/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Jane', email: 'j@x.com' }),
    });
    const res = await POST({ request: req } as any);
    expect(res.status).toBe(400);
  });

  it('returns 200 and sends mail when all fields present', async () => {
    const req = new Request('https://x/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Jane',
        email: 'jane@example.com',
        message: 'Hello',
      }),
    });
    const res = await POST({ request: req } as any);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    expect(sendMailMock).toHaveBeenCalledOnce();
  });
});
