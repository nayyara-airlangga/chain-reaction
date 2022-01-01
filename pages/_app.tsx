import { Navbar, Footer } from "@components"
import type { AppProps } from "next/app"

import "../app/styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
