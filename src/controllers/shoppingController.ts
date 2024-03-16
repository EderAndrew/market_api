import { Request, Response } from "express"
import ShoopingServices from "../services/shoppingServices"
import { IShopping } from "../interfaces/shopping"

const ShoppingController = {
    createShopping: async(req: Request, res: Response) => {
        const shop:IShopping = req.body
        try{
            await ShoopingServices.createShopping(shop) as IShopping

            return res.status(200).json({msg: "Nova compra inserida com sucesso."})
        }catch(err){
            return res.status(500).json(err)
        }
    },
    getShopping: async(req: Request, res: Response) => {
        const id = req.params.id
        try{
            const shopCol = await ShoopingServices.getShopping(id)

            return res.status(200).json(shopCol)
        }catch(err){
            console.log(err)
        }
    },

    updateListShopping: async(req: Request, res: Response) => {
        const id = req.params.id
        const data = req.body
        try{
            const shopCol = await ShoopingServices.updateListShopping(id, data)

            return res.status(200).json(shopCol.data())
        }catch(err){
            console.log(err)
        }
    }
}

export default ShoppingController