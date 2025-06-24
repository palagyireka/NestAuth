'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '@/src/store/authSlice'
import LogoSvg from './Svgs/logo'
import LogoBgSvg from './Svgs/logo-bg'

export default function LoginPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})
    setLoading(true)
    if (!email || !password) {
      setErrors({
        email: ['Email is required'],
        password: ['Password is required'],
      })
      setLoading(false)
      return
    }
    const payload = {
      email,
      password,
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }
      console.log('Login successful:', data)
      dispatch(
        login({
          jwtAccessToken: data.accessToken,
          user: data.email,
        }),
      )
      router.push('/')
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="fixed top-[278px] left-[968px]">
        <LogoBgSvg />
      </div>
      <div className="flex flex-col w-[448px] h-[466px]">
        <div className="flex flex-col items-center justify-around h-[114px]">
          <LogoSvg />
          <h1 className="text-2xl mb-2 font-semibold tracking-[0.5px]">
            Bejelentkezés
          </h1>
        </div>
        <form
          className="bg-white p-6 rounded shadow-md border-1 border-primary-border"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block mb-2 font-semibold text-primary text-base
"
            >
              E-mail cím:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-1 border-primary-border rounded-sm w-[400px] text-input-color"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-semibold text-primary text-base
"
            >
              Jelszó:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-1 border-primary-border rounded-sm w-[400px] text-input-color"
              required
            />
          </div>
          <div className="flex items-center mb-4 text-input-color px-2 gap-x-2 text-sm">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">Emlékezzen rám</label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--form-btn-color)] text-white p-2 rounded "
          >
            {loading ? (
              <span className="animate-spin">Folyamatban...</span>
            ) : (
              'Bejelentkezés'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
