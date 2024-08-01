import { Request, Response } from "express";
import { productServices } from "./products.services";

const getAllProducts = async (req: Request, res: Response) => {
    
    try {
        const categories = await productServices.getAllProductsFromDB(req.query);
        res.send(categories);
    } catch (err) {
        res.send("Can't fetch data!")
    }
}

export const productController = {
    getAllProducts
}
