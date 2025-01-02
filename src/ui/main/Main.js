/**
 *
 * src/ui/main/Main.js
 *
 */

import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

import "../../assets/css/main.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Main;
