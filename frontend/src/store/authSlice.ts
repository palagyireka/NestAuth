import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AuthState from '../app/types/AuthState'
import User from '../app/types/User'

const initialState: AuthState = {
  jwtAccessToken: null,
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ jwtAccessToken: string; user: User }>,
    ) {
      state.jwtAccessToken = action.payload.jwtAccessToken
      state.user = action.payload.user
      state.isAuthenticated = true
    },
    logout(state) {
      state.jwtAccessToken = null
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
