import { NavItems } from "@constants"

const Footer = () => {
  return (
    <footer className="w-full flex lg:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          {NavItems.map((navItem, index) => (
            <a key={navItem + index} href="">
              <p className="text-white text-base text-center mx-2 cursor-pointer">
                {navItem}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center">@ChainReaction 2022</p>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </footer>
  )
}

export { Footer }
