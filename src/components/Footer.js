import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
      <p>📞 Order Now: <a href="tel:+919550550837" className="underline">+91 9550550837</a></p>
      <p>&copy; {new Date().getFullYear()} Pickles & Spices. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
