import { Router } from "express";
import { Auth } from "../middleware/auth";

import UserController from "../controllers/userController";
import MarketController from "../controllers/marketController";

const router = Router()

router.post('/users/login', UserController.login)
router.post('/users/create', UserController.createUser)

router.get('/markets', Auth.auth, MarketController.markets)

export default router