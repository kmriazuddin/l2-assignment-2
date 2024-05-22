import { z } from "zod";

const variantSchema = z.object({
  type: z.string().nonempty("Type is required"),
  value: z.string().nonempty("Value is required"),
});

const productSchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  price: z.number().positive("Price must be a positive number"),
  tags: z.array(z.string().nonempty()).nonempty("Tags are required"),
  variants: z.array(variantSchema).optional(),
});

export { productSchema, variantSchema };
