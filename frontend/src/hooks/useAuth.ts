import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const useAuth = () => {
  const { jwtAccessToken, user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  )
  const loading = !jwtAccessToken && !user && isAuthenticated === null

  return {
    jwtAccessToken,
    user,
    isAuthenticated,
    loading,
  }
}
