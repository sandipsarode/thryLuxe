import React from "react";
import { assets } from "../assets/assets";

const NewsLatter = () => {
  return (
    <div>
      <div className="flex flex-col items-center  max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-[35px] font-bold">
            Welcome to the Inner Circle.
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">
            Unlock early access, handpicked styles, and stories behind the
            design.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
            placeholder="Enter your email"
          />
          <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
            Subscribe
            <img
              src={assets.white_arrow_icon}
              alt="Arrow"
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>
        <p className="text-gray-500 mt-6 text-xs text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>
      </div>
    </div>
  );
};

export default NewsLatter;
