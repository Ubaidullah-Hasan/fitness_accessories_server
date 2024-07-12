import { model, Schema } from "mongoose";
import { TProduct } from "./products.interface";

const productSchema: Schema = new Schema<TProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
});

export const ProductModel = model<TProduct>('Product', productSchema);
