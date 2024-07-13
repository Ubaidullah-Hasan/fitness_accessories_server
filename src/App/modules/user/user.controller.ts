import { Request, Response } from "express";
import { userServices } from "./user.services";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const reviews = await userServices.getAllCustomarsReviewFromDB();
        res.send(reviews);
    } catch (err) {
        res.send("Can't fetch data!")
    }
}

export const userController = {
    getAllProducts
}
