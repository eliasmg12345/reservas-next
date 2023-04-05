import '@/styles/globals.css'
import { ReservaProvider } from '../context/ReservaProvider'

export default function App({ Component, pageProps }) {
  return (
    <ReservaProvider>
      <Component {...pageProps} />
    </ReservaProvider>
  )
}
