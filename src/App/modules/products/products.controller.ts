import { Request, Response } from "express";
import { productServices } from "./products.services";

const getAllProducts = async (req: Request, res: Response) => {

    try {
        const products = await productServices.getAllProductsFromDB(req.query);
        res.send(products);
    } catch (err) {
        res.send("Can't fetch data!");
    }
}

const getSingleProducts = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const product = await productServices.getSingleProductsFromDB(id);
        res.send(product);
    } catch (err) {
        res.send("Can't fetch data!")
    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const result = await productServices.createProductIntoDB(product);
        res.send(result);
    } catch (error: any) {
        res.status(404).send({
            message: error.message
        });
    }
}

const deleteSingleProducts = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const product = await productServices.deleteSingleProductsFromDB(id);
        res.send({success: true, message: "Product successfully deleted!", data: product});
    } catch (err) {
        res.send("Can't fetch data!")
    }
}

const updateSingleProducts = async (req: Request, res: Response) => {
    const { id } = req.params;
    const body = req.body; 

    try {
        const product = await productServices.updateProductIntoDB(id, body);
        res.send({
            success: true,
            message: "Product successfully updated",
            result: product
        });
    } catch (err) {
        console.log(err);
        res.send("Can't fetch data!")
    }
}

export const productController = {
    getAllProducts,
    getSingleProducts,
    createProduct,
    deleteSingleProducts,
    updateSingleProducts,
}
