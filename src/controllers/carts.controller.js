import ProductManagerMongo from "../dao/mongo/Managers/ProductsManagerMongo.js";
import CartsManagerMongo from "../dao/mongo/Managers/CartsManagerMongo.js";
import {cartService} from "../services/index.js";

const prod = new ProductManagerMongo();
const cart = new CartsManagerMongo();


const createCart = async (req,res)=>{
    await cartService.createCart();
    res.send({status:"success",message:"Cart added"})
} 

const getCartsByID = async (req,res)=>{
    const aux = await cartService.getCartsByID(req.params.cid).populate('products.product');
    if (!aux){
       return res.send("el producto no existe");
    }
    return res.send(aux);
}

const agregarProductCart =  async (req,res)=>{
    const ProductId = await prod.getProductsByID(req.params.pid);
     if (ProductId!=='Not found'){
         const mensaje = await cartService.agregarProductCart((req.params.cid),({"product":req.params.pid,"quantity":req.body.quantity || 1}))             
         return res.send({status:"success",message:mensaje})  
     }
     return res.send({status:"success",message:"Product no exist"})       
 
 }

 const eliminarProductCart = async (req,res)=>{
    const ProductId = await prod.getProductsByID(req.params.pid);
    if (ProductId!=='Not found'){
        const mensaje = await cartService.eliminarProductCart((req.params.cid),({"product":req.params.pid}))             
        return res.send({status:"success",message:mensaje})  
    }
    return res.send({status:"success",message:"Product no exist"}) 
}

const ModificarTodosProductCart =  async (req,res) =>{
    const CartId = await cartService.getCartsByID(req.params.cid);
    if (!CartId){
     return res.send({status:"success",message:"no existe el carrito con los productos a modificar"})  
    }
    else{
         const datos = req.body;
         await cartService.ModificarTodosProductCart(req.params.cid,datos);
         return res.send({status:"success",message:"los productos fueron modificados"})  
    }
 }

const ModificarQuantityProduct = async (req,res)=>{
    const CartId = await cartService.getCartsByID(req.params.cid);
    if (!CartId){
        return res.send({status:"no success",message:"el carrito no existe"})
    }
    else{   
        const ProductId = await prod.getProductsByID(req.params.pid);
         if (ProductId!=='Not found'){
            const mensaje = await cartService.ModificarQuantityProduct((req.params.cid),({"product":req.params.pid,"quantity":req.body.quantity}))             
            return res.send({status:"success",message:mensaje})  
        }
        return res.send({status:"success",message:"Product no exist"}) 
    }
}

const EliminarTodosProductCart = async (req,res) =>{
    const CartId = await cartService.getCartsByID(req.params.cid);
    if (!CartId){
     return res.send({status:"success",message:"no existe el carrito con los productos a eliminar"})  
    }
    else{         
         await cartService.EliminarTodosProductCart(req.params.cid);
         return res.send({status:"success",message:"los productos fueron eliminados"})  
    }
 }

export default {
    createCart,
    getCartsByID,
    agregarProductCart,
    eliminarProductCart,
    ModificarTodosProductCart,
    ModificarQuantityProduct,
    EliminarTodosProductCart
}