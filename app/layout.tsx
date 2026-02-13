import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})
const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Happy Valentine\'s Day',
  description: 'A special Valentine\'s gift for the love of my life',
}

export const viewport: Viewport = {
  themeColor: '#dc264e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_playfair.variable} ${_inter.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
