"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { IoMdHome, IoIosListBox } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

const links: { href: string; label: string; icon: React.ReactNode }[] = [
  {
    href: "/",
    label: "Home",
    icon: <IoMdHome size={"xl"} />,
  },
  {
    href: "/orders",
    label: "My Orders",
    icon: <IoIosListBox size={"xl"} />,
  },
  {
    href: "/account",
    label: "Me",
    icon: <FaUserAlt size={"xl"} />,
  },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className={clsx("flex flex-col items-center", {
              // "text-orange-600": pathname === link.href,
              "text-orange-600":
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href),
            })}
          >
            <div className="w-6">{link.icon}</div>
            {/* <LinkIcon className="w-6" /> */}
            <span className="text-sm">{link.label}</span>
          </Link>
        );
      })}
    </>
  );
}
