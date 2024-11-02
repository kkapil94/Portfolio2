import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Skills", "Projects", "Contact"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop and Mobile Navigation Container */}
      <div className="relative mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 text-white rounded-full px-6 py-3 mt-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.toLowerCase()}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`relative px-3 py-2 rounded-full transition-all duration-300 ${
                      activeItem === item.toLowerCase()
                        ? "text-purple-400"
                        : "hover:text-purple-300"
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                    {activeItem === item.toLowerCase() && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 rounded-full transform origin-left scale-x-100 transition-transform duration-300"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="fixed top-4 right-4 z-50 bg-gray-900 bg-opacity-80 p-2 rounded-full backdrop-blur-sm"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>

          {/* Mobile Menu Panel */}
          <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm transition-all duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              {menuItems.map((item) => (
                <li key={item.toLowerCase()}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-xl px-4 py-2 transition-all duration-300 ${
                      activeItem === item.toLowerCase()
                        ? "text-purple-400"
                        : "text-white hover:text-purple-300"
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
