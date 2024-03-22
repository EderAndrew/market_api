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

    createListShopping: async(id: string, data: IProduct) => {
        try{
            const listRef = collection(db, 'shopping', `${id}`, 'list')
            const total = data.price * data.qtd
            const newList = await setDoc(doc(listRef), {
                brand: data.brand,
                name: data.name,
                price: data.price,
                qtd: data.qtd,
                totalPrice: total
            })

            const shoppingRef = doc(db, 'shopping', id)
        
            await updateDoc(shoppingRef, {
                total: increment(total)
            })

            return newList
        }catch(err: any){
            console.log(err)
        }
    },
    getShoppingList: async(id: string) => {
        try{
            const listItem:IProduct[] = []
            const listRef = collection(db, 'shopping', `${id}`, 'list')
            const listSnapshot = await getDocs(listRef)

            listSnapshot.docs.map((doc) => {
                listItem.push({id: doc.id, ...doc.data() as IProduct})
            })

            return listItem
        }catch(err:any){
            console.log(err)
        } 
    },

    getShoppingItem: async(id: string, itemId: string) => {
        try{
            const itemRef = doc(db, 'shopping', `${id}`, 'list', `${itemId}`)
            const itemSnapshot = await getDoc(itemRef)
            
            return {id: itemSnapshot.id, ...itemSnapshot.data() as IProduct}
        }catch(err:any){
            console.log(err)
        }
    }
}

export default ShoppingServices

