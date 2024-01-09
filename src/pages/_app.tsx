import type { AppProps } from 'next/app'

import '../shared/styles/globals.css'
import { Inter } from 'next/font/google'
import { ToastContainerComponent } from '@/services/toast'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <main className={inter.className}>
    <ToastContainerComponent />
    <Component {...pageProps} />
  </main>
}