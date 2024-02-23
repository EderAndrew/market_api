import { Router } from "express";
import { db, collection, getDocs } from "../firebase/config";
import UserController from "../controllers/userController";

const router = Router()

router.get('/ping', (req, res) => {
    res.json({pong:true})
})

router.post('/users/login', UserController.login)
router.post('/users/create', UserController.createUser)
router.get('/products', async (req, res) => {
    const productCol = collection(db, 'products')
    const prodSnapshot = await getDocs(productCol)
    const prodList = prodSnapshot.docs.map(doc => doc.data())
    res.status(200).json(prodList)
})

export default router