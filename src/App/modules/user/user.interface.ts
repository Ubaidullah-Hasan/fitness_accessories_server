import { Schema } from "mongoose";

export type TUser = {
    image: string;
    comment: string;
    name: string;
    productId: Schema.Types.ObjectId[];
    role: string;
    password: string;
}
