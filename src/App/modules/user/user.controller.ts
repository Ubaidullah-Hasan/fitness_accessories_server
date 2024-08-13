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

const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const result = await userServices.createUserIntoDB(user);
        res.send(result);
    } catch (error: any) {
        res.status(404).send({
            message: error.message
        });
    }
}

export const userController = {
    getAllCustomarReview,
    createUser
}
