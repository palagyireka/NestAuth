'use client'
import { withAuth } from '../components/HOC/withAuth'
import { useLogout } from '../hooks/useLogout'

const Main = () => {
  const logout = useLogout()
  return (
    <div className="w-screen h-screen font-[family-name:var(--font-geist-sans)] flex items-center justify-center">
      <main className="">
        <button
          type="submit"
          onClick={logout}
          className="w-full bg-[var(--form-btn-color)] text-white p-2 rounded "
        >
          Kijelentkezés
        </button>
      </main>
    </div>
  )
}

export default withAuth(Main)
