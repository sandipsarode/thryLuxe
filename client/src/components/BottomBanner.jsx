import React from "react";
import { assets, features } from "../assets/assets";
import { NavLink } from "react-router-dom";

const BottomBanner = () => {
  return (
    <div className="mt-24 text-center">
      {/* Banner Images */}
      <NavLink to="/products">
        <img
          src={assets.bottom_banner_image}
          alt="Banner"
          className="w-full hidden md:block"
        />
      </NavLink>
      <NavLink to="/products">
        <img
          src={assets.bottom_banner_image_sm}
          alt="Banner"
          className="w-full md:hidden"
        />
      </NavLink>

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold text-black mt-10 mb-8">
        Why We are the Best
      </h1>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 mt-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full md:w-64 p-12 border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-10 md:w-12 mb-3"
            />
            <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBanner;
