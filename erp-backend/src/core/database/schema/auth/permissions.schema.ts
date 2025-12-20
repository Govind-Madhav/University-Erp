import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';

/**
 * Permissions table - Permission catalog
 * Format: domain:resource:action (e.g., library:catalog:create)
 * These are seeded, rarely edited
 */
export const permissions = pgTable('permissions', {
    id: uuid('id').defaultRandom().primaryKey(),
    code: varchar('code', { length: 100 }).notNull().unique(), // library:catalog:create
    module: varchar('module', { length: 50 }).notNull(), // library, admission, exams, etc.
    resource: varchar('resource', { length: 50 }).notNull(), // catalog, circulation, etc.
    action: varchar('action', { length: 50 }).notNull(), // create, read, update, delete, etc.
    description: text('description'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type Permission = typeof permissions.$inferSelect;
export type NewPermission = typeof permissions.$inferInsert;
