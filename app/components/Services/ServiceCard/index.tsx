type ServiceCardProps = {
  bgColor: string
  title: string
  subtitle: string
  icon: React.ReactElement
}

const ServiceCard = ({
  bgColor = "bg-[#8984F8]",
  title,
  subtitle,
  icon,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center ${bgColor}`}
      >
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h1 className="mt-2 text-white text-lg">{title}</h1>
        <p className="mt-2 text-white text-sm lg:w-9/12">{subtitle}</p>
      </div>
    </div>
  )
}

export { ServiceCard }
