import { model, Schema } from "mongoose";
import { TCategories } from "./categories.interface";

const categoriesSchema = new Schema<TCategories>({
    categoriName: String,
    image: String
});

export const CategoriesModel = model<TCategories>("Categories", categoriesSchema)