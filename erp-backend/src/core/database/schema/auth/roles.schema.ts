import { pgTable, uuid, varchar, text, boolean, timestamp } from 'drizzle-orm/pg-core';

/**
 * Roles table - Role definitions
 * System roles (ADMIN, STUDENT, etc.) + custom roles
 */
export const roles = pgTable('roles', {
    id: uuid('id').defaultRandom().primaryKey(),
    code: varchar('code', { length: 50 }).notNull().unique(), // SUPER_ADMIN, STUDENT, LIBRARY_STAFF, etc.
    name: varchar('name', { length: 100 }).notNull(),
    description: text('description'),
    isSystem: boolean('is_system').notNull().default(false), // System roles cannot be deleted
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type Role = typeof roles.$inferSelect;
export type NewRole = typeof roles.$inferInsert;
