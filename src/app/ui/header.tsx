import Link from "next/link";
import React from "react";

import { IoCartOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-orange-400 p-2">
        <Link href={"/"}>Logo</Link>
        <Link
          href={"/cart"}
          className="relative flex items-center justify-center pr-2 pt-2"
        >
          <div className="absolute right-0 top-0 items-center justify-center rounded-full bg-red-500 px-1 text-sm text-white">
            999
          </div>
          <IoCartOutline size={40} />
        </Link>
      </header>
    </>
  );
};
