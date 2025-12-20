import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHealth() {
        return {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            service: 'University ERP API',
            version: '1.0.0',
        };
    }
}
