import mongoose from "mongoose";

export type TCategories = {
    _id: mongoose.ObjectId;
    categoriName: string,
    image: string,
}