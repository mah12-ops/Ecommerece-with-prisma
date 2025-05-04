import { Router } from "express";
import authRoutes from "./auth";
import productsRoutes from "./products"
import usersRoute from "./users";


 const rootRouter:Router = Router()

rootRouter.use("/auth" , authRoutes)
rootRouter.use("/products" ,productsRoutes)
rootRouter.use("/users" ,usersRoute)
export default rootRouter