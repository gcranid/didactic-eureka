/**
 *
 * src/ui/footer/Footer.js
 *
 */

import React from "react";

import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-950 text-gray-500 p-2">
      <p className="text-center px-4 text-xs">
        &copy; {new Date().getFullYear()}
        <a
          href="/"
          title="chocydar"
          className="footer-font-name decoration-none text-lg text-yellow-400"
        >
          &nbsp;chocydar
        </a>
        <br />
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
