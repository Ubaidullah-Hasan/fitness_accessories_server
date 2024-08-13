import mongoose, { Schema, Document } from 'mongoose';
import { TCartItem } from './cart.interface';

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
});

export const CartItemModel = mongoose.model<TCartItem>('CartItem', CartItemSchema);
