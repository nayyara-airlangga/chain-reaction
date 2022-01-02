import { BiSearchAlt } from "react-icons/bi"
import { BsShieldFillCheck } from "react-icons/bs"
import { RiHeart2Fill } from "react-icons/ri"

const ServiceItems = [
  {
    bgColor: "bg-[#2952e3]",
    title: "Guaranteed security",
    subtitle:
      "We're constantly improving our security measures so that every transaction made here remains secure.",
    icon: <BsShieldFillCheck fontSize={21} className="text-white" />,
  },
  {
    bgColor: "bg-[#8984F8]",
    title: "Great exchange rates",
    subtitle:
      "Our services boist great exchange rates whilst maintaining a great load balance.",
    icon: <BiSearchAlt fontSize={21} className="text-white" />,
  },
  {
    bgColor: "bg-[#F84550]",
    title: "Fast and efficient transactions",
    subtitle:
      "The transactions that happen here are done in a matter of seconds.",
    icon: <RiHeart2Fill fontSize={21} className="text-white" />,
  },
]

export { ServiceItems }
