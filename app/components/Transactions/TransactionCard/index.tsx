import { useContext } from "react"

import { Transaction } from "@models"
import { TransactionContext } from "@contexts"
import { useFetchGIF } from "@hooks"
import { getNetworkChain, shortenAddress } from "@utils"

const TransactionCard = ({
  receiver,
  sender,
  timestamp,
  message,
  keyword,
  amount,
  url,
}: Transaction) => {
  const { networkChain } = useContext(TransactionContext)

  const gifUrl = useFetchGIF(keyword)

  const senderUrl = `https://${getNetworkChain(
    networkChain
  )}etherscan.io/address/${sender}`

  const receiverUrl = `https://${getNetworkChain(
    networkChain
  )}etherscan.io/address/${receiver}`

  return (
    <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] min-w-[270px] smax-w-[300px] flex-col p-3 hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-2">
          <a href={senderUrl} target="_blank" rel="noopener noreferrer">
            <p className="text-white text-base">
              From: {shortenAddress(sender)}
            </p>
          </a>
          <a href={receiverUrl} target="_blank" rel="noopener noreferrer">
            <p className="text-white text-base">
              To: {shortenAddress(receiver)}
            </p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl}
          alt="GIF"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black py-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export { TransactionCard }
