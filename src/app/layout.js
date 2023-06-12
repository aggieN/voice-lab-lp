import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aggie\'s Voice Lab',
  description: 'Przestrzeń kreatywnego śpiewu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
