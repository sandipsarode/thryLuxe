import React from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  return (
    product && (
      <div
        onClick={() => {
          navigate(
            `/products/${product.category.toLowerCase()}/${product._id}`
          );
          scrollTo(0, 0);
        }}
        className="rounded-xl overflow-hidden shadow-md bg-white w-full max-w-[280px] sm:max-w-[300px] md:max-w-[340px] border border-gray-200 mx-auto"
      >
        {/* 🖼️ Image */}
        <div className="w-full sm:h-48 md:h-96 overflow-hidden">
          <img
            src={product.image[0]}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* 📝 Content */}
        <div className="p-3 sm:p-4 text-gray-700">
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>

          <p className="font-semibold text-sm sm:text-base truncate">
            {product.name}
          </p>

          {/* ⭐ Rating */}
          <div className="flex items-center gap-1 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  className="w-4"
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="rating"
                />
              ))}
            <p className="text-xs sm:text-sm text-gray-500 ml-1">(4)</p>
          </div>

          {/* 💰 Price and Cart */}
          <div className="flex items-end justify-between mt-3 flex-wrap gap-y-2">
            <p className="text-primary font-semibold text-lg">
              {currency}
              {product.offerPrice}
              <span className="line-through text-sm text-gray-400 ml-2">
                {currency}
                {product.price}
              </span>
            </p>

            <div
              onClick={(e) => e.stopPropagation()}
              className="text-green-500 w-full sm:w-auto flex justify-end"
            >
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center gap-1 bg-indigo-100 border border-primary px-3 py-1.5 rounded text-sm font-medium"
                  onClick={() => addToCart(product._id)}
                >
                  <img src={assets.cart_icon} alt="cart_icon" className="w-4" />
                  Add
                </button>
              ) : (
                <div className="flex items-center gap-2 bg-indigo-100 px-2 py-1 rounded text-sm">
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="px-2 text-base font-bold text-indigo-600"
                  >
                    -
                  </button>
                  <span className="w-5 text-center font-medium">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="px-2 text-base font-bold text-indigo-600"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
