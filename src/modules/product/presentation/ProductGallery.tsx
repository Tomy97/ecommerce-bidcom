"use client";
import { useState } from "react";
import Image from "next/image";

export const ProductGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={images[mainIndex]}
          alt={title}
          width={800}
          height={800}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.slice(0, 4).map((src, i) => (
            <button
              key={src}
              onClick={() => setMainIndex(i)}
              className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ring-offset-2 transition hover:ring-2 hover:ring-[#0000FF] focus-visible:ring-2 focus-visible:ring-[#0000FF] ${
                i === mainIndex ? "ring-2 ring-[#0000FF]" : ""
              }`}
              aria-label={`Ver imagen ${i + 1} de ${title}`}
              aria-current={i === mainIndex}
            >
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
