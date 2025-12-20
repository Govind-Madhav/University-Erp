import { pgTable, uuid, timestamp, primaryKey } from 'drizzle-orm/pg-core';
import { roles } from './roles.schema';
import { permissions } from './permissions.schema';

/**
 * Role-Permission junction table
 * Defines which permissions each role has
 */
export const rolePermissions = pgTable(
    'role_permissions',
    {
        id: uuid('id').defaultRandom().notNull(),
        roleId: uuid('role_id')
            .notNull()
            .references(() => roles.id, { onDelete: 'cascade' }),
        permissionId: uuid('permission_id')
            .notNull()
            .references(() => permissions.id, { onDelete: 'cascade' }),
        createdAt: timestamp('created_at').notNull().defaultNow(),
    },
    (table) => ({
        pk: primaryKey({ columns: [table.roleId, table.permissionId] }),
    }),
);

export type RolePermission = typeof rolePermissions.$inferSelect;
export type NewRolePermission = typeof rolePermissions.$inferInsert;
