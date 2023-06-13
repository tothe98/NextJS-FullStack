import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemePovider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'PracticePage',
  description: 'This is a practice page for Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemePovider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemePovider>
      </body>
    </html>
  )
}
