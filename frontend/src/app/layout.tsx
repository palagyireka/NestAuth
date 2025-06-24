import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import { ReduxProvider } from '../providers'
import './globals.css'

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bejelentkezés',
  description: 'Próba feladat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={` ${sourceSans.variable} antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
