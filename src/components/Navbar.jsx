import React, { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 text-white rounded-full px-6 py-3 mt-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
      <ul className="flex space-x-6">
        {["Home", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item.toLowerCase()}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`relative px-3 py-2 rounded-full transition-all duration-300 ${
                activeItem === item.toLowerCase()
                  ? "text-purple-400"
                  : "hover:text-purple-300"
              }`}
              onClick={() => setActiveItem(item.toLowerCase())}
            >
              {item}
              {activeItem === item.toLowerCase() && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 rounded-full transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
