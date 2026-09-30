declare global {
  interface Window {
    __env__?: {
      ORDER_URL?: string;
      INVENTORY_URL?: string;
      NOTIFICATION_URL?: string;
    };
  }
}

const env = typeof window !== 'undefined' ? window.__env__ : undefined;

export const ORDER_URL =
  env?.ORDER_URL ||
  import.meta.env.VITE_API_ORDER_URL ||
  'http://localhost:3000';

export const INVENTORY_URL =
  env?.INVENTORY_URL ||
  import.meta.env.VITE_API_INVENTORY_URL ||
  'http://localhost:3001';

export const NOTIFICATION_URL =
  env?.NOTIFICATION_URL ||
  import.meta.env.VITE_API_NOTIFICATION_URL ||
  'http://localhost:3002';
