import { model, Schema } from "mongoose";
import { TCategories } from "./categories.interface";

const categoriesSchema = new Schema<TCategories>({
    name: String,
    img: String
});

export const CategoriesModel = model<TCategories>("Categories", categoriesSchema)