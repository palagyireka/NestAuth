import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { logout as logoutAction } from '../store/authSlice'

export function useLogout() {
  const dispatch = useDispatch()
  const router = useRouter()

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      })

      dispatch(logoutAction())

      router.push('/auth/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return logout
}
