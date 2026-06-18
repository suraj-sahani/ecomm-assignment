"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/services/product.service";
import { useProductFilters } from "@/lib/hooks/use-product-filters";
import { useMemo } from "react";
import ProductCard from "./product-card";
import Pagination from "./pagination";

const PAGE_SIZE = 12;

export default function ProductGrid() {
  const {
    selectedCategory,
    minPrice,
    maxPrice,
    selectedBrands,
    page,
    setFilters,
  } = useProductFilters();

  // Fetch products under the selected category (deduplicated by React Query)
  const {
    data: products,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () => getProducts(selectedCategory),
    staleTime: 1000 * 60 * 5,
  });

  // Filter products by price range and brand selection
  const filtered = useMemo(() => {
    if (!products) return [];
    return products.filter((p) => {
      if (minPrice !== undefined && p.price < minPrice) return false;
      if (maxPrice !== undefined && p.price > maxPrice) return false;
      if (
        selectedBrands.length > 0 &&
        (!p.brand || !selectedBrands.includes(p.brand))
      ) {
        return false;
      }
      return true;
    });
  }, [products, minPrice, maxPrice, selectedBrands]);

  // Page calculations
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  
  const pagedProducts = useMemo(() => {
    return filtered.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE
    );
  }, [filtered, currentPage]);

  if (isFetching) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-background p-5">
            <div className="aspect-square bg-[var(--muted)] animate-pulse" />
            <div className="h-4 mt-5 w-3/4 bg-[var(--muted)] animate-pulse" />
            <div className="h-4 mt-3 w-1/3 bg-[var(--muted)] animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="border border-destructive/50 p-6 flex flex-col gap-4">
        <span className="label-mono text-destructive font-semibold">
          Error / Network Failure
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {error instanceof Error ? error.message : "Failed to load products index."}
        </p>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="border border-border p-16 text-center">
        <div className="label-mono mb-4">No results</div>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Nothing matches —<br />
          <span className="text-[var(--accent)]">adjust your filters.</span>
        </h3>
      </div>
    );
  }

  return (
    <div>
      {/* Product Card Grid separated by 1px borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {pagedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onChange={(p) => setFilters({ page: p })}
        />
      )}
    </div>
  );
}
