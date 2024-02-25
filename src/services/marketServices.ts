import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../firebase/config"

const MarketServices = {
    markets: async () => {
        try {
            const marketCol = collection(db, 'market')
            const marketSnapshot = await getDocs(marketCol)
            const data = marketSnapshot.docs.map(doc => doc.data())
            
            return data
        } catch (err) {
            console.log(err)
        }
    }
}

export default MarketServices