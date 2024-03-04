import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../firebase/config"
import { Request, Response } from "express"

const ShoppingController = {
    createShopping: async(req: Request, res: Response) => {
        try{
        }catch(err){
            console.log(err)
        }
    }
}

export default ShoppingController