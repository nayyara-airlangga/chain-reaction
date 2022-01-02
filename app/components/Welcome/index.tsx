import React, { useContext, useState } from "react"
import { AiFillPlayCircle } from "react-icons/ai"

import { CurrencyCard } from "./CurrencyCard"
import { FeaturesGrid } from "./FeaturesGrid"
import { TransactionForm } from "./TransactionForm"
import { TransactionContext } from "@contexts"

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    formHandler,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext)

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { recipientAddress, amount, keyword, message } = formData

    if (!recipientAddress || !amount || !keyword || !message) {
      return
    }

    await sendTransaction()
  }

  return (
    <section id="#" className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            ChainReaction.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          <FeaturesGrid />
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <CurrencyCard address={currentAccount ?? "Address"} />
          <TransactionForm
            formData={formData}
            isLoading={isLoading}
            formHandler={formHandler}
            submitHandler={submitHandler}
          />
        </div>
      </div>
    </section>
  )
}

export { Welcome }
