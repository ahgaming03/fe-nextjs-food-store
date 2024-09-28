import React from "react";

export default function ItemCart() {
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <div className="h-16 w-16 bg-gray-200">
              <img
                src="https://via.placeholder.com/150"
                alt="product"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Product Name</h1>
              <p className="text-sm">Product Description</p>
              <div className="flex items-center gap-1">
                <span className="text-sm">Qty:</span>
                <span className="font-semibold">1</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-orange-600">$999</span>
            <button className="text-red-600">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}
