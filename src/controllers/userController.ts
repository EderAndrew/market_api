import { Request, Response } from "express";
import UserServices from "../services/userServices";

const UserController = {
    login: async(req:Request, res:Response) => {
        try{
            const { email, password } = req.body
            const data = await UserServices.login(email, password)
    
            return res.status(200).json(data)
        }catch(err){
            console.log(err)
        }
    },

    createUser: async(req:Request, res:Response) => {
        try{
            const { email, password, name } = req.body
            const data = await UserServices.createUser(email, password)
            return res.status(200).json(data)
        }catch(err){
            console.log(err)
        }
    }
}

export default UserController