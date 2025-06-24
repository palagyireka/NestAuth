import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const payload = await request.json()

  try {
    const res = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const json = await res.json()

    if (!res.ok) {
      console.error('Login failed:', json)
    }

    cookieStore.set('token', json.accessToken, {
      path: '/',
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    })
    return NextResponse.json(json, {
      status: res.status,
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Login failed' }, { status: 500 })
  }
}
