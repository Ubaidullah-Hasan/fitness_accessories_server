import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.get(
    "/reviews",
    userController.getAllProducts
)

export const userRoute = router