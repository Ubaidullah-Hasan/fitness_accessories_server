import { TCategories } from "./categories.interface";
import { CategoriesModel } from "./categories.model"

const getAllCategoriesFromDB = async () => {
    const result = await CategoriesModel.find();
    return result;
}

const createCategoriesIntoDB = async (category: TCategories) => {
    const result = await CategoriesModel.create(category);
    return result;
}

export const categoriesServices = {
    getAllCategoriesFromDB,
    createCategoriesIntoDB
}