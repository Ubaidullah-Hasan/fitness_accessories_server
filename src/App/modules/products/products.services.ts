import { ProductModel } from "./products.model";

const getAllProductsFromDB = async (query: any) => {
    const { limit, order } = query;
    console.log(order);
    const result = await ProductModel.find().limit(limit).sort({ rating: -1 });
    return result;
}

export const productServices = {
    getAllProductsFromDB,
}