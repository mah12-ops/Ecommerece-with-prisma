import { Router } from "express";
import authRoutes from "./auth";
import productsRoutes from "./products"
import usersRoute from "./users";
import cartRoutes from "./cart";


 const rootRouter:Router = Router()

rootRouter.use("/auth" , authRoutes)
rootRouter.use("/products" ,productsRoutes)
rootRouter.use("/users" ,usersRoute)
rootRouter.use("/carts" ,cartRoutes)
export default rootRouter