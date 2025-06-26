import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const payload = await request.json()

  try {
    const nestResponse = await fetch(`${process.env.NEST_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!nestResponse.ok) {
      const error = await nestResponse.json()
      return NextResponse.json(
        { message: error.message || 'Authentication failed' },
        { status: nestResponse.status },
      )
    }

    const json = await nestResponse.json()
    cookieStore.set('token', json.accessToken, {
      path: '/',
      expires: new Date(Date.now() + 3600000), // 1 hour
      httpOnly: true,
    })

    return NextResponse.json({
      data: json,
      status: nestResponse.status,
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Login failed' }, { status: 500 })
  }
}
