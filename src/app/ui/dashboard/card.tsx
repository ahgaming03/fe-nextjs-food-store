import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  imagePath: string;
  title: string;
  price: number;
}

export default function Card({ imagePath, title, price }: CardProps) {
  return (
    <>
      <div className="rounded border bg-gray-50">
        <div className="aspect-square w-full">
          <img
            src={imagePath}
            alt={title}
            className="h-full w-full rounded-t-[0.1875rem] object-cover"
            loading="lazy"
          />
        </div>
        <div className="line-clamp-1">{title}</div>
        <div>${price}</div>
      </div>
    </>
  );
}
