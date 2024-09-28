import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

interface ItemListProps {
  title: string;
  icon?: React.ReactNode;
  href: string;
}

export default function ItemList({ title, icon, href }: ItemListProps) {
  return (
    <>
      <div className="bg-white p-2">
        <Link
          href={href}
          className="flex items-center justify-between space-x-2"
        >
          {icon}
          <span>{title}</span>
          <div className="flex-1"></div>
          <FaAngleRight />
        </Link>
      </div>
    </>
  );
}
