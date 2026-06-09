import { useState } from "react";

import MobileSidebar from "./MobileSidebar";
import menu from "../../assets/icons/menu.png";
import search from "../../assets/icons/Search.png";
import cart from "../../assets/icons/CartMobile.png";
import logo from "../../assets/logos/logo-colored.png";
import profile from "../../assets/icons/ProfileMobile.png";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200 lg:hidden">
        {/* Top Row */}
        <div className="flex items-center justify-between px-4 py-4">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button onClick={() => setIsOpen(true)} className="text-2xl">
              <img src={menu} alt="Menu" />
            </button>

            {/* Logo */}
            <img src={logo} alt="Brand Logo" className="h-8 w-auto" />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="text-xl">
              <img src={cart} alt="Cart" className="h-5 w-5" />
            </button>

            <button className="text-xl">
              <img src={profile} alt="Profile" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="relative">
            <img
              src={search}
              alt="Search"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md border border-gray-300 py-3 pl-12 pr-4 outline-none"
            />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MobileNavbar;
