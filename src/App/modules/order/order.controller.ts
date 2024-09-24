import { Request, Response } from "express";
import { orderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderInfo = req.body; 
        const result = await orderServices.createOrderIntoDB(orderInfo);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(404).send({
            message: error.message
        });
    }
}

export const orderController = {
    createOrder
}