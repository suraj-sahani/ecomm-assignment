"use client";

import { Product } from "@/lib/types/product.types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProductCard({ product }: { product: Product }) {
  const searchParams = useSearchParams();
  return (
    <Link
      href={`/product/${product.id}?returnTo=${encodeURIComponent(searchParams.toString())}`}
      className="group block bg-background hover:bg-[var(--muted)] transition-colors"
    >
      <div className="aspect-square overflow-hidden bg-[var(--muted)] border-b border-border">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold tracking-tight leading-tight line-clamp-2">
            {product.title}
          </h3>
          <div className="label-mono shrink-0">
            ★ {product.rating.toFixed(1)}
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div className="label-mono">{product.brand ?? product.category}</div>
          <div className="text-2xl font-semibold tracking-tight">
            ${product.price.toFixed(0)}
          </div>
        </div>
      </div>
    </Link>
  );
}
