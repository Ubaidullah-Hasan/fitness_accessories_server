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
router.patch(
    "/change-quantity/:id",
    cartOperation.changeCartQuantity
);

export const cartsRoute = router;