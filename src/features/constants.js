export const API_URL =
    process.env.MODE === 'development'
    ? 'http://localhost:8080'
    : `https://p-pay-gilt.vercel.app` || import.meta.env.VITE_VERCEL_URL;
