"use client";

import { FaShoppingCart, FaHeart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function AddToCartBtn({ book }) {
  const [clicked, setClicked] = useState(false);

  const handleAddToCart = () => {
    setClicked(true);
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const isExist = existingCart.find((item) => item._id === book._id);

    if (isExist) {
      toast.error("This book is already in your cart!");
    } else {
      const updatedCart = [...existingCart, { ...book, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      toast.success("Added to Cart Successfully!");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={handleAddToCart}
          className="btn btn-secondary flex-1 text-white font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all active:scale-95"
        >
          {clicked ? (
            "Added"
          ) : (
            <>
              {" "}
              <FaShoppingCart /> Add to Cart
            </>
          )}
        </button>

        {!clicked && (
          <button
            className="btn sm:w-[30%] w-full btn-outline btn-primary btn-square"
            title="Add to Wishlist"
          >
            <FaHeart className="text-[18px]" />
          </button>
        )}
      </div>
    </>
  );
}
