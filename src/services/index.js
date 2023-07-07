import UserManagerMongo from "../dao/mongo/Managers/UserManagerMongo.js";
import CartsManagerMongo from "../dao/mongo/Managers/CartsManagerMongo.js"
import ProductManagerMongo from "../dao/mongo/Managers/ProductsManagerMongo.js";
import usersService from "./users.service.js"
import cartsService from "./carts.service.js"
import productsService from "./products.service.js";

export const userService = new usersService (new UserManagerMongo());
export const cartService = new cartsService(new CartsManagerMongo());
export const productService = new productsService (new ProductManagerMongo());