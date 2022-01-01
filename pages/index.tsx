import type { NextPage } from "next"
import Head from "next/head"

import {
  Footer,
  Navbar,
  Loader,
  Services,
  Transactions,
  Welcome,
} from "@components"

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default HomePage
