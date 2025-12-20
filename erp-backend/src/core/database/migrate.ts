import { db } from './db';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

/**
 * Run database migrations
 * Usage: ts-node src/core/database/migrate.ts
 */
async function runMigrations() {
    console.log('⏳ Running migrations...');

    try {
        await migrate(db, { migrationsFolder: './drizzle/migrations' });
        console.log('✅ Migrations completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    }
}

runMigrations();
