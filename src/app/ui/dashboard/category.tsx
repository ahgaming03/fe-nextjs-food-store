import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Card from "./card";

const data = [
  { title: "Cơm tấm", price: 99, imagePath: "https://via.placeholder.com/250" },
  { title: "Cơm tấm", price: 99, imagePath: "https://via.placeholder.com/250" },
  {
    title: "Bún Boà",
    price: 199,
    imagePath: "https://via.placeholder.com/250",
  },
  {
    title: "Bún Boà",
    price: 199,
    imagePath: "https://via.placeholder.com/250",
  },
  { title: "Cơm tấm", price: 99, imagePath: "https://via.placeholder.com/250" },
  {
    title: "Bún Boà",
    price: 199,
    imagePath: "https://via.placeholder.com/250",
  },
  {
    title: "Bún Boà",
    price: 199,
    imagePath: "https://via.placeholder.com/250",
  },
  { title: "Cơm tấm", price: 99, imagePath: "https://via.placeholder.com/250" },
  {
    title: "Bún Boà",
    price: 199,
    imagePath: "https://via.placeholder.com/250",
  },
];

export default function Category({ title }: { title: string }) {
  return (
    <>
      <div className="bg-white px-2 py-2">
        <div className="mb-2 flex items-end justify-between">
          <span className="text-2xl font-semibold capitalize">{title}</span>
          <span className="flex cursor-pointer items-center gap-1 text-sm">
            See All
            <FaAngleRight />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {data.slice(0, 6).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
