

import { MobileMenu } from "./mobile-menu"

export const Navbar = () => {
  return (
    <nav className="w-full h-16 border-b flex items-center px-8">
      <div className="flex items-center justify-between md:justify-end">
        <MobileMenu />
      </div>
    </nav>
  )
}