import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('URLs config', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    if (typeof window !== 'undefined') {
      delete (window as any).__env__;
    }
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it('should export valid HTTP/HTTPS URLs for all services', async () => {
    const { ORDER_URL, INVENTORY_URL, NOTIFICATION_URL } = await import('../src/lib/urls');

    expect(ORDER_URL).toMatch(/^https?:\/\//);
    expect(INVENTORY_URL).toMatch(/^https?:\/\//);
    expect(NOTIFICATION_URL).toMatch(/^https?:\/\//);
  });

  it('should export valid string URLs', async () => {
    const { ORDER_URL, INVENTORY_URL, NOTIFICATION_URL } = await import('../src/lib/urls');

    expect(typeof ORDER_URL).toBe('string');
    expect(typeof INVENTORY_URL).toBe('string');
    expect(typeof NOTIFICATION_URL).toBe('string');
  });
});
