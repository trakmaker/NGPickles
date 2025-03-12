import React from "react";

const items = [
  { category: "Non-Veg Pickles", name: "Chicken with Bone", price500: 599, price1kg: 999 },
  { category: "Non-Veg Pickles", name: "Prawns", price500: 1299, price1kg: 2299 },
  { category: "Veg Pickles", name: "Mango", price500: 299, price1kg: 599 },
];

const Menu = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Menu</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-yellow-600 font-bold">500g: ₹{item.price500} | 1kg: ₹{item.price1kg}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
