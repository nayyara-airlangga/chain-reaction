type NavLinkProps = {
  children?: React.ReactNode
  className?: string
}

const NavLink = ({ children, className = "" }: NavLinkProps) => {
  return <li className={`mx-4 cursor-pointer ${className}`}>{children}</li>
}

export { NavLink }
