import { Request, Response } from "express";
import { productServices } from "./products.services";

const getAllProducts = async (req: Request, res: Response) => {

    try {
        const products = await productServices.getAllProductsFromDB(req.query);
        res.send(products);
    } catch (err) {
        res.send("Can't fetch data!")
    }
}

const getSingleProducts = async (req: Request, res: Response) => {
    const productName = req.params.id;
    console.log(productName);

    try {
        const product = await productServices.getSingleProductsFromDB(productName);
        res.send(product);
    } catch (err) {
        res.send("Can't fetch data!")
    }
}

export const productController = {
    getAllProducts,
    getSingleProducts
}
