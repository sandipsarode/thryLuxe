import React from "react";
import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-black">
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between md:gap-16 gap-10 py-10 border-b border-gray-500/30 text-gray-500">
          {/* ✅ Logo */}
          <div className="md:w-[40%] w-full">
            <img
              className="object-cover"
              src={assets.cover_logo}
              alt="dummyLogoColored"
            />
          </div>

          {/* ✅ Link Sections */}
          <div className="flex flex-wrap justify-start md:justify-between w-full md:w-[60%] gap-5 xl:mt-8">
            {footerLinks.map((section, index) => (
              <div key={index} className="min-w-[140px] ">
                <h3 className="font-semibold text-base text-white md:mb-5 mb-2 xl:text-2xl">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        className="hover:underline transition text-gray-400"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Footer Bottom Text */}
        <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
          Copyright {new Date().getFullYear()} © Sandip Sarode. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
