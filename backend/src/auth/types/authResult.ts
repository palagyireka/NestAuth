import { LoginData } from './loginData'
export interface AuthResult {
  user: LoginData
  accessToken: string
  refreshToken?: string // Optional field for refresh token
}
