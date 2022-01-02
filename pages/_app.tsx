import type { AppProps } from "next/app"
import dynamic from "next/dynamic"

import { Footer } from "@components"
import { TransactionProvider } from "@contexts"

import "../app/styles/globals.css"

const DynamicTransactionProvider = dynamic(
  () =>
    import("@contexts").then(
      (context) => context.TransactionProvider
    ) as Promise<typeof TransactionProvider>,
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DynamicTransactionProvider>
      <div className="font-display">
        <Component {...pageProps} />
        <Footer />
      </div>
    </DynamicTransactionProvider>
  )
}

export default MyApp
