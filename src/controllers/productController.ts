import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../firebase/config"
import { Request, Response } from "express"

const ProductController = {
    products: async(req: Request, res: Response) => {
        try{
            const productCol = collection(db, 'products')
                const prodSnapshot = await getDocs(productCol)
                const prodList = prodSnapshot.docs.map(doc => doc.data())
                res.status(200).json(prodList)
        }catch(err){
            console.log(err)
        }
    }
}

export default ProductController