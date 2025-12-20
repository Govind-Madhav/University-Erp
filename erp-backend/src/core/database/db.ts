import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Database connection configuration
const connectionString = process.env.DATABASE_URL || '';

if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set');
}

// Create PostgreSQL client
const client = postgres(connectionString, {
    max: 10, // Connection pool size
    idle_timeout: 20,
    connect_timeout: 10,
});

// Create Drizzle ORM instance
export const db = drizzle(client, { schema });

// Export schema for type inference and migrations
export { schema };
