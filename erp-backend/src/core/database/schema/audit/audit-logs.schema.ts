import { pgTable, uuid, varchar, text, json, timestamp } from 'drizzle-orm/pg-core';
import { users } from '../auth/users.schema';

/**
 * Audit logs table - Complete audit trail
 * Logs all sensitive actions:
 * - Authentication events (login, logout, role switch)
 * - Data mutations (create, update, delete)
 * - Sensitive reads (viewing grades, financial data)
 * - Permission denials
 */
export const auditLogs = pgTable('audit_logs', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }), // Nullable - user may be deleted
    action: varchar('action', { length: 100 }).notNull(), // LOGIN, DATA_UPDATE, PERMISSION_DENIED, etc.
    resource: varchar('resource', { length: 100 }), // users, library:books, exams:results, etc.
    resourceId: varchar('resource_id', { length: 255 }), // ID of affected resource
    metadata: json('metadata'), // Additional context (old values, new values, etc.)
    ipAddress: varchar('ip_address', { length: 45 }), // IPv4/IPv6
    userAgent: text('user_agent'),
    status: varchar('status', { length: 20 }).notNull(), // SUCCESS, FAILURE, DENIED
    createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type AuditLog = typeof auditLogs.$inferSelect;
export type NewAuditLog = typeof auditLogs.$inferInsert;
