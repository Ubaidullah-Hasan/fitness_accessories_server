import { Router } from "express";
import { categoriesController } from "./categories.controller";

const router = Router();

router.post(
    "/",
    categoriesController.createCategories,
)

router.get(
    "/",
    categoriesController.getAllCategories,
)

export const  categoriesRouter = router