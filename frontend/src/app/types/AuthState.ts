import User from './User'

export default interface AuthState {
  jwtAccessToken: string | null
  user: User | null
  isAuthenticated: boolean
}
