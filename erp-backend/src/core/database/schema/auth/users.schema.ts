import { pgTable, uuid, varchar, timestamp, boolean } from 'drizzle-orm/pg-core';

/**
 * Users table - Core identity only
 * No role information here (separation of concerns)
 */
export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    username: varchar('username', { length: 50 }).notNull().unique(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    phone: varchar('phone', { length: 20 }).unique(),
    passwordHash: varchar('password_hash', { length: 255 }).notNull(),
    status: varchar('status', { length: 20 }).notNull().default('ACTIVE'), // ACTIVE, SUSPENDED, LOCKED
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    lastLoginAt: timestamp('last_login_at'),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
