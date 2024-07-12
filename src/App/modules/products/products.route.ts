import { Router } from "express";
import { productController } from "./products.controller";

const router = Router();

router.get(
    "/",
    productController.getAllProducts
)

export const productsRoute = router