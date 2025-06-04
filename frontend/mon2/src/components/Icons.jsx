import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Mi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
  },
  {
    name: "Vivo",
    logo: "https://www.logo.wine/a/logo/Vivo_(technology_company)/Vivo_(technology_company)-Logo.wine.svg",
  },
  {
    name: "OnePlus",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/oneplus-logo-black-and-white.png",
  },
  {
    name: "Motorola",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/motorola-7-logo-png-transparent.png",
  },
];

const Icons = () => {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Top brands
          </h2>
          <button className="text-2xl text-gray-700 hover:text-[#7747ff] transition-colors">
            <span className="material-icons">See More</span>
          </button>
        </div>
        <div className="flex gap-8 flex-wrap justify-center pb-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to={`/brand/${brand.name.toLowerCase()}`}
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center mb-2 shadow-sm">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-[60%] max-h-[60%] object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {brand.name}
              </span>
            </Link>
          ))}
          {/* View All */}
          <Link
            to="/brands"
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <div className="w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center mb-2 shadow-sm">
              <span className="material-icons text-3xl text-gray-700">
                <BiRightArrow/>
              </span>
            </div>
            <span className="text-sm font-medium text-gray-700">View All</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Icons;
