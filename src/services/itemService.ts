import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite"
import { Item } from "../interfaces/item"
import { db } from "../firebase/config"

const ItemService = {
    getItems: async(department: string) => {
        try{
            const itemCol: Item[] = []
            const itemRef = await getDocs(collection(db, department))

            itemRef.forEach((doc) => {
                itemCol.push({id: doc.id, ...doc.data() as Item})
            })
            
            return itemCol
        }catch(err:any){
            console.log(err)
        }
    },
    getItem: async(id: string, department: string) => {
        try{
            const itemRef = await getDoc(doc(db, department, id))

            return {id: itemRef.id, ...itemRef.data() as Item}
        }catch(err){
            console.log(err)
        }
    }
}

export default ItemService