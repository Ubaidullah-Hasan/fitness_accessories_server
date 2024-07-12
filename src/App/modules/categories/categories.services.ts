import { CategoriesModel } from "./categories.model"

const getAllCategoriesFromDB = async () => {
    const result = await CategoriesModel.find();
    return result;
}

export const categoriesServices = {
    getAllCategoriesFromDB,
}