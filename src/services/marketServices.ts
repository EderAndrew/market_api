import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite"
import { db } from "../firebase/config"
import { IMarket } from "../interfaces/market"

const MarketServices = {
    createMarket: async (name: string) => {
        try{
            const marketRef = collection(db, 'markets')
            const newMarket = await setDoc(doc(marketRef), { name })

            return newMarket
        }catch(err){
            console.log(err)
        }
    },
    markets: async () => {
        let marketsData:IMarket[] = []
        try {
            const marketCol = collection(db, 'market')
            const marketSnapshot = await getDocs(marketCol)

            marketSnapshot.docs.map(doc => {
                marketsData.push({id: doc.id, name: doc.data().name})
            })
            
            return marketsData
        } catch (err) {
            console.log(err)
        }
    },

    market: async(name:string) => {
        let data:IMarket = {
            id:'',
            name:''
        }

        try{
            const marketRef = collection(db, 'market')
            const nameSnapshot = query(marketRef, where('name', '==', `${name}`))
            const querySnapshot = await getDocs(nameSnapshot)

            querySnapshot.forEach((doc) => {
               data.id = doc.id,
               data.name = doc.data().name
            })
            
            return data

        }catch(err){
            console.log(err)
        }
    }
}

export default MarketServices