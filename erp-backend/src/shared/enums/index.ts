export enum UserStatus {
    ACTIVE = 'ACTIVE',
    SUSPENDED = 'SUSPENDED',
    LOCKED = 'LOCKED',
}

export enum RoleCode {
    // System Roles
    SUPER_ADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',

    // Academic Roles
    DEAN = 'DEAN',
    HOD = 'HOD',
    FACULTY = 'FACULTY',
    STUDENT = 'STUDENT',

    // Staff Roles
    LIBRARY_STAFF = 'LIBRARY_STAFF',
    EXAM_CONTROLLER = 'EXAM_CONTROLLER',
    ADMISSION_OFFICER = 'ADMISSION_OFFICER',
    ACCOUNTANT = 'ACCOUNTANT',

    // Support Roles
    IT_SUPPORT = 'IT_SUPPORT',
}

export enum PermissionModule {
    AUTH = 'auth',
    USERS = 'users',
    ROLES = 'roles',
    PERMISSIONS = 'permissions',
    LIBRARY = 'library',
    ADMISSION = 'admission',
    STUDENTS = 'students',
    ACADEMICS = 'academics',
    EXAMS = 'exams',
    NOTICES = 'notices',
    REPORTS = 'reports',
}

export enum PermissionAction {
    CREATE = 'create',
    READ = 'read',
    UPDATE = 'update',
    DELETE = 'delete',
    MANAGE = 'manage',
    APPROVE = 'approve',
    REJECT = 'reject',
    ISSUE = 'issue',
    RETURN = 'return',
    PUBLISH = 'publish',
    MODERATE = 'moderate',
}
