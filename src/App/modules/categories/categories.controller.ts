import { Request, Response } from "express";
import { categoriesServices } from "./categories.services"

const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await categoriesServices.getAllCategoriesFromDB();
        res.send(categories);
    } catch (error: any) {
        res.status(404).send(
            {
                message: error.message,
            }
        )
    }
}

const createCategories = async (req: Request, res: Response) => {
    try {
        const categories = req.body;
        const result = await categoriesServices.createCategoriesIntoDB(categories);
        res.send(result);
    } catch (error: any) {
        res.status(404).send(
            {
                message: error.message,
            }
        )
    }
}

export const categoriesController = {
    getAllCategories,
    createCategories

}
