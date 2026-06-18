import { Category, Product } from "../types/product.types";

export const getProducts = async (category: string): Promise<Product[]> => {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/products?limit=100`;
    if (category !== "all") {
      url = `${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}?limit=100`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();

    return data.products;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Failed to fetch products",
    );
  }
};

export const getProductCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/categories`,
    );
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();

    console.log(data);
    const parsed = data.map((c: any) => {
      if (typeof c === "object" && c !== null) {
        return { slug: c.slug, name: c.name };
      }
      return { slug: c, name: c.charAt(0).toUpperCase() + c.slice(1) };
    });
    return parsed;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Failed to fetch products",
    );
  }
};
