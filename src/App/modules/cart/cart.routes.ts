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
router.delete(
    "/:id",
    cartOperation.removeCart
);

export const cartsRoute = router;