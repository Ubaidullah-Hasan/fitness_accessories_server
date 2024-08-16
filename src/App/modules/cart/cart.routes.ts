import { Router } from "express";
import { cartOperation } from "./cart.operation";

const router = Router();

router.post(
    "/",
    cartOperation.addToCart
);

router.get(
    "/",
    cartOperation.getAllCart
);

export const cartsRoute = router;