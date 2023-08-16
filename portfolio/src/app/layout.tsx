import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar, Footer} from '@components/globals'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Huaidian Daniel Hou',
  description: 'Daniel Hou\'s Personal Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-blue-900 dark:to-gray-900">
          <Navbar/>
          {children}
          <Footer/>
        </section>
      </body>
    </html>
  )
}
