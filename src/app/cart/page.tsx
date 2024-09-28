import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import ItemCart from "../ui/dashboard/cart/item-cart";

export default function Page() {
  return (
    <>
      <div className="grid min-h-full grid-rows-[3rem_1fr_4rem] space-y-2">
        <div className="flex items-center justify-between bg-white px-2">
          <FaArrowLeft color="orange" />
          <h1 className="text-2xl font-semibold">Cart</h1>
          <div className=""></div>
        </div>
        <section className="space-y-1 px-2">
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </section>
        <section className="sticky bottom-0 z-50 inline-flex items-center justify-end gap-2 bg-white">
          <div className="flex items-center gap-1">
            <span className="text-sm">Total:</span>
            <span className="text-xl font-semibold text-orange-600">$999</span>
          </div>
          <button className="h-full bg-orange-600 px-2 py-1 font-semibold text-white">
            Check out
          </button>
        </section>
      </div>
    </>
  );
}
