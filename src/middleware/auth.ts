import { NextFunction, Request, Response } from "express";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Auth = {
    auth: async (_req: Request, res: Response, next: NextFunction) => {
        const auth = getAuth()
        onAuthStateChanged(auth, async (user) => {
            if(user){
                const token = await user.getIdToken()
                if(token){
                    next()
                }
                
            }
            if(!user){
                return res.status(401).json({msg: "Not authorized"})
            }
        })
    }
}