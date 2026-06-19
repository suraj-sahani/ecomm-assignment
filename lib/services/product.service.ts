import {
  CategoryListSchema,
  ProductListSchema,
  ProductSchema,
} from "../schema/product.schema";
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

    const validator = ProductListSchema.parse(data);
    return validator.products;
  } catch (err) {
    console.error(err);
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

    const validator = CategoryListSchema.parse(data);

    return validator;
  } catch (err) {
    console.error(err);
    throw new Error(
      err instanceof Error ? err.message : "Failed to fetch products",
    );
  }
};

export const getProductDetails = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
    );

    if (!res.ok) throw new Error("Failed to fetch product details");

    const data = await res.json();

    const validator = ProductSchema.parse(data);

    return validator;
  } catch (err) {
    console.error(err);
    throw new Error(
      err instanceof Error ? err.message : "Failed to fetch product details",
    );
  }
};
