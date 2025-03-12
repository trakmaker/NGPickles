import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Pickles & Spices</h1>
        <Link to="/" className="text-white text-lg hover:underline">Menu</Link>
      </div>
    </nav>
  );
};

export default Navbar;
