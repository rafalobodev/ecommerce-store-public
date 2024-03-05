import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'store-three-theta',
  description: 'store-three-theta - O lugar para todas as suas compras.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
              {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
