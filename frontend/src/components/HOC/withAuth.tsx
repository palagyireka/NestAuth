'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '@/src/hooks/useAuth'

export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const router = useRouter()
    const { jwtAccessToken, isAuthenticated, user } = useAuth()

    useEffect(() => {
      if (!isAuthenticated || !jwtAccessToken || !user) {
        router.push('/auth/login')
      }
    }, [isAuthenticated, jwtAccessToken, user, router])

    if (!isAuthenticated || !jwtAccessToken || !user) {
      return <div>Töltés...</div>
    }

    return <Component {...props} />
  }
}
