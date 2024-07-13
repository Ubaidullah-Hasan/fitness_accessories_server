import { ProductModel } from "./products.model";

const getAllProductsFromDB = async (query: any) => {
    const { limit } = query;

    let order: number = -1;
    if(query.order){
        order = parseInt(query.order);
    }
    

    const result = await ProductModel.find().limit(limit).sort({ rating: order});
    if(result.length === 0){
        return "Products not found!"
    }
    return result;
}

export const productServices = {
    getAllProductsFromDB,
}