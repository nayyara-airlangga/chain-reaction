import dynamic from "next/dynamic"
import { useState, useEffect, createContext } from "react"
import { ethers } from "ethers"

import { ContractAbi, ContactAddress } from "@constants"

declare let window: any

type TransactionProviderProps = {
  children: React.ReactNode
}

const TransactionContext = createContext({
  connectWallet: async () => {},
  currentAccount: "",
})

const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const ethereum = window.ethereum

  const [currentAccount, setCurrentAccount] = useState<string>("")

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask")
      }

      const accounts = await ethereum.request({
        method: "eth_accounts",
      })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log("No accounts found")
      }
    } catch (error) {
      throw new Error("No ethereum object found.")
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask")
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      })

      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
      throw new Error("No ethereum object found")
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  })

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  )
}

const getEthereumContract = () => {
  const ethereum = window.ethereum

  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    ContactAddress,
    ContractAbi,
    signer
  )

  console.log({ provider, signer, transactionContract })
}

export { TransactionContext, TransactionProvider }
