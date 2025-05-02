import React from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link, NavLink, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

const SellerLayout = () => {
  const { axios, navigate } = useAppContext();

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "/seller/productlist",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/seller/logout");
      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-700 py-3 bg-black text-white">
        <Link to={"/"}>
          <img
            src={assets.dark_logo}
            alt="Logo"
            className="cursor-pointer w-34 md:w-38"
          />
        </Link>
        <div className="flex items-center gap-5 text-white">
          <p>Hi! Admin</p>
          <button
            onClick={logout}
            className="border border-white rounded-full text-sm px-4 py-1 hover:bg-white hover:text-black transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar + Outlet */}
      <div className="flex">
        {/* Sidebar */}
        <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-700 pt-4 flex flex-col bg-black text-white">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 ${
                  isActive
                    ? "border-r-4 md:border-r-[6px] bg-white/10 border-white text-white"
                    : "hover:bg-white/10 border-black"
                }`
              }
            >
              <img src={item.icon} alt="Icon" className="w-7 h-7" />
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>

        {/* Main Content */}
        <Outlet />
      </div>
    </>
  );
};

export default SellerLayout;
