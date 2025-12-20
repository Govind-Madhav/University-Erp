import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
    secret: process.env.JWT_SECRET || 'change-me-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN || '15m',
    refreshSecret: process.env.REFRESH_SECRET || 'change-me-in-production',
    refreshExpiresIn: process.env.REFRESH_EXPIRES_IN || '7d',
}));
