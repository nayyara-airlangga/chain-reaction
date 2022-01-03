import { useState } from "react"
import Image from "next/image"
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import { NavLink } from "./NavLink"
import Logo from "@assets/images/logo.png"
import { NavItems } from "@constants"

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial items-center">
        <div className="cursor-pointer relative w-16 h-16">
          <Image src={Logo} alt="Logo" layout="fill" objectFit="cover" />
        </div>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {NavItems.map((navItem, index) => (
          <NavLink key={navItem + index}>{navItem}</NavLink>
        ))}
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> */}
      </ul>
      <div className="flex relative">
        {navIsOpen ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={(event) => setNavIsOpen(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={(event) => setNavIsOpen(true)}
          />
        )}
        {navIsOpen && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={(event) => setNavIsOpen(false)} />
            </li>
            {NavItems.map((navItem, index) => (
              <NavLink key={navItem + index} className="my-2 text-lg">
                {navItem}
              </NavLink>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export { Navbar }
