import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <img
        src={assets.main_banner_bg}
        alt="Banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="Banner"
        className="w-full md:hidden"
      />

      {/* Centered Heading & Buttons Below Banner */}
      <div className="flex flex-col items-center justify-center mt-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Discover Our Latest Offers
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
          >
            Shop now
            <img
              className="md:hidden transition group-focus:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>

          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 py-3 bg-black hover:bg-gray-800 transition rounded text-white cursor-pointer"
          >
            Explore deals
            <img
              className="transition group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
