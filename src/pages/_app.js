import '@/styles/globals.css'
import {Inter, Nunito, Open_Sans} from "next/font/google";

const inter = Nunito({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return <Component className={`${inter.className}`} {...pageProps} />
}
