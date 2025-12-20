import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import { validateEnv } from './config/env.validation';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig, databaseConfig, jwtConfig],
            validate: validateEnv,
            envFilePath: '.env',
        }),
        // Core modules will be added here
        // Feature modules will be added here
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
