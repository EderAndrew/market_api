import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite"
import { db } from "../firebase/config"
import { IShopping } from "../interfaces/shopping"

const ShoppingServices = {
    createShopping: async (base: IShopping) => {
        try{
            const shoppingRef = collection(db, 'shopping')
            const newShopping = await setDoc(doc(shoppingRef), {
                userId: base.userId,
                userName: base.userName,
                marketId: base.marketId,
                marketName: base.marketName,
                day: base.day,
                month: base.month,
                year: base.year,
             })

             return newShopping
        }catch(err){
            return err
        }
    }
}

export default ShoppingServices