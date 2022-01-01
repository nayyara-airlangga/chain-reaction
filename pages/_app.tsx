import { Footer } from "@components"
import type { AppProps } from "next/app"

import "../app/styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-display">
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
