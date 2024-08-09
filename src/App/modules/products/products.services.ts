import mongoose from "mongoose";
import QueryBuilder from "../../middleware/QueryBuilder";
import { ProductModel } from "./products.model";

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

// const getAllProductsFromDB = async (query: Record<string, unknown>) => {
//     try {
//         // Convert the string to an ObjectId
//         const _id = new mongoose.Types.ObjectId("6691785bb0b604e2e2252592");

//         // Find the product with the specified categoryId
//         const result = await ProductModel.findOne({ _id });

//         // const result = await ProductModel.find();

//         // Check if a product was found
//         if (result) {
//             console.log('Product found:', result);
//         } else {
//             console.log('No product found with this _id.');
//         }
//     } catch (error) {
//         console.error('Error fetching product:', error);
//     }
// }

const getSingleProductsFromDB = async (pName: string) => {
    console.log(pName);

    const result = await ProductModel.findOne({ name: pName });
    // const result = await ProductModel.findById("6691785bb0b604e2e2252593"); todo
    // console.log(result);
    return result;
}

export const productServices = {
    getAllProductsFromDB,
    getSingleProductsFromDB
}