import { pgTable, uuid, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users.schema';
import { roles } from './roles.schema';

/**
 * User-Role assignment table
 * Supports:
 * - Multiple roles per user
 * - Temporary role assignments (expires_at)
 * - Audit trail (assigned_by)
 */
export const userRoles = pgTable('user_roles', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    roleId: uuid('role_id')
        .notNull()
        .references(() => roles.id, { onDelete: 'cascade' }),
    assignedBy: uuid('assigned_by').references(() => users.id), // Who assigned this role
    assignedAt: timestamp('assigned_at').notNull().defaultNow(),
    expiresAt: timestamp('expires_at'), // NULL = permanent, otherwise temporary role
});

export type UserRole = typeof userRoles.$inferSelect;
export type NewUserRole = typeof userRoles.$inferInsert;
