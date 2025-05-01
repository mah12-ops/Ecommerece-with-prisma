import express from "express"
import {Express,Request,Response} from "express"
import {PORT} from './secrets'
import rootRouter from "./routes"
import { PrismaClient } from "@prisma/client"
import { errorMiddleware } from "./middlewares/errors"

const app:Express = express()


app.use(express.json());
1

app.get("/" , (req:Request , res:Response) =>{
    res.send("working")
    
})
app.use('/api' ,rootRouter)


export const prismaClient = new PrismaClient({
    log:['query']
})

app.use(errorMiddleware)

app.listen(PORT , () => {
    console.log("running in port 3000")
})
