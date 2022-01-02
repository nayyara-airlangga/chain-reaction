import { ServiceCard } from "./ServiceCard"
import { ServiceItems } from "@constants"

const Services = () => {
  return (
    <section
      id="services"
      className="flex lg:flex-row flex-col w-full justify-center items-center gradient-bg-services"
    >
      <div className="flex lg:flex-row flex-col items-center justify-between lg:m-20 my-12 mx-4">
        <div className="flex flex-1 flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl my-2 text-gradient">
            Our Services
          </h1>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-items-start lg:m-20 my-8 mx-4">
        {ServiceItems.map(({ bgColor, icon, title, subtitle }, index) => (
          <ServiceCard
            key={title + index}
            bgColor={index === 2 ? "bg-[#F84550]" : bgColor}
            icon={icon}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
    </section>
  )
}

export { Services }
