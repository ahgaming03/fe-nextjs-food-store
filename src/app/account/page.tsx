import React from "react";
import Image from "next/image";

import defaultImage from "@/app/assets/images/default-image.png";
import ItemList from "@/app/ui/dashboard/account/item-list";

import { ImProfile } from "react-icons/im";

const lists = [
  { title: "Profile", icon: <ImProfile />, href: "/account/profile" },
  { title: "Change password", href: "/account/change-password" },
  { title: "About us", href: "/about-us" },
];

export default function Page() {
  return (
    <>
      <div className="space-y-2">
        <div className="space-y-4 bg-white py-4 text-center">
          <div className="mx-auto h-32 w-32">
            <Image
              src={defaultImage}
              alt="default image"
              className="h-full w-full rounded-full border object-cover shadow"
            />
          </div>
          <h1 className="text-2xl font-semibold">Name</h1>
        </div>
        {lists.map((item, index) => (
          <ItemList key={index} {...item} />
        ))}
        <div className="mx-2 cursor-pointer bg-orange-600 py-2 text-center font-semibold text-white">
          Log Out
        </div>
      </div>
    </>
  );
}
