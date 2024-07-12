import { Request, Response } from "express";
import { categoriesServices } from "./categories.services"

export const getAllCategories = async(req:Request, res: Response) => {
    const categories = await categoriesServices.getAllCategoriesFromDB();
    res.send(categories);
}
