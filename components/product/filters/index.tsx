"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getProductCategories,
  getProducts,
} from "@/lib/services/product.service";
import { useProductFilters } from "@/lib/hooks/use-product-filters";
import { useMemo } from "react";
import RadioFilter from "./radio-filter";
import PriceFilter from "./price-filter";
import CheckboxFilter from "./checkbox-filter";

function FilterBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="label-mono mb-4 text-foreground">{title}</h3>
      {children}
    </div>
  );
}

export default function ProductFilters() {
  const {
    selectedCategory,
    minPrice,
    maxPrice,
    selectedBrands,
    setFilters,
    toggleBrand,
    clearAll,
  } = useProductFilters();

  // Fetch categories list
  const { data: categories, isFetching: isFetchingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: getProductCategories,
    staleTime: 1000 * 60 * 5,
  });

  // Fetch products under the selected category to build dynamic list of brands
  const { data: products } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () => getProducts(selectedCategory),
    staleTime: 1000 * 60 * 5,
  });

  // Dynamically compute unique brands based on currently fetched category products
  const brands = useMemo(() => {
    const set = new Set<string>();
    (products || []).forEach((p) => p.brand && set.add(p.brand));
    return Array.from(set).sort();
  }, [products]);

  return (
    <aside className="lg:col-span-3 space-y-10">
      {/* Filters Header with Reset button */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h2 className="label-mono text-foreground font-semibold">Filters</h2>
        {(selectedCategory !== "all" ||
          minPrice !== undefined ||
          maxPrice !== undefined ||
          selectedBrands.length > 0) && (
          <button
            onClick={clearAll}
            className="label-mono hover:text-[var(--accent)] transition-colors outline-none cursor-pointer"
          >
            Reset
          </button>
        )}
      </div>

      {/* Category Selection */}
      <FilterBlock title="Category">
        <ul className="space-y-2">
          <li>
            <RadioFilter
              label="All Departments"
              active={selectedCategory === "all"}
              onClick={() => setFilters({ category: "all" })}
            />
          </li>
          {categories?.map((c) => (
            <li key={c.slug}>
              <RadioFilter
                label={c.name.replace(/-/g, " ")}
                active={selectedCategory === c.slug}
                onClick={() => setFilters({ category: c.slug })}
              />
            </li>
          ))}
          {isFetchingCategories && (
            <li className="label-mono animate-pulse text-muted-foreground">
              Loading…
            </li>
          )}
        </ul>
      </FilterBlock>

      {/* Price Limit Selection */}
      <FilterBlock title="Price">
        <div className="grid grid-cols-2 gap-3">
          <PriceFilter
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={(v) => setFilters({ minPrice: v })}
          />
          <PriceFilter
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={(v) => setFilters({ maxPrice: v })}
          />
        </div>
      </FilterBlock>

      {/* Brands Selection */}
      <FilterBlock title={`Brand · ${brands.length}`}>
        {brands.length === 0 ? (
          <p className="label-mono text-muted-foreground italic">
            No brands in this view.
          </p>
        ) : (
          <ul className="space-y-2 max-h-72 overflow-auto pr-2">
            {brands.map((b) => (
              <li key={b}>
                <CheckboxFilter
                  label={b}
                  checked={selectedBrands.includes(b)}
                  onChange={() => toggleBrand(b)}
                />
              </li>
            ))}
          </ul>
        )}
      </FilterBlock>
    </aside>
  );
}
