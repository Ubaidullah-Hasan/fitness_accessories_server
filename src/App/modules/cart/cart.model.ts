import mongoose, { Schema } from "mongoose";
import { TCartItem } from "./cart.interface";

const CartItemSchema: Schema = new Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true }
});

// Export the model, typed as TCartItem
export const CartItemModel = mongoose.model<TCartItem>('CartItem', CartItemSchema);