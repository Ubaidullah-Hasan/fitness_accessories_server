import { Router } from "express";
import { cartOperation } from "./cart.operation";

const router = Router();

router.post(
    "/",
    cartOperation.addToCart
);

export const cartsRoute = router;