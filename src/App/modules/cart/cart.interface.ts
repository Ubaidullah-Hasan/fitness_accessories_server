import mongoose from "mongoose";

export type TCartItem = {
    productId: mongoose.Types.ObjectId;
    name: string;
    price: number;
    quantity: number;
    stock: number;
};