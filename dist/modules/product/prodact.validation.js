"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchemaValidation = void 0;
const zod_1 = require("zod");
// Define the Variant schema
const variantSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
// Define the Product schema
exports.productSchemaValidation = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    variants: zod_1.z.array(variantSchema),
});
// Export the schemas
exports.default = { productSchemaValidation: exports.productSchemaValidation, variantSchema };
