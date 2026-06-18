"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useMemo, useCallback } from "react";

export function useProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { selectedCategory, minPrice, maxPrice, selectedBrands, page } = useMemo(() => {
    const selectedCategory = searchParams.get("category") || "all";
    
    const minVal = searchParams.get("minPrice");
    const minPrice = minVal ? Number(minVal) : undefined;
    
    const maxVal = searchParams.get("maxPrice");
    const maxPrice = maxVal ? Number(maxVal) : undefined;
    
    const brandsParam = searchParams.get("brands");
    const selectedBrands = brandsParam
      ? brandsParam.split(",").filter(Boolean)
      : [];
      
    const page = Number(searchParams.get("page")) || 1;

    return {
      selectedCategory,
      minPrice,
      maxPrice,
      selectedBrands,
      page,
    };
  }, [searchParams]);

  const setFilters = useCallback((newFilters: Record<string, any>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        params.delete(key);
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          params.delete(key);
        } else {
          params.set(key, value.join(","));
        }
      } else {
        params.set(key, String(value));
      }
    });

    // Reset pagination page to 1 when filters change (unless specifically updating page)
    if (!("page" in newFilters)) {
      params.delete("page");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, pathname, router]);

  const toggleBrand = useCallback((brand: string) => {
    const next = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setFilters({ brands: next });
  }, [selectedBrands, setFilters]);

  const clearAll = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  return {
    selectedCategory,
    minPrice,
    maxPrice,
    selectedBrands,
    page,
    setFilters,
    toggleBrand,
    clearAll,
  };
}
