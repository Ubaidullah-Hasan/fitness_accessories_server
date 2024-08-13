import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.get(
    "/reviews",
    userController.getAllCustomarReview
)

router.post(
    "/create-user",
    userController.createUser
)

export const userRoute = router