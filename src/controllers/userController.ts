import { Request, Response } from "express";
import UserServices from "../services/userServices";
import { auth } from "../firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";
import { IUser } from "../interfaces/user";

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
            const data = await UserServices.createUser(email, password, name)
            
            return res.status(200).json(data)
        }catch(err){
            console.log(err)
        }
    },
    token: async(req:Request, res:Response) => {
        try{
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const token = await user.getIdToken()

                    return res.status(200).json({token})
                }
                if(!user){
                    return res.status(401).json({token: null})
                }
                
            })
        }catch(err){
            console.log(err)
        }
    }
}

export default UserController