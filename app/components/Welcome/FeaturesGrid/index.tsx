const gridStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"

const FeaturesGrid = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
      <div className={`rounded-tl-2xl ${gridStyles}`}>Reliability</div>
      <div className={gridStyles}>Security</div>
      <div className={`rounded-tr-2xl ${gridStyles}`}>Ethereum</div>
      <div className={`rounded-bl-2xl ${gridStyles}`}>Web 3.0</div>
      <div className={gridStyles}>Low Fees</div>
      <div className={`rounded-br-2xl ${gridStyles}`}>Blockchain</div>
    </div>
  )
}

export { FeaturesGrid }
