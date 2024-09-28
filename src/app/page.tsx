"use client";

import { useState } from "react";

import { MdLocationOn } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import Category from "./ui/dashboard/category";

export default function Home() {
  const [seachText, setSearchText] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const seachClear = () => {
    setSearchText("");
  };
  return (
    <div className="space-y-1">
      <div className="sticky top-0 z-50 border-b bg-white px-2 py-1 shadow">
        <div className="flex items-center gap-1 rounded bg-gray-100 p-1 pr-2">
          <CiSearch />
          <input
            type="text"
            name="search"
            className="flex-grow border-none bg-transparent focus:outline-none"
            placeholder="Search..."
            value={seachText}
            onChange={handleInputChange}
          />
          {seachText && (
            <button onClick={seachClear}>
              <IoIosCloseCircle color="gray" />
            </button>
          )}
        </div>
      </div>
      <Category title="Food" />
      <Category title="Drink" />
    </div>
  );
}
