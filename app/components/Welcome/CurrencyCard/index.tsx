import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"

type CurrencyCardProps = {
  address?: string
}

const CurrencyCard = ({ address = "0xABCDEF12" }: CurrencyCardProps) => {
  return (
    <div className="p-3 justify-end items-start flex-col rounded-xl h-52 sm:w-96 w-full mb-5 eth-card white-glassmorphism">
      <div className="flex justify-between flex-col w-full h-full">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <SiEthereum fontSize={21} color="#fff" />
          </div>
          <BsInfoCircle fontSize={17} color="#fff" />
        </div>
        <div>
          <p className="text-white font-light text-sm">{address}</p>
          <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
        </div>
      </div>
    </div>
  )
}

export { CurrencyCard }
