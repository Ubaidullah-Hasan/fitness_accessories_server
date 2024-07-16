import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.get(
    "/reviews",
    userController.getAllCustomarReview
)

export const userRoute = router