import { z } from "zod";

export const ReviewSchema = z.object({
  rating: z.number(),
  comment: z.string(),
  date: z.string().datetime(),
  reviewerName: z.string(),
  reviewerEmail: z.string().email(),
});

export const DimensionsSchema = z.object({
  width: z.number(),
  height: z.number(),
  depth: z.number(),
});

export const MetaSchema = z.object({
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  barcode: z.string(),
  qrCode: z.string().url(),
});

export const ProductSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number().int(),
  tags: z.array(z.string()),
  brand: z.string().nullish(),
  sku: z.string(),
  weight: z.number(),
  dimensions: DimensionsSchema,
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(ReviewSchema),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number().int(),
  meta: MetaSchema,
  images: z.array(z.string().url()),
  thumbnail: z.string().url(),
});

export const CategorySchema = z.object({
  slug: z.string(),
  name: z.string(),
  url: z.string().url(),
});

export const CategoryListSchema = z.array(CategorySchema);

export const ProductListSchema = z.object({
  limit: z.number(),
  skip: z.number(),
  total: z.number(),
  products: z.array(ProductSchema),
});
