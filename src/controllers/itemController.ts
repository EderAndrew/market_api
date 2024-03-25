import { Request, Response } from "express"
import ItemService from "../services/itemService"

const ItemController = {
    getItems: async(req: Request, res: Response) => {
        try{
            const { department }= req.params
            const itemCol = await ItemService.getItems(department)

            return res.status(200).json(itemCol)
        }catch(err){
            console.log(err)
        }
    },
    getItem: async(req: Request, res: Response) => {
        try{
            const { id, department } = req.params
            const itemCol = await ItemService.getItem(id, department)

            return res.status(200).json(itemCol)
        }catch(err){
            console.log(err)
        }
    }
}

export default ItemController