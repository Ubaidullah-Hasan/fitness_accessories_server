import mongoose, { Schema, Document } from 'mongoose';

// Define the TCartItem interface, which extends Mongoose's Document interface
export interface TCartItem extends Document {
    productId: mongoose.Types.ObjectId;
    name: string;
    price: number;
    quantity: number;
    stock: number;
    image: string;
    brand: string;
}