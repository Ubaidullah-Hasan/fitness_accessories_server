import { Router } from "express";
import { productController } from "./products.controller";

const router = Router();

router.post(
    "/",
    productController.createProduct,
);

router.get(
    "/",
    productController.getAllProducts
);

router.get(
    "/:id",
    productController.getSingleProducts
)
router.delete(
    "/:id",
    productController.deleteSingleProducts
)

router.patch(
    "/:id",
    productController.updateSingleProducts
)

export const productsRoute = router