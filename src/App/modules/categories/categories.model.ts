import { model, Schema } from "mongoose";
import { TCategories } from "./categories.interface";

const categoriesSchema = new Schema<TCategories>({
    categoriName: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    }
});

export const CategoriesModel = model<TCategories>("Category", categoriesSchema)