import { Router } from "express";
import { categoriesRouter } from "../modules/categories/categories.routes";
import { productsRoute } from "../modules/products/products.routes";
import { userRoute } from "../modules/user/user.routes";
import { cartsRoute } from "../modules/cart/cart.routes";

export const router = Router();
const modulesRoutes = [
    {
        path: "/categories",
        route: categoriesRouter,
    },
    {
        path: "/products",
        route: productsRoute,
    },
    {
        path: "/carts",
        route: cartsRoute,
    },
    {
        path: "/users",
        route: userRoute,
    },
]

modulesRoutes.forEach((route) => router.use(route.path, route.route))