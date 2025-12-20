import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    name: process.env.APP_NAME || 'University ERP',
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '3000', 10),
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
}));
