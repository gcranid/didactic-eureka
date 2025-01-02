/**
 *
 * src/ui/navbar/Navbar.js
 *
 */

import React from "react";
import chocydar from "../../assets/img/logo.svg";

import "../../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between bg-zinc-950 p-4">
      <div className="flex items-center">
        {/* <a
          href="https://chocydar.github.io"
          className="flex items-center hover:bg-zinc-800 rounded-xl"
        >
          &nbsp;
          <img src={chocydar} alt="chocydar" className="h-8 mr-2" />
        </a> */}
      </div>
      <div className="flex items-center">
        <a
          href="/"
          className="flex items-center text-2xl rounded hover:bg-zinc-900 font-bold text-yellow-400 navbar-font-name"
        >
          &nbsp;
          {/* <img src={chocydar} alt="chocydar" className="h-6" /> */}
          CHOCYDAR&nbsp;
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
