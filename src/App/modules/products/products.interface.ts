import { Schema } from "mongoose";

export type TProduct = {
    name: string;
    description: string;
    categoryId: Schema.Types.ObjectId;
    price: number;
    image: string;
    stock: number;
    brand: string;
    rating: number;
}