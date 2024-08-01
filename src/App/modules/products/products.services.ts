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
        // .filter()
    // .fields();
    const result = await productQuery.modelQuery;
    // console.log(result);
    return result;
}

export const productServices = {
    getAllProductsFromDB,
}