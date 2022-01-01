import React from "react"

import { FormInput } from "../FormInput"
import { Loader } from "@components"

type FormData = {
  recipientAddress: string
  amount: string
  keyword: string
  message: string
}

type TransactionFormProps = {
  isLoading: boolean
  formData: FormData
  formHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void
}

const TransactionForm = ({
  isLoading,
  formData,
  formHandler,
  submitHandler,
}: TransactionFormProps) => {
  return (
    <form
      method="POST"
      action="/"
      onSubmit={submitHandler}
      className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism"
    >
      <FormInput
        placeholder="Recipient Address"
        name="recipientAddress"
        type="text"
        value={formData.recipientAddress}
        onChange={formHandler}
      />
      <FormInput
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        value={formData.amount}
        onChange={formHandler}
      />
      <FormInput
        placeholder="Keyword (GIF)"
        name="keyword"
        type="text"
        value={formData.keyword}
        onChange={formHandler}
      />
      <FormInput
        placeholder="Message"
        name="message"
        type="text"
        value={formData.message}
        onChange={formHandler}
      />
      <div className="h-[1px] w-full bg-gray-400 my-2" />
      {isLoading ? (
        <Loader />
      ) : (
        <button
          type="submit"
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
        >
          Send
        </button>
      )}
    </form>
  )
}

export { TransactionForm }
