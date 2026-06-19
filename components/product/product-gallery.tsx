"use client";

import { useState } from "react";

type ImageGalleryProps = {
  images: string[];
  title: string;
};
export default function ProductGallery({ images, title }: ImageGalleryProps) {
  const [activeImg, setActiveImg] = useState(0);
  return (
    <div>
      <div className="aspect-square bg-[var(--muted)] border border-border overflow-hidden">
        <img
          src={images[activeImg]}
          alt={title}
          className="size-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`aspect-square bg-[var(--muted)] border overflow-hidden transition-colors ${
                i === activeImg
                  ? "border-[var(--accent)]"
                  : "border-border hover:border-foreground"
              }`}
            >
              <img src={src} alt="" className="size-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
