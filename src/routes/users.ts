import { Router } from "express"
import authMiddleware from "../middlewares/auth"
import adminMiddleware from "../middlewares/admin"
import { addAdress, deleteAddress, listAddress, updateAddress } from "../controllers/users"
import { errorHandler } from "../error-handler"


const usersRoute: Router = Router()



usersRoute.post('/address' ,[authMiddleware], errorHandler(addAdress))
usersRoute.delete('/address/:id' ,[authMiddleware], errorHandler(deleteAddress))
usersRoute.get('/address' ,[authMiddleware], errorHandler(listAddress))
usersRoute.put('/address' ,[authMiddleware], errorHandler(updateAddress))


export default usersRoute