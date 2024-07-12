import { Router } from "express";
import { getAllCategories } from "./categories.controller";

const router = Router();

router.get(
    "/",
    getAllCategories
)

export const  categoriesRouter = router