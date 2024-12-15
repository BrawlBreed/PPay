export const API_URL =
    process.env.MODE === 'development'
    ? 'http://localhost:8080'
    : `https://${process.env.VITE_VERCEL_URL}`
