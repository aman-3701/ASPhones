import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar, FaShoppingCart } from "react-icons/fa";

const Card = ({
  mobile_name,
  category,
  image_url,
  price,
  ram,
  back_camera,
  front_camera,
  storage,
  condition_mob,
  warranty,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  // Use props for price and features
  const inStock = true;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
        {/* Image Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 rounded-t-2xl">
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-white/90 text-slate-700 font-medium px-3 py-1 rounded-full text-xs shadow">
              {category}
            </span>
          </div>
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              className="h-8 w-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
              onClick={() => setIsLiked(!isLiked)}
            >
              {isLiked ? (
                <FaHeart className="h-4 w-4 text-red-500" />
              ) : (
                <FaRegHeart className="h-4 w-4 text-slate-600" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-center p-8 pt-16 pb-8">
            <img
              src={image_url || "/placeholder.svg"}
              alt={mobile_name}
              className="w-48 h-48 object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {mobile_name}
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-4 w-4 ${
                      i < 4 ? "text-yellow-400" : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-600">4.8 (2.1k reviews)</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-900">₹{price}</span>
              <span className="text-green-600 border border-green-600 rounded-full px-3 py-1 text-xs font-medium">
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 border border-slate-200 rounded-lg py-2 text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <FaRegHeart className="h-4 w-4" /> Wishlist
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition-colors"
              >
                <FaShoppingCart className="h-4 w-4" /> Add to Cart
              </button>
            </div>
          </div>
          {/* Features */}
          <div className="pt-4 border-t border-slate-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-900">{ram}</div>
                <div className="text-xs text-slate-600">RAM</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-900">
                  {back_camera}
                </div>
                <div className="text-xs text-slate-600">Back Cam</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-900">
                  {front_camera}
                </div>
                <div className="text-xs text-slate-600">Front Cam</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center mt-2">
              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-900">
                  {storage}
                </div>
                <div className="text-xs text-slate-600">Storage</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-900">
                  {condition_mob}
                </div>
                <div className="text-xs text-slate-600">Condition</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-500">{warranty}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
