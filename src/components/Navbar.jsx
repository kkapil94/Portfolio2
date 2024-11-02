import React, { useState } from "react";
import { Menu, X, FileText, Download, Eye } from "lucide-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const menuItems = ["Home", "Skills", "Projects", "Contact", "Resume"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (item.toLowerCase() === "resume") {
      setShowResumeModal(true);
    } else {
      setActiveItem(item.toLowerCase());
    }
    setIsOpen(false);
  };

  const ResumeModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">View Resume</h3>
          <button
            onClick={() => setShowResumeModal(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <a
            href="https://drive.google.com/file/d/1hXJ0D08aCevF5PueKM0CXX2nZmSBQJuR/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Eye className="h-5 w-5" />
              <span>View Online</span>
            </div>
            <span className="text-gray-400">↗</span>
          </a>

          <a
            href="public/kapil_resume.pdf"
            download="kapil_resume.pdf"
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </div>
            <span className="text-gray-400">↓</span>
          </a>

          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5" />
              <span>LinkedIn Profile</span>
            </div>
            <span className="text-gray-400">↗</span>
          </a>
        </div>
      </div>
    </div>
  );

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
                  <button
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
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
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

          <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm transition-all duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              {menuItems.map((item) => (
                <li key={item.toLowerCase()}>
                  <button
                    className={`text-xl px-4 py-2 transition-all duration-300 ${
                      activeItem === item.toLowerCase()
                        ? "text-purple-400"
                        : "text-white hover:text-purple-300"
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && <ResumeModal />}
    </nav>
  );
};

export default Navbar;
