import { ethers } from "ethers"

export interface Transaction {
  id: number
  url: string
  message: string
  keyword: string
  timestamp: string
  sender: string
  receiver: string
  amount: ethers.BigNumber
}
