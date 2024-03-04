import { Router } from "express";
import { Auth } from "../middleware/auth";

import UserController from "../controllers/userController";
import MarketController from "../controllers/marketController";
import ListController from "../controllers/productController";

const router = Router()

router.post('/users/login', UserController.login)
router.post('/users/create', UserController.createUser)

router.get('/markets', MarketController.markets)
router.get('/market', MarketController.getMarket)
//router.post('/market', MarketController.postMarket)

router.get('/list', ListController.products)

export default router