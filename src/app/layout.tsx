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
      <head>
        <link rel="icon" href="/static/index/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <section className="bg-gradient-to-br from-pink-50 to-yellow-50  dark:from-blue-900 dark:to-gray-900">
          <main className="flex flex-col items-center justify-between">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <Navbar/>
            <div className="flex w-11/16 flex-col items-center justify-between">
              <div className="min-h-screen p-8 pt-24 max-w-4xl font-serif">
                
                {children}
              </div>
            </div>
            <Footer/>
          </main>
        </section>
      </body>
    </html>
  )
}
