import { z } from "zod";

export type Variant = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Product = {
  name: any;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};

// Define the Variant schema
const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define the Product schema
export const productSchemaValidation: any = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  variants: z.array(variantSchema),
});

// Export the schemas
export default { productSchemaValidation, variantSchema };
