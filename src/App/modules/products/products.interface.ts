import mongoose, { Schema } from "mongoose";

export type TProduct = {
    _id: mongoose.ObjectId;
    name: string;
    description: string;
    categoryId: Schema.Types.ObjectId;
    price: number;
    image: string;
    stock: number;
    brand: string;
    rating: number;
}