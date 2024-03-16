import { Router } from "express";
import { Auth } from "../middleware/auth";

import UserController from "../controllers/userController";
import MarketController from "../controllers/marketController";
import ListController from "../controllers/productController";
import ShoppingController from "../controllers/shoppingController";

const router = Router()

router.post('/users/login', UserController.login)
router.post('/users/create', UserController.createUser)

router.get('/markets', MarketController.markets)
router.get('/market', MarketController.getMarket)
//router.post('/market', MarketController.postMarket)

router.get('/list', ListController.products)

router.post('/shopping', ShoppingController.createShopping)
router.get('/shopping/:id', ShoppingController.getShopping)
router.put('/shopping/:id', ShoppingController.updateListShopping)

export default router