export default class ProductsService {
    constructor(dao){
        this.dao =dao;
    }
    getProducts = (cantidad)=>{
        return this.dao.getProducts(cantidad);
    }
    getProductsPaginate= (page,limitQ,sortAux,categoryAux,disponibilidadAux)=>{
        return this.dao.getProductsPaginate(page,limitQ,sortAux,categoryAux,disponibilidadAux);
    }

    getProductsBy = (params)=>{
        return this.dao.getProductsBy(params);
    }

    getProductsByID = (id)=>{
        return this.dao.getProductsByID(id);
    }
    createProduct = (product)=>{
        return this.dao.createProduct(product);
    }

    updateProduct = (id,product)=>{
        return this.dao.updateProduct(id,product);
    }

    deleteProduct = (id)=>{
        return this.dao.deleteProduct(id);
    }
}