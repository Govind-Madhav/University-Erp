export interface JwtPayload {
    sub: string; // user ID
    username: string;
    role: string; // current active role
    permissions: string[]; // flattened permission codes
}

export interface RefreshTokenPayload {
    sub: string;
    tokenId: string;
}

export interface AuthenticatedUser {
    id: string;
    username: string;
    email: string;
    currentRole: string;
    permissions: string[];
}
