"use client";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    pathname === "/orders" && redirect("/orders/ongoing");
  });

  return (
    <>
      <div className="mb-2 flex items-center justify-around bg-white">
        <Link
          href={"/orders/ongoing"}
          className={clsx("flex-1 py-2 text-center", {
            "border border-b-orange-600 font-semibold text-orange-600":
              pathname === "/orders/ongoing",
          })}
        >
          Ongoing
        </Link>
        <Link
          href={"/orders/history"}
          className={clsx("flex-1 py-2 text-center", {
            "border border-b-orange-600 font-semibold text-orange-600":
              pathname === "/orders/history",
          })}
        >
          History
        </Link>
      </div>

      {children}
    </>
  );
}
