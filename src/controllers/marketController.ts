
import { Request, Response } from "express"
import MarketServices from "../services/marketServices"
import { collection } from "firebase/firestore/lite"

const MarketController = {
    postMarket: async(req: Request, res: Response) => {
        try{
            const {name} = req.body
            const marketsRef = await MarketServices.createMarket(name)

            return res.status(200).json(marketsRef)
        }catch(err){
            console.log(err)
        }
    },

    markets: async(_req: Request, res: Response) => {
        try{
            const data = await MarketServices.markets()

            res.status(200).json(data)
        }catch(err){
            console.log(err)
        }
    },

    getMarket: async(req: Request, res: Response) => {
        try{
            const { name } = req.body
            const marketName = await MarketServices.market(name)
            
            return res.status(200).json(marketName)
        }catch(err){
            console.log(err)
        }
    }
}

export default MarketController