import { Request,Response } from "express";
import { prismaClient } from "..";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";

export const createProduct = async(req:Request ,res:Response) => {
 

   const product = await prismaClient.product.create({
      data:{
          ...req.body,
          tags: req.body.tags.join(',')
      }
   }) 
   res.json(product)
}



export const updateProduct = async(req:Request ,res:Response) => {
const product = req.body;
try{

  const updateProduct = await prismaClient.product.update({where: { id:+req.params.id }, data:product  })

}catch(error){
   throw new NotFoundException("product not found", ErrorCode.USER_NOT_FOUND)

}
res.json(updateProduct)

}





export const deleteProduct = async(req:Request ,res:Response) => {

    const product = req.body;
try{

  const deleteProduct = await prismaClient.product.delete({where: { id:+req.params.id }})

}catch(error){
   throw new NotFoundException("product not found", ErrorCode.USER_NOT_FOUND)
}
res.json(deleteProduct)

}





export const listProduct = async(req:Request ,res:Response) => {

   const count = await prismaClient.product.count()
   const products = await prismaClient.product.findMany({
      skip: +req.query.skip! || 0,
      take:3
   })
   res.json({count,data:products})
}






export const getProductById = async(req:Request ,res:Response) => {


   try{
      const product = await prismaClient.product.findFirstOrThrow({
        where: {
         id:+req.params.id
        }
      })
    
      res.json(product)
    }catch(err){
       throw new NotFoundException("product not found", ErrorCode.USER_NOT_FOUND)
    
    }



    
    }
    
