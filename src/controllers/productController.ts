import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../firebase/config"
import { Request, Response } from "express"

const ListController = {
    products: async(req: Request, res: Response) => {
        try{
            const lisCollection = collection(db, 'list')
            const listSnapshot = await getDocs(lisCollection)
            const list = listSnapshot.docs.map(doc => doc.data())
            res.status(200).json(list)
        }catch(err){
            console.log(err)
        }
    }
}

export default ListController