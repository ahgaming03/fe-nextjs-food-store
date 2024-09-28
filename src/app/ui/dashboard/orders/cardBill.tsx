import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import defaultImage from "@/images/default-image.png";

export default function CardBill() {
  return (
    <>
      <div className="bg-white px-2 shadow">
        <div className="flex gap-2">
          <div className="aspect-square w-1/5 p-2">
            <Image
              src={defaultImage}
              alt="default image"
              className="h-full w-full border object-cover shadow"
            />
          </div>
          <div className="flex-1">
            <div className="line-clamp-1">Title</div>
            <div className="flex items-center justify-between">
              <span className="line-clamp-1 text-sm text-gray-500">
                sub-food
              </span>
              <span>x3</span>
            </div>
            <div className="text-right">$29</div>
          </div>
        </div>
        <hr />
        <div className="py-2 text-center text-sm text-gray-500">View more</div>
        <hr />
        <div className="flex items-center justify-between">
          <span className="py-1 text-green-500">In transit</span>
          <FaAngleRight />
        </div>
        <hr />
        <div className="flex items-center justify-between py-2">
          <span className="flex-1 text-sm text-gray-500">9 item(s)</span>
          <span className="mr-1 font-semibold">Order total: </span>
          <span className="font-semibold text-orange-500">$99</span>
        </div>
        <hr />
        <div className="py-2 text-right">
          <button className="rounded bg-orange-500 px-4 py-2 font-semibold text-white">
            Buy Again
          </button>
        </div>
      </div>
    </>
  );
}
