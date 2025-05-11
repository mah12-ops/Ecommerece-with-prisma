import { z } from 'zod'

export const CreateCartSchema = z.object({
    productId: z.number(),
    quantity:z.number()
    
})

export const ChangeCartSchema = z.object({
    quantity:z.number()
    
})