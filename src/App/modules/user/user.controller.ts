import { Request, Response } from "express";
import { userServices } from "./user.services";

const getAllCustomarReview = async (req: Request, res: Response) => {
    try {
        const reviews = await userServices.getAllCustomarsReviewFromDB(req.query);
        res.send(reviews);
    } catch (err) {
        res.send("Can't fetch data!")
    }
}

export const userController = {
    getAllCustomarReview
}
