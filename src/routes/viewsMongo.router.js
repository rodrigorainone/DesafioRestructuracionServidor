import { Router } from "express";
import { privacy, handlePolicies } from "../middlewares/auth.js";
import viewsController from "../controllers/views.controller.js";

const router = Router();

router.get ('/',viewsController.mostrarProductos)
router.get('/products', privacy('PRIVATED'),viewsController.mostrarProductosPage)
router.get('/realtimeproducts',viewsController.realTimeProducts)
router.get('/chat', viewsController.chat)
router.get('/carts/:cid' , viewsController.getCarrito)
router.get('/register',privacy('NO_AUTHENTICATED'),viewsController.register)
router.get('/login',privacy('NO_AUTHENTICATED'),viewsController.login)
router.get('/profile',handlePolicies(['ADMIN','USER']),viewsController.profile)


export default router;