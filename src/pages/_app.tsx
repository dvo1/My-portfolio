import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from "next/font/google"


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  )
  
}
