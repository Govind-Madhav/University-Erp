import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        bufferLogs: true,
    });

    const configService = app.get(ConfigService);
    const port = configService.get<number>('app.port') || 3000;

    // Global validation pipe
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: {
                enableImplicitConversion: true,
            },
        }),
    );

    // CORS configuration
    app.enableCors({
        origin: configService.get<string>('app.corsOrigin') || 'http://localhost:5173',
        credentials: true,
    });

    // Global prefix
    app.setGlobalPrefix('api/v1');

    await app.listen(port);
    console.log(`🚀 Server running on http://localhost:${port}/api/v1`);
}

bootstrap();
