"use client";

import ProductFilters from "@/components/product/filters";
import ProductGrid from "@/components/product/product-grid";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      {/* Hero Poster */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-28">
          <div className="label-mono mb-6">Vol. 01 — The Index</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            Every
            <br />
            <span className="text-[var(--accent)]">product</span>
            <br />
            considered.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground text-lg leading-relaxed">
            A curated index of product entries. Filter by category, brand, and
            price limits to select what earns its place.
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar - Filters */}
        <Suspense>
          <div className="lg:col-span-3">
            <ProductFilters />
          </div>
        </Suspense>

        {/* Product Cards Grid */}
        <Suspense>
          <section className="lg:col-span-9">
            <ProductGrid />
          </section>
        </Suspense>
      </div>
    </>
  );
}
