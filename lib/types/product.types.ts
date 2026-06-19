import z from "zod";
import { CategorySchema, ProductSchema } from "../schema/product.schema";

export interface Product extends z.infer<typeof ProductSchema> {}

export interface Category extends z.infer<typeof CategorySchema> {}
