
import { Request, Response } from "express"
import MarketServices from "../services/marketServices"

const MarketController = {
    markets: async(_req: Request, res: Response) => {
        try{
            const data = await MarketServices.markets()

            res.status(200).json(data)
        }catch(err){
            console.log(err)
        }
    }
}

export default MarketController