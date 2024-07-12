import { Request, Response } from "express";
import { productServices } from "./products.services";

const getAllProducts = async (req: Request, res: Response) => {
    const categories = await productServices.getAllProductsFromDB(req.query);
    res.send(categories);
}

export const productController = {
    getAllProducts
}
