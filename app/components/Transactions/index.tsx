import { useContext } from "react"

import { TransactionContext } from "@contexts"
import { TransactionCard } from "./TransactionCard"

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext)

  return (
    <section
      id="transaction"
      className="flex w-full justify-center items-center 2xl:p-20 gradient-bg-transactions"
    >
      <div className="flex flex-col lg:m-12 my-12 mx-4">
        <h3 className="text-white text-3xl text-center my-2">
          {currentAccount
            ? "Latest Transactions"
            : "Connect your account to see your latest transactions"}
        </h3>
        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.map((transaction, index) => (
            <TransactionCard key={transaction.id} {...transaction} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Transactions }
