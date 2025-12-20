# University ERP Backend

Industry-grade University ERP system built with NestJS, PostgreSQL, and Drizzle ORM.

## Architecture

- **Modular Monolith**: Clean module boundaries, can be split into microservices later
- **RBAC-First**: Permission-based access control at the core
- **Audit-Ready**: Every sensitive action is logged
- **TypeScript (Strict)**: Type-safe throughout

## Tech Stack

- **Runtime**: Node.js + TypeScript (strict mode)
- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Auth**: JWT (Access + Refresh tokens)
- **Password Hashing**: Argon2
- **Logging**: Pino
- **Testing**: Jest + Supertest

## Project Structure

```
erp-backend/
├── src/
│   ├── config/          # Configuration layer
│   ├── common/          # Cross-cutting concerns (guards, filters, interceptors)
│   ├── core/            # Core systems (audit, RBAC, database)
│   ├── modules/         # Feature modules (auth, users, library, etc.)
│   └── shared/          # Shared contracts (DTOs, enums, interfaces)
├── drizzle/             # Database migrations
└── test/                # E2E tests
```

## Architectural Rules

### Module Boundaries
- **No cross-module imports**: Modules communicate via services only
- **Controllers are thin**: Routing only, no business logic
- **No DB access in controllers**: Services own data access

### Permissions
- **Permissions live in `core/permissions` only**: Infrastructure, not business logic
- Modules **consume** permissions, never own them
- Permission format: `<domain>:<resource>:<action>` (e.g., `library:catalog:create`)

### Shared Directory
- **`shared/` is read-only for modules**: No module can write logic here
- Only contains: DTOs, enums, and type interfaces
- Prevents becoming a dumping ground

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials and secrets
   ```

3. **Run database migrations:**
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

4. **Seed initial data:**
   ```bash
   npm run db:seed
   ```

5. **Start development server:**
   ```bash
   npm run start:dev
   ```

## Available Scripts

- `npm run start:dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start:prod` - Start production server
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run db:generate` - Generate Drizzle migration files
- `npm run db:migrate` - Run pending migrations
- `npm run db:seed` - Seed initial data (roles, permissions)
- `npm run db:studio` - Open Drizzle Studio (database GUI)

## API Documentation

Once running, API is available at: `http://localhost:3000/api/v1`

Health check: `GET /api/v1/health`

## Module 1: Auth & RBAC

First module implements:
- Authentication (login, refresh tokens)
- Role-based access control
- Permission-based guards
- Audit logging
- User management

## License

UNLICENSED - University Project
