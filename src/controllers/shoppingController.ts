import { Request, Response } from "express"
import ShoopingServices from "../services/shoppingServices"
import { IShopping } from "../interfaces/shopping"

const ShoppingController = {
    createShopping: async(req: Request, res: Response) => {
        const shop:IShopping = req.body.shop
        try{
            const data = await ShoopingServices.createShopping(shop)

            return res.status(200).json(data)
        }catch(err){
            return res.status(500).json(err)
        }
    }
}

export default ShoppingController