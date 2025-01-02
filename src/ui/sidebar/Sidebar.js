import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import chocydar from "../../assets/img/logo.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Menu"]')
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed inset-y-0 left-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        className="fixed top-3 left-4 p-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 transition-colors z-50"
      >
        <Menu className="w-6 h-6 text-gray-500" />
      </button>
      <div
        ref={sidebarRef}
        className={`
          h-full w-36 text-center bg-zinc-950 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 pt-16">
          <div className="flex justify-center mb-4">
            <a href="/">
              <img
                src={chocydar}
                alt="chocydar-logo"
                className="h-8 w-8 rounded-full border border-white mt-2"
              />
            </a>
          </div>
          <hr />
          <nav className="mt-3 space-y-2">
            <a
              href="/"
              className="block p-1 rounded-lg text-gray-500 hover:bg-zinc-800 transition-colors"
            >
              Chat
            </a>
            <a
              href="/"
              className="block p-1 rounded-lg text-gray-500 hover:bg-zinc-800 transition-colors"
            >
              Prompt
            </a>
            <a
              href="/"
              className="block p-1 rounded-lg text-gray-500 hover:bg-zinc-800 transition-colors"
            >
              Pull
            </a>
            <a
              href="/"
              className="block p-1 rounded-lg text-gray-500 hover:bg-zinc-800 transition-colors"
            >
              Models
            </a>
            <a
              href="/"
              className="block p-1 rounded-lg text-gray-500 hover:bg-zinc-800 transition-colors"
            >
              Help
            </a>
            <a
              href="/"
              className="block p-1 rounded-lg text-gray-500 hover:bg-zinc-800 transition-colors"
            >
              Settings
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
