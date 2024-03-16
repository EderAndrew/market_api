import { arrayUnion, collection, doc, getDoc, getDocs, increment, query, setDoc, updateDoc, where } from "firebase/firestore/lite"
import { db } from "../firebase/config"
import { IShopping } from "../interfaces/shopping"
import { IProduct } from "../interfaces/product"

const ShoppingServices = {
    createShopping: async (base: IShopping) => {
        try{
            const shoppingRef = collection(db, 'shopping')
            const newShopping = await setDoc(doc(shoppingRef), {
                userId: base.userId,
                userName: base.userName,
                marketId: base.marketId,
                marketName: base.marketName,
                date: base.date,
                list:[],
                total: 0.00,
                isOpen:true
             })

             return newShopping
        }catch(err){
            return err
        }
    },
    getShopping: async(id:string) => {
        const shop:IShopping[] = []
        try{
            const shopRef = collection(db, 'shopping')
            const q = query(shopRef, where('userId', '==', `${id}`))

            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                shop.push({id: doc.id, ...doc.data() as IShopping})
            })
            return shop
        }catch(err){
            console.log(err)
        }
    },

    updateListShopping: async(id: string, data:IProduct) => {
        const listRef = doc(db, 'shopping', id)
        
        await updateDoc(listRef, {
            list: arrayUnion(data),
            total: increment(data.totalPrice)
        })

        const listSnap = await getDoc(listRef)

        return listSnap
    }
}

export default ShoppingServices