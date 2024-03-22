import { Request, Response } from "express"
import ShoppingServices from "../services/shoppingServices"
import { IShopping } from "../interfaces/shopping"

const ShoppingController = {
    createShopping: async(req: Request, res: Response) => {
        const shop:IShopping = req.body
        try{
            await ShoppingServices.createShopping(shop) as IShopping

            return res.status(200).json({msg: "Nova compra inserida com sucesso."})
        }catch(err){
            return res.status(500).json(err)
        }
    },
    getShopping: async(req: Request, res: Response) => {
        const id = req.params.id
        try{
            const shopCol = await ShoppingServices.getShopping(id)

            return res.status(200).json(shopCol)
        }catch(err){
            console.log(err)
        }
    },

    createShoppingList: async(req: Request, res: Response) => {
        try{
            const id = req.params.id
            const data = req.body
            await ShoppingServices.createListShopping(id, data)

            return res.status(200).json({msg:'Item inserido com sucesso.'})
        }catch(err:any){
            console.log(err)
        }
    },

    getShoppingList: async(req: Request, res: Response) => {
        try{
            const id = req.params.id

            const listRef = await ShoppingServices.getShoppingList(id)

            return res.status(200).json(listRef)

        }catch(err: any){
            console.log(err)
        }
    },

    getShoppingItem: async(req: Request, res: Response) => {
        try{
            const {id, itemId} = req.params

            const itemRef = await ShoppingServices.getShoppingItem(id, itemId)

            return res.status(200).json(itemRef)
        }catch(err: any){
            console.log(err)
        }
    }

}

export default ShoppingController