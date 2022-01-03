import React, { useState, useEffect, createContext } from "react"
import { ethers } from "ethers"

import { ContractAbi, ContactAddress } from "@constants"

declare let window: any

type FormData = {
  recipientAddress: string
  amount: string
  keyword: string
  message: string
}

type TransactionProviderProps = {
  children: React.ReactNode
}

type TransactionContextProps = {
  isLoading: boolean
  connectWallet: () => Promise<void>
  currentAccount: string
  formData: FormData
  formHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  sendTransaction: () => Promise<void>
  networkChain: string
}

const TransactionContext = createContext<TransactionContextProps>({
  isLoading: false,
  connectWallet: async () => {},
  currentAccount: "",
  formData: {
    recipientAddress: "",
    amount: "",
    keyword: "",
    message: "",
  },
  formHandler: (event: React.ChangeEvent<HTMLInputElement>) => {},
  sendTransaction: async () => {},
  networkChain: "",
})

const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const ethereum = window.ethereum
  const networkChain = ethereum.chainId

  const [isLoading, setIsLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  )
  const [currentAccount, setCurrentAccount] = useState<string>("")
  const [formData, setFormData] = useState({
    recipientAddress: "",
    amount: "",
    keyword: "",
    message: "",
  })

  const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setFormData({ ...formData, [event.target.name]: value })
  }

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

  const sendTransaction = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask")
      }

      const { recipientAddress, amount, keyword, message } = formData
      const parsedAmount = ethers.utils.parseEther(amount)

      const transactionContract = getEthereumContract()

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: recipientAddress,
            gas: "0x5208", // 21000 Gwei
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await transactionContract.addToBlockchain(
        recipientAddress,
        parsedAmount,
        message,
        keyword
      )

      setIsLoading(true)
      console.log(`Loading - ${transactionHash.hash}`)

      await transactionHash.wait()

      setIsLoading(false)
      console.log(`Success - ${transactionHash.hash}`)

      setFormData({
        recipientAddress: "",
        amount: "",
        keyword: "",
        message: "",
      })

      const transactionCount = await transactionContract.getTransactionCount()

      setTransactionCount(transactionCount.toNumber())
    } catch (error) {
      console.log(error)

      throw new Error("No ethereum object found")
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  })

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        formHandler,
        sendTransaction,
        isLoading,
        networkChain,
      }}
    >
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

  return transactionContract
}

export { TransactionContext, TransactionProvider }
