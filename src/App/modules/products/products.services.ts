import mongoose from "mongoose";
import QueryBuilder from "../../middleware/QueryBuilder";
import { ProductModel } from "./products.model";
import { TProduct } from "./products.interface";

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
    console.log(query);
    const productQuery = new QueryBuilder(
        ProductModel.find(),
        query,
    )
        .search(["name"])
        .sort()
        .limit()
        .priceRange()
        .filterByCategories()

    const result = await productQuery.modelQuery;
    return result;
}


const getSingleProductsFromDB = async (id: string) => {
    const result = await ProductModel.findById(id); //todo
    return result;
}

const createProductIntoDB = async(product: TProduct) => {
    const result = await ProductModel.create(product);
    return result;
}

export const productServices = {
    getAllProductsFromDB,
    getSingleProductsFromDB,
    createProductIntoDB
}