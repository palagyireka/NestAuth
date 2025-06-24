export interface AuthResult {
  userId: number;
  email: string;
  accessToken: string;
  refreshToken?: string; // Optional field for refresh token
}
