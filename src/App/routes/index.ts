import { Router } from "express";
import { categoriesRouter } from "../modules/categories/categories.routes";
import { productsRoute } from "../modules/products/products.route";

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
]

modulesRoutes.forEach((route) => router.use(route.path, route.route))